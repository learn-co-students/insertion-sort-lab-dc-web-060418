function findMinAndRemove(array){
    let min = array[0]
    for(let i = 0; i < array.length; i++) {
        if(min>array[i]) {
            min = array[i]
        }
    }
    let minI = array.indexOf(min)
    array.splice(minI, 1)
    return min
}

function insertionSort(array){
    let sortedArray = []
    while(array.length !== 0) {
        //find the minimum value, push it to the sortedArray
        //also modify original array by removing the min value
        sortedArray.push(findMinAndRemove(array))
    }
    return sortedArray
}
