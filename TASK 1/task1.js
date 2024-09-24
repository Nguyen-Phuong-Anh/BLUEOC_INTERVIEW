function mostFrequentStringLengths(strings) {
    const lengths = strings.map(str => str.length)

    const lengthCounts = {}
    lengths.forEach(length => {
        lengthCounts[length] = (lengthCounts[length] || 0) + 1;
    })

    const maxFrequency = Math.max(...Object.values(lengthCounts)); 

    const mostFrequentLength = Object.keys(lengthCounts).filter(length => lengthCounts[length] === maxFrequency) //get the key that appears the most

    return strings.filter(str => mostFrequentLength.includes(str.length.toString()))

}

console.log(mostFrequentStringLengths(['a', 'ab', 'abc', 'cd', 'def', 'gh']
)) // [ 'ab', 'cd', 'gh' ]
console.log(mostFrequentStringLengths(['aa', 'g', 'cc', 'cffd', 'e']
)) //[ 'aa', 'g', 'cc', 'e' ]
console.log(mostFrequentStringLengths(['re', 'ge', 'ccc', 'ddd', 'cffd'] 
)) //[ 're', 'ge', 'ccc', 'ddd' ]
console.log(mostFrequentStringLengths(['r', 'e', 'c'] 
)) //[ 'r', 'e', 'c' ]

//unit test function
function testMostFrequentStringLengths() {
    console.assert(JSON.stringify(mostFrequentStringLengths(['a', 'ab', 'abc', 'cd', 'def', 'gh']) === JSON.stringify([ 'ab', 'cd', 'gh' ])), 'Testcase 1 failed')
    console.assert(JSON.stringify(mostFrequentStringLengths(['aaa', 'b', 'cc', 'ddd', 'e', 'ff'])) === JSON.stringify(['b', 'e']), 'Testcase 2 failed');
    console.assert(JSON.stringify(mostFrequentStringLengths(['xx', 'xy', 'z', 'a', 'aaa'])) === JSON.stringify(['xx', 'xy', 'z', 'a']), 'Testcase 3 failed');
    console.assert(JSON.stringify(mostFrequentStringLengths([])) === JSON.stringify([]), 'Testcase 4 failed');
    console.log("All tests passed!");
}
testMostFrequentStringLengths();