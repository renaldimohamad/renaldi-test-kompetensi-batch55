
function segitiga(n) {
  for(let i = 0; i < n; i++) {
    let stars = ''
 
    for(let j = 0; j <= i; j++ ) {
      stars = stars + ' *';
    }
  
    console.log(stars)
  }
}

segitiga(10)