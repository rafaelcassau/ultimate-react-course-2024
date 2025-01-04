// 1 - Destructuring objects and arrays
// 2 - Rest/Spread operator
// 3 - Template literals
// 4 - Ternaries instead if if/else statements
// 5 - Arrow functions
// 6 - Short-Circuiting And Logical Operators: &&, ||, ??
// 7 - Optional chaining
//       book?.author?.name
// 8 - The Array methods
//     8.1 Map
//       const x = [1, 2, 3, 4, 5].map((el) => el * 2);
//     8.2 Filter
//       const x = [1, 2, 3, 4, 5].filter((el) => el > 2);
//     8.3 Reduce
//       const x = [1, 2, 3, 4, 5].reduce((sum, el) => sum + el, 0)
//     8.4 Sort (mutates the original array)
//       const x = [1, 2, 3, 4, 5].sort((a, b) => a - b); ascending
//       const x = [1, 2, 3, 4, 5].sort((a, b) => b - a); descending
//
//       Immutable sort (slice() will copy the array)
//         const x = [1, 2, 3, 4, 5];
//         const y = x.slice().sort((a, b) => a - b);
// 9 - Working with Immutable Arrays
//     9.1 - Add a new element to the end of an array
//       const x = [1, 2, 3];
//       const y = [...x, 4];
//     9.2 - Remove an element of an array
//       const x = [1, 2, 3];
//       const y = x.filter((el) => el !== 3);
//     9.3 - Update an element of an array
//       const x = [1, 2, 3];
//       const y = x.map((el) => el === 2 ? 20 : el);
// 10 - Asynchronous JavaScript: Promises
//     10.1 - Fetch API
//       fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//       console.log('Hello');
//
//     10.2 - Async/Await
//       async function getPots() {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log(data);
//       }
//       const posts = await getPots();
//       console.log('posts', posts);
