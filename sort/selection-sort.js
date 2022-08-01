const someArray = [4, 1, 5, 2, 3, 0, -1]

const selectSort = array => {
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

console.log(selectSort(someArray))