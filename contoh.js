// ES6
// Map
// filter
// Template String

var arr = [1,2,3]

function kaliDua (arr) {
    var output = []
    for (var i = 0; i<arr.length; i++){
        output.push(arr[i]*2)
//output.push = arr.map
//arr[i]*2 = element
    }
    return output
}

//map = untuk bikin array baru dan datanya bisa dimodif
let arrBaru = arr.map (function(element){
    return element/2
})

// console.log(arrBaru)

//filter = ngereturn dengan boolean
let arrNew = arr.filter (function(element){
    return element % 2 !== 0
})
console.log(arrNew)


// function tiga(){
//     return 3
// }

// function lima(){
//     return 5
// }

// function tambah(num, fn){
//     return num+fn()
// }
// console.log(tambah(5, lima))

//template string = stringnya bisa dienter
var marga = 'eddy'
var name = `lian ${marga}`
console.log(name)