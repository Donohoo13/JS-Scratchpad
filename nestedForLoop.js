const test = [`ab`, `abij`, `abbb`, `aabb`, `abaaabb`]
const correct = [0, 0, 1, 2, 2];
const noPairsAllowed = (words) => {
    const newArray = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i]; 
        let count = 0;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === word[j + 1]) {count += 1; j++;}
        }
        newArray.push(count);
        count = 0;

    }
    return newArray;
}

console.log(`Correct Answer:`, correct)
console.log(`Solution:`, noPairsAllowed(test))