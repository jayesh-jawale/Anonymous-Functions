// Print odd numbers in array.

let arr = [1,2,3,4,5,6,7,8,9,10];
var odd_numbers = function(arr) {
    return arr.filter(n => n%2);
}

console.log(odd_numbers(arr));

//------------------------------------------------------------------------------------------------------

// Convert all the strings to title caps in a string array

var str = "jayesh jawale wants to become a passionate developer"
var str_function = function() {
  return str.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ');
}

console.log(str_function(str));

//------------------------------------------------------------------------------------------------------

// Sum of all numbers in an array

var arr = [1,2,3,4,5];
var array_addition = function() {
    let sum = (a, b) => a + b;
    return arr.reduce(sum)
}

console.log(array_addition(arr))

//------------------------------------------------------------------------------------------------------

// Return all Prime numbers in an array

const arr = [...Array(20).keys()]
var prime = function(num) {
    for(let start = 2; num > start; start++){
        if (num % start == 0) {
            return false;
        }      
    }
    return num > 1;
}

console.log(arr.filter(prime));

//------------------------------------------------------------------------------------------------------

// Return all palindromes in an array

let palindrome = function(word) {
    let len = word.length;

    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

    let split = end.split('').reverse().join('');
    return (start === split)

}

console.log(palindrome('radar'));

//------------------------------------------------------------------------------------------------------

// Return median of 2 sorted arrays of same size

const nums1 = [1,3,4]
const nums2 = [2,3,5]

var median = function(nums1, nums2) {
    const totalArray = [...nums1, ...nums2].sort((a,b) => a -b)

    const mp = Math.floor(totalArray.length/2);

    return totalArray%2 !== 0 ? totalArray[mp] : ((totalArray[mp] +totalArray[mp - 1]) / 2);
}

console.log(median(nums1, nums2));

//------------------------------------------------------------------------------------------------------

// Remove duplicates from an array

let chars = ['A', 'B', 'A', 'C', 'B'];

let unique = function(element) {
  return chars.filter((value, index) => element.indexOf(value) === index)
}

console.log(unique(chars));

//------------------------------------------------------------------------------------------------------

  