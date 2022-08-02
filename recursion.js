function pow(x, n) {
    let result = 1
    if (n === 1) return x
    result = x * pow(x, n - 1)
    return result
}

console.log(pow(2, 3))

const arr = [1, 2, 3, 4]

function sum(array) {
    let result = 0
    if (array.length === 0) return 0
    result = array.shift() + sum(array)
    return result
}

console.log(sum(arr))