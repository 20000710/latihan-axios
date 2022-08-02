
// main function sorting
const searching = (char, limit, callback) => {
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]

    const sorting = callback(char, name, limit)

    if(sorting !== undefined){
        console.log(sorting)
    }
}

// callback function sorting
const sorting = (char, names, limit) => {
    let arr = []
   
    names.map( name => {
        // console.log('name: ', name)
        const allNames = name.toLowerCase()
        const input = char.toLowerCase()

        let matching = allNames.match(input)
        // console.log('matching: ', matching)
        if(matching !== null) {
            const { input } = matching
            arr.push(input)
        }
    })

    try {
        if(arr.length === 0) throw "Data tidak ditemukan"
        else {
            arr.splice(limit, arr.length-limit)
            return arr;
        }
    } catch (error) {
        console.log(error)
    }
}

searching("an", 5, sorting)