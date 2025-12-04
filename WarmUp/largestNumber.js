// write a function that can return the largest number in an array

function largestNumber(arr) {

    let largest = -Infinity // Any real number in the array will be greater than -Infinity, ensuring accurate comparison.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
    
}

let arr = [2, 4, 5, 9, 3, 1, -6, -1, -5]

let result = largestNumber(arr)
console.log(result)