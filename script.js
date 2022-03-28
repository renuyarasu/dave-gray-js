// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
// Higher Order Functions
// A higher order function is a function that takes a function as an argument, or returns a function. Higher order function is in contrast to first order functions, which don’t take a function as an argument or return a function as output.
/* 
 What is a Higher Order Function
 The data we are working with
 forEach() is better than a for loop!
 filter() helps select specific data from results
 map() lets you transform the data
 reduce() computes a single value from the data */

import { posts } from './posts.js';

posts.forEach((post) => {
    console.log(post);
});
// console.clear();