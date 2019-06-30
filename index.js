'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: returns value unchanged
 * 
 * @param {value} value: any value.
 * 
 * @return {value} value: value unchanged
 */
 
function identity (value){
    //returns value unchanged
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: checks the value for what data type it is
 * 
 * @param {value} value: any data type
 * 
 * @return {value} value: string
 * 
 */
 
function typeOf(value){
    if (Array.isArray(value)){
        return 'array'
    } else if (value === null){
        return 'null'
    }
    return typeof value;
}
module.exports.typeOf = typeOf;


/**
 * first: identifies the first set of elements in an array based on the input
 * 
 * @param {array, number} array: a list of elements 
 * value: a positive number or nothing
 * 
 * @return {array} value: returns an array of the first elements of the input
 * array, if there is no input it will simply return the first element of the array
 */
 
function first(array, value){
    if (!Array.isArray(array)){
        return [];
    } else if (typeof value !== 'number' || value === undefined){
        return array[0];
    } else if (value < 0){
        return [];
    } else if (value > array.length){
        value = array.length;
    } let arr = []; 
    
    for (let i = 0; i < value; i++){
        arr.push(array[i]);
    }
    return arr;
}

module.exports.first = first;

/**
 * last: looks through an array for the last set amount of elements
 * 
 * @param {array, number} array: a list of elements
 * number: any positive number or nothing
 * 
 * @return {array} value: returns an array of the last set amount of elements in
 * the input array, if there is no input value it will return the last element in the array
 */
 
function last(array, value){
    if (!Array.isArray(array)){
        return [];
    } else if (typeof value !== 'number' || value === undefined){
        return array[array.length - 1];
    } else if (value < 0){
        return [];
    } else if (value > array.length){
        return array;
    } let arr = []; 
    
    for (let i = value - 1; i < array.length; i++){
        arr.push(array[i]);
    }
    return arr;
}
 module.exports.last = last;
 
 /**
 * indexOf: searches through an array for a given value 
 * 
 * @param {array, value} array: a list of elements
 * value: any value
 * 
 * @return {index} number: returns the index number of the element in the array
 */

function indexOf (array, value){
    for (var i = 0; i < array.length; i++){
        if (value === array[i]){
            return i;
        } 
    }
    return -1
}

module.exports.indexOf = indexOf; 

/**
 * contains: searches through an array for a given value 
 * 
 * @param {array, value} array: a list of elements
 * value: any value
 * 
 * @return {boolean} returns true if the value is found in the given array or false
 * if it isn't
 */
 
function contains(array, value){
    
    if(!value){
        return false;
    }
    let count = 0;
    
    for (var i = 0; i < array.length; i++){
        
        (value === array[i]? true : count++) 
        
    }
    
    return (count === array.length)? false : true;
    
} 

module.exports.contains = contains;

/**
 * each: tests if the collection is an array or object, goes through it and 
 * applies a function to each element in it
 * 
 * @param {collection, function} collection: a list of elements, 
 * function: any function taking in the parameters: element, index, and collection 
 * if it is an array, or the parameters: value, key, and collection if it is an object
 * 
 * @return {nothing} simply alters the original array or object
 */
 
function each (collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            // call function for the element, it's index, and the array
            func(collection[i], i, collection)
        }
    } else {
        for (let key in collection){
            func(collection[key], key, collection)
        }
    }
};

module.exports.each = each;

/**
 * unique: uses the _.indexOf() function to search through an array for a duplicate elements
 * 
 * @param {array} array: a list of elements
 * 
 * @return {array} returns a new array with same elements, but removes any duplicates
 */
 
function unique (array){
    let arr = [];
    for (var i = 0; i < array.length; i++){
       //let index = _.indexOf(array, array[i])
       if (indexOf(array, array[i]) === i){
           arr.push(array[i])
       }
    }
    return arr
};

module.exports.unique = unique;

/**
 * filter: applies an action to each element in an array that results in a boolean
 * value and creates a new array with elements that tested true
 * 
 * @param {array, function} array: a list of elements
 * function: any function that returns a boolen and takes the parameters: element, 
 * index, and array
 * 
 * @return {array} returns an array filled with the elements that tested true when
 * run through the given function
 */
 
function filter (array, func){
    let arr = []
    for(var i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            arr.push(array[i])
        }
    }
    return arr
}

module.exports.filter = filter;

/**
 * reject: applies an action to each element in an array that results in a boolean
 * value using _.filter() and creates a new array with elements that tested false
 * 
 * @param {array, function} array: a list of elements
 * function: any function that returns a boolen and takes the parameters: element, 
 * index, and array
 * 
 * @return {array} returns an array filled with the elements that tested false when
 * run through the given function
 */
 
function reject (array, func){
    const result = filter(array, function(element, index, collection){
        return !func(element, index, collection);
        });
    return result;
    };

module.exports.reject = reject;

