// write a function that can return the second largest number in an array

function secondlargestNumber(arr) {
    if (arr.length < 2) return null

    let firstLargest = -Infinity // Any real number in the array will be greater than -Infinity, ensuring accurate comparison.
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            console.log(arr[i])
            secondLargest = arr[i]
        }
    }
    return secondLargest
    
}

let arr = [4, 9, 9, 0, 2, 8, 8, 7, 1, 7]

let result = secondlargestNumber(arr)
console.log(result)