function sumTwoLargestIntegers(array) {
    const filteredArr = array.filter(Number.isInteger)
    const sortedArray = filteredArr.sort((a, b) => b - a);

    if(sortedArray.length < 2) {
        return null;
    } else {
        const sum = sortedArray[0] + sortedArray[1]
        return sum;
    }
}

console.log(sumTwoLargestIntegers([1, 4, 2, 3, 5])) //9
console.log(sumTwoLargestIntegers([1, 2.5, 3, 5.5])) //4
console.log(sumTwoLargestIntegers([1, 8, 2.5, 3, 6.5])) //11
console.log(sumTwoLargestIntegers([1, 'a', 'b', 5.5])) //null
console.log(sumTwoLargestIntegers(['a', 'b'])) //null
console.log(sumTwoLargestIntegers([1.2, 5.6, 3.4])) //null

//unit test
function testSumTwoLargestIntegers() {
    console.assert((sumTwoLargestIntegers([1, 4, 2, 3, 5])) === 9, 'Testcase 1 failed')
    console.assert((sumTwoLargestIntegers([1, 8, 2.5, 3, 5.5])) === 4, 'Testcase 2 failed')
    console.assert((sumTwoLargestIntegers([1, 'a', 'b', 5.5])) === null, 'Testcase 3 failed')
    console.assert((sumTwoLargestIntegers([])) === null, 'Testcase 4 failed')
}
testSumTwoLargestIntegers();