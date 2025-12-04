// write a function that returns the number of negative numbers in an array

function countNegative(arr) {

    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count = count + 1
        }
    }

    return count
}
let arr = [2, -4, -5, 9, -3, -1, 6,]

let result = countNegative(arr)
console.log(result)