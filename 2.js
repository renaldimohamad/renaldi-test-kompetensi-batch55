function hitungHarga(voucher, harga) {
  if (voucher === 'DumbWaysJos' && harga >= 50000) {
    const diskon = 21.1;
    
    let jumlahPotongan = diskon * harga / 100
    
    if(jumlahPotongan > 20000) {
      jumlahPotongan = 20000;
    }

    const hargaDiskon = harga - jumlahPotongan;
    
    console.log('Harga yang harus dibayar: ' + hargaDiskon)
    console.log('Diskon: '+ jumlahPotongan)
    console.log('Kembalian: ' + jumlahPotongan)
    
    return
  }

  if (voucher === 'DumbWaysMantap' && harga >= 80000) {
    const diskon = 30;
    
    let jumlahPotongan = diskon * harga / 100
    
    if(jumlahPotongan > 40000) {
      jumlahPotongan = 40000;
    }

    const hargaDiskon = harga - jumlahPotongan;
    
    console.log('Harga yang harus dibayar: ' + hargaDiskon)
    console.log('Diskon: '+ jumlahPotongan)
    console.log('Kembalian: ' + jumlahPotongan)
    
    return
  }
}

// vaucher: 'DumbWaysMantap', 'DumbWaysJos'
hitungHarga('DumbWaysMantap', 150000)