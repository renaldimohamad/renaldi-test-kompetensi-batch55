const express = require("express");
const { Sequelize, QueryTypes } = require("sequelize");

const config = require("./config/config.json");
const sequelize = new Sequelize(config.development);

const upload = require("./src/middleware/uploadFile");

const path = require("path");

const app = express();
const port = 5000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));
app.use(express.urlencoded({ extended: false }));


app.get('/', home)
app.get('/add-hero', addHeroForm)
app.post('/add-hero', upload.single('gambar'), addHero)
app.get('/add-type', addTypeForm)
app.post('/add-type', addType)
app.post('add-type', addType)
app.get('/detail/:id', detail)

async function home(req, res) {
  const query = `SELECT "heroes_tb".*, "type_tb".name as type_name FROM "heroes_tb" INNER JOIN "type_tb" ON "heroes_tb".type_id = "type_tb".id ORDER BY "heroes_tb".name;`

  const data = await sequelize.query(query, {type: QueryTypes.SELECT})

  res.render('index', {data})
}

function addHeroForm(req, res) {
  res.render('add-hero')
}

async function addHero(req, res) {
  const {name, type_id} = req.body
  const filename = req.file.filename;
  const image = `http://localhost:${port}/uploads/${filename}`;

  const query = `INSERT INTO "heroes_tb" (name, type_id, photo) VALUES ('${name}', ${type_id}, '${image}')`;

  await sequelize.query(query, {type: QueryTypes.INSERT})

  res.redirect('/')
}

function addTypeForm(req, res) {
  res.render('add-type')
}

async function addType(req, res) {
  const {name} = req.body;

  const query = `INSERT INTO "type_tb" (name) VALUES ('${name}')`
  
  await sequelize.query(query, {type: QueryTypes.INSERT})

  res.redirect('/')
}

async function detail(req, res) {
  const {id} = req.params

  const query = `SELECT "heroes_tb".*, "type_tb".name as type_name FROM "heroes_tb" INNER JOIN "type_tb" ON "heroes_tb".type_id = "type_tb".id WHERE "heroes_tb".id = ${id}`
  const detail = await sequelize.query(query, {type: QueryTypes.SELECT})

  if (detail.length === 0) {
    return res.redirect('/')
  }

  res.render('detail', {detail: detail[0]})
}

app.listen(port, function() {
  console.log(`Server berjalan di port ${port}`);
})