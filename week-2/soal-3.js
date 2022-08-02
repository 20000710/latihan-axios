const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
    
    const validator = callback(nilaiAwal, nilaiAkhir, dataArray)

    if (validator !== undefined){
        console.log(validator)
    }

}

// function callback validator
const validator = (awal, akhir, dataArray) => {
    let arr = []
    
    try {
        if(awal < akhir && dataArray.length > 5){
            let sort = dataArray.sort((a, b) => {
                return a-b;
            })
    
            sort.map(number => {
                if(number > awal && number < akhir)
                arr.push(number)              
            })
        } 
        else if(awal > akhir) throw "Nilai akhir harus lebih besar dari nilai awal"
        else if(dataArray.length <= 5) throw "Jumlah angka dalam dataArray harus lebih dari 5"
    } catch (error) {
        console.log(error)
    }

    return arr;
}

seleksiNilai(3, 15, [2, 25, 4, 14, 17, 30, 8], validator)