

// function test() {
//   return 'anik';
// }

// const result = test();
// console.log(result);

// -------------------------

// async function test() {
//   return 'anik';
// }

// const result = test();
// console.log(result);


// -----------------------

// const a = 10;
// const b = 20;


// console.log('hello form 5');
// const sum = a + b;


// const test = () =>{
//     const res =  fetch(' https://openapi.programming-hero.com/api/news/category/01');
//     console.log(res);
// }

// test();
// console.log(sum);


// -----------------------------

const a = 10;
const b = 20;


console.log('hello form 5');
const sum = a + b;


const test = async() =>{
    const res = await fetch(' https://openapi.programming-hero.com/api/news/category/01');
    const data = await res.json();
    console.log(data);
}

test();
console.log(sum);