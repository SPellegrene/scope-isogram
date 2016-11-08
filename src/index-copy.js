/**
An isogram is a word that has no repeating letters, consecutive or
non-consecutive. Implement a function that determines whether a
string that contains only letters is an isogram. Assume the empty
string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
**/

 //let the strings in
// function isIsogram(str){
//
// //assign the string to a variable that splits each string into seperate letters and lowercase
//   var isogram = str.toLowerCase().split('');
//   return isogram;
// }
// //run through each string/letter in isogram
//   for (var i = 0; i < isogram.length; i++){
//     return i;
//   }
//while looping, if the letter has already been found then make it false


// if the letter gets marked as undefined, then it's true

//otherwise return the letter as false

function isIsogram(str){
  var isogram = {};
  if (typeof str === "undefined") {
    return true;
  }

    for (var i=0; i<str.length; i++) {
      var currentLetter = str[i].toLowerCase();
        if (isogram[currentLetter]){
          return false;
        } else {
          isogram[currentLetter] = currentLetter;
        }
    }

    return(true);
};



console.assert( isIsogram("Dermatoglyphics") );
console.assert( isIsogram("isogram") );
console.assert( isIsogram("aba") === false );
console.assert( isIsogram("moOse") === false );
console.assert( isIsogram("isIsogram") === false );
console.assert( isIsogram("") );
