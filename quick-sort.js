const array = [5, 7, 8, 2, 3, -4, 1, 0, -7, 22, 70, -44]

function quickSort(array) {
    const arr = [...array]
    let midIndex = Math.floor(arr.length / 2),
        mid = arr[midIndex],
        less = [],
        greater = []

    if (arr.length <= 1) return arr

    for (let i = 0; i < arr.length; i++) {
        if (i === midIndex) continue
        if (arr[i] < mid) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...quickSort(less), mid, ...quickSort(greater)]
}

console.log(quickSort(array))