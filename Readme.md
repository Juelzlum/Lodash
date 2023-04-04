# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @juelzlum/lotide`

**Require it:**

`const _ = require('juelzlum/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: get the first index of an array
* `tail(arr)`: get the last index of an array
* `middle(arr))`: middle number of an array
* `eqArrays(arr1,arr2)` : compare 2 arrays 
* `assertEqual(actual,expected)`: comparing actual vs expected
* `assertArraysEqual(arr1, arr2)` : eqArrays but it has the comparison of it

