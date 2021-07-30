/*
Anagrams:
  Given two strings, write a function to determine if the second string is an anagram of the first. 
  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

  we can assume all letters are lowercase and spaces don't come into play.
  ie. 
  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('texttwisttime', 'timetwisttext') // true
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let str1List = {};
  let str2List = {};
  
}