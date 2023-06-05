const stringsConstruction = (A, B) => {
    charCountA = {}
    charCountB = {}
    for (let char of A) {
        charCountA[char] = (charCountA[char] || 0) + 1
    }
    for (let char of B) {
        charCountB[char] = (charCountB[char] || 0) + 1
    }
    let min = Infinity
    for (let char in charCountA) {
        let occuranceA = charCountA[char]
        let occuranceB = charCountB[char] || 0
        let currentMin = Math.floor(occuranceB / occuranceA)
        if (currentMin < min) {
            min = currentMin
        }
    }
    return min
}

console.log(stringsConstruction("abc", "abccba")) // 2
console.log(stringsConstruction("abc", "def")) // 0
console.log(stringsConstruction("hnccv","hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn")) // 3
console.log(stringsConstruction("zzz","zzzzzzzzz")) // 3