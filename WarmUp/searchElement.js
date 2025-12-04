// write a function that search for an element in an array and return the index, if the element is not present return -1

function searchElement(array, number) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i
        }
    }
    return -1
    
}

let array = [1, 9, 10, 34, 12, 89, 12, 2, 3, 4, 1,]
let result = searchElement(array, 29)
console.log(result)