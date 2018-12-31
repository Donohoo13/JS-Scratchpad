const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i< companies.length; i++) {
//     console.log("for loop", companies[i])
// }

// forEach
// Can take in 3 things.  company, index, companies

companies.forEach(company => {
    console.log("forEach", company, company.name)
})

// filter

// Get 21 in older for loop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(age => {
//     if(age >= 21) {
//         return true;
//     }
// });

const canDrink = ages.filter(age => age >= 21);
console.log("Can Drink:", canDrink)

// Filter retail companies

const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail') {
        return true;
    }
});
console.log("Retail Companies", retailCompanies);

const technologyCompanies = companies.filter(company => company.category === "Technology");
console.log("Technlogy Companies", technologyCompanies)

const eightiesCompanies = companies.filter(company => company.start <= 1989 && company.start >= 1980);
console.log("80's Companies", eightiesCompanies)

const tenPlusYears = companies.filter(company => company.end - company.start >= 10);
console.log("10 year track record:", tenPlusYears)

// map
// Can take 3 parameters, company, index, companies.

// const companyNames = companies.map(function(company) {
//     return company.name;
// });
const companyNames = companies.map(company => company.name)
console.log("Company Names:", companyNames)

const test = companies.map(company => ({"Name": company.name, "Start": company.start, "End": company.end}))
console.log(test)

const agesUp = ages.map(age => age *2)
console.log("Multiplied:", agesUp)

// sort

// Sort companies by start year.
// const sortedCompanies = companies.sort((c1, c2) => {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1
//     }
// });
// console.log(sortedCompanies)

const sortedCompanies = companies.sort ((a, b) => (a.start > b.start ? 1 : -1))
console.log("Sorted by start date:", sortedCompanies)

//Sort Ages
const sortAges = ages.sort((a, b) => a - b);
console.log("Sorted Ages:", sortAges)

// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum);

const ageSum = ages.reduce((total, age) => total + age);
console.log("Sum of ages:", ageSum);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log("Total Years:", totalYears)

// Combine Methods

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.reduce((a, b) => a + b);
console.log(combined)