const string1 = `abijbk`;
const string2 = `qikfq`;
const string3 = `aaijlj`;

const recurringChar = string => {
  let count = [];
  for (let i = 0; i < string.length; i++) {
    if (count.includes(string[i])) {
      return string[i];
    } else {
      count.push(string[i]);
    }
  }
};

// console.log(recurringChar(string1), recurringChar(string2))

const nonRecurringChar = string => {
  let count = [];
  for (let i = 0; i < string.length; i++) {
        count.push(string[i]);
        if (count.)
  }
};

console.log(this.count, nonRecurringChar(string3));
