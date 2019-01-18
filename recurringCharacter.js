const string1 = `abijbk`;
const string2 = `qikfq`;

const recurringChar = (string) => {
    let count = [];
    for (let i = 0; i < string.length; i++) {
        if(count.includes(string[i])) {
            return string[i]
        } else {
            count.push(string[i])
        }
    }
}


console.log(recurringChar(string1), recurringChar(string2))