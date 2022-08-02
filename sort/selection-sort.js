const someArray = [4, 1, 5, 2, 3, 0, -1]
// v1
const selectionSort = array => {
    const arr = [...array]

    for (let i = 0; i < arr.length - 1; i++) {
        let indexOfMin = i

        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[indexOfMin]) {
                indexOfMin = k
            }
        }

        if (indexOfMin !== i) {
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]]
        }

    }
    return arr
}

console.log(selectionSort(someArray))

// v2
function smallest(array) {
    let indexOfMin = 0
    for (let i = 0; i <= array.length; i++) {
        if (array.length === 1) {
            indexOfMin = i
        } else if (array[i] < array[indexOfMin]) {
            indexOfMin = i
        }
    }
    return indexOfMin
}

function selectionSort2(array) {
    const copyArr = [...array]
    const result = []

    while (copyArr.length) {
        let indexOfMin = smallest(copyArr);
        if (copyArr.length === 1) result.push(copyArr.shift())
        if (copyArr[0] >= copyArr[indexOfMin]) {
            [copyArr[0], copyArr[indexOfMin]] = [copyArr[indexOfMin], copyArr[0]]
            result.push(copyArr.shift())
        }
    }

    return result
}

console.log(selectionSort2(someArray))
