// function pow(x, n) {
//     let result = 1
//     if (n === 1) return x
//     result = x * pow(x, n - 1)
//     return result
// }
function powRecursion(x, n) {
    return n === 1 ? x : x * pow(x, n - 1)
}

// console.log(pow(2, 3))

function factorialRecursion(num) {
    if (num === 1) return num
    return num = num * factorialRecursion(num - 1)
}

// console.log(factorialRecursion(3))
// 1, 1, 2, 3, 5, 8, 13
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

function primitiveFibonacci(n) {
    let prev = 0,
        next = 1

    for (let i = 1; i < n; i++) {
        let temp = next
        next = prev + next
        prev = temp
    }
    return next
}

// console.log(primitiveFibonacci(3))

// console.log(fibonacci(5))

const arr = [6, 11, 2, 5, 0]

function sum(array) {
    let result = 0
    if (array.length === 0) return 0
    result = array.shift() + sum(array)
    return result
}

// console.log(sum(arr))

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((acc, current) => acc + current.salary, 0)
    } else {
        let sum = 0
        for (let item of Object.values(department)) {
            sum += sumSalaries(item)
        }
        return sum
    }
}

// console.log(sumSalaries(company))

function countElementsOfArray(array) {
    let count = 0
    if (array.length === 1) {
        count += 1
    }
    if (array.shift()) {
        count = 1 + countElementsOfArray(array)
    }
    return count
}

// console.log(countElementsOfArray(arr))

function maxIntArr(array) {
    const arr = [...array]
    if (arr.length === 1) return arr[0]
    if (arr.length === 2) return arr[0] > arr[1]

    const maxSub = maxIntArr(arr.slice(1))
    return maxSub > arr[0] ? maxSub : arr[0]
}

// console.log(maxIntArr(arr))

function binarySearch(array, num) {
    const arr = [...array].sort((a, b) => a - b)
    let position = null
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (num === arr[mid]) return mid
        if (num < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return position
}

// console.log(binarySearch(arr, 5))

function binarySearchRecursion(array, num, first = 0, last = (array.length - 1)) {
    let arr = [...array].sort((a, b) => a - b)

    let mid = Math.floor((first + last) / 2)

    switch (true) {
        case arr[mid] === num:
            return true
        case last - first === 0:
            return false
        case arr[mid] < num:
            return binarySearchRecursion(arr, num, mid + 1, last)
        case num < arr[mid]:
            return binarySearchRecursion(arr, num, first, mid)
    }
}

// console.log(binarySearchRecursion(arr, 2))