/**
 * partition: applies an action to each element in an array that results in a boolean
 * value and creates a new array filled with two sub arrays with elements that have
 * been run through the function
 * 
 * @param {array, function} array: a list of elements
 * function: any function that returns a boolen and takes the parameters: element, 
 * index, and array
 * 
 * @return {array} returns an array filled with two sub arrays, the 0 index filled with
 * elements that tested true and the 1 index filled with elements that tested false
 */
 
function partition (array, func){
    let arr = [[],[]]
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            arr[0].push(array[i])
        } else {
            arr[1].push(array[i])
        }
    }
    return arr
}

module.exports.partition = partition;

/**
 * map: tests if the collection is an array or object, goes through it and 
 * applies a function to each element in it using the .each() function, but creates
 * a new array filled with the modified elements
 * 
 * @param {collection, function} collection: a list of elements
 * function: any function taking in the parameters: element, index, and collection
 * 
 * @return {array} returns a new array filled with the elements after passing them 
 * through the input function
 */
 
function map (collection, func){
    const result = [];
    each(collection, function(element, index, c){
        result.push(func(element, index, c));
    });
    return result;
};

module.exports.map = map;

/**
 * pluck: searches through an array of objects for the same input 
 * property using _.map() and returns a new array with the value of that property
 * 
 * @param {array of objects, property} array of objects: an array that contains
 * objects in its indexes
 * property: any keyword that may be in an object 
 * 
 * @return {array} array: a list of the values assigned to the property 
 */
 
function pluck (array, prop){
    return map(array, function(element, index, collection){
        return element[prop]
    });
}

module.exports.pluck = pluck;

/**
 * every: tests if the collection is an array or object, goes through it and 
 * applies a function that asks for a boolean value to each element in it
 * 
 * @param {collection, function} collection: a list of elements
 * function: any function taking in the parameters: element, index, and collection if it is an 
 * array, or the parameters: value, key, and collection if it is an object
 * 
 * @return {boolean} if every element passed through the input function is true then it 
 * returns true, if even one is false, it returns false
 */

function every (collection, func){
    
    if (Array.isArray(collection)){

        for (let i = 0; i < collection.length; i++){
            if (typeof func !== 'function'){
                if (!collection[i]){
                    return false
                }
            } else if (!func(collection[i], i, collection)){
                return false
            }
        }

    } else {
        
        for (var key in collection){
            if (typeof func !== 'function'){
                if (!collection[key]){
                    return false
                }
            }else if (!func(collection[key], key, collection)){
                return false
            }
        }
    }
     return true
}

module.exports.each = each;

/**
 * some: tests if the collection is an array or object, goes through it and 
 * applies a function that asks for a boolean value to each element in it
 * 
 * @param {collection, function} collection: a list of elements
 * function: any function taking in the parameters: element, index, and collection 
 * if it is an array, or the parameters: value, key, and collection if it is an object
 * 
 * @return {boolean} if even one element passed through the input function is true 
 * then it returns true, if every element is false it returns false
 */

function some (collection, func){
    
    if (Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            if(typeof func !== 'function'){
                if (collection[i]){
                    return true
                }
            } else if (func(collection[i], i, collection)){
                return true
            }
        }
    } else {
        for (let key in collection){
            if (typeof func !== 'function') {
                if (collection[key]){
                    return true;
                }
            } else if (func(collection[key], key, collection)){
                return true
            }
        }
    }
    return false
}

module.exports.some = some;

/**
 * reduce: tests if the array is an array or object using _.each() and applies
 * the input function to each element starting with the seed, if there is no seed it
 * will use the first element in the array, the result of the applied function
 * becomes the previous result and continues until the last element has been passed
 * into the function, then it returns the final value of the last function call
 * 
 * @param {array, func, seed} array: a list of elements
 * function: any function taking in the parameters: previous result, current value, 
 * current index
 * seed: the place in an array where the function will start
 * 
 * @return {value} returns the final value of the previous result
 */

function reduce (array, func, seed){
    var previousResult;
    
    if (seed === undefined){
        previousResult = array[0];
    } else {
        previousResult = seed;
    }
    each(array, function(element, i , array){
        if (i === 0 && seed === undefined){
            return;
        }
        previousResult = func(previousResult, element, i)
    })
    return previousResult
    }
    
module.exports.reduce = reduce;

/**
 * extend: takes any amount of objects and compiles them all into the first
 * given and returns a single object
 * 
 * @param {object, ...objects} object: the first object, the one that will add the 
 * rest of the object to
 * ...objects: a spread object, an indefinite amount of objects
 * 
 * @return {object} returns one singular object containing the contents of all
 * input objects
 */

function extend(object, ...objects){
    for (let i = 0; i < objects.length; i++){
        for (let key in objects[i]){
            object[key] = objects[i][key]
        }
    }
    return object
}

module.exports.extend = extend;