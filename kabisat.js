function kabisat(tahun) {
    if(
        tahun % 400 === 0 ? tahun % 100 === 0 : tahun % 4 === 0
    ){
        console.log('Tahun', tahun, 'adalah tahun kabisat')
    }else{
        console.log('Tahun', tahun, 'bukan tahun kabisat')
    }
}

kabisat(2016)