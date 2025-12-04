// print Hello World 20 times using for loop

function printHelloWorld() {
    for (let i = 0; i < 20; i = (i + 1 || i++)) {
        console.log("Hello World")
    }
}
printHelloWorld()


// print Hello World 10 times using reverse for loop

function printHelloWorldReverseLoop() {
    for (let i = 10; i > 0; i = (--i || i - 1)) {
        console.log("Hello World")
    }
}

printHelloWorldReverseLoop()


// print Array Values with for loop

function printArrayWithLoop(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Value", array[i])
    }
}
let arr = [1, 5, 6, 9, 10, 3, 5, 6, 21, 14,]
printArrayWithLoop(arr)


// print all the even numbers

function isEvenNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log("Even Numbers", arr[i])
        }
    }
}
let evenArray = [1, 5, 6, 9, 10, 3, 5, 6, 21, 14,]
isEvenNumber(evenArray)