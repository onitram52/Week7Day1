//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max","HAS","PuRple","dog"]

function findWords(string, dogNames) {
    let foundMatch = false;
  
    for (let i = 0; i < dogNames.length; i++) {
      if (string.toLowerCase().includes(dogNames[i].toLowerCase())) {
        console.log(`Matched ${dogNames[i]}`);
        foundMatch = true;
        }
    }
  
    if (!foundMatch) {
      console.log("No Matches");
    }
}
  
//Call method here with parameters
findWords(dogString, dogNames);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
          arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

console.log(replaceEvens(Given_arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//codewars 1
/**You are given the length and width of a 4-sided polygon. 
 * The polygon can either be a rectangle or a square.
 * If it is a square, return its area. 
 * If it is a rectangle, return its perimeter. */

 /**original solution
  * def area_or_perimeter(l , w):
    return l*w if l == w else l*2 + w*2
  */
function areaOrPerimeter(l, w){
    return l === w ? l * w : l * 2 + w * 2;
}

//codewars 2 
/** You are given an odd-length array of integers, in which all of them are the same, 
 * except for one single number.
  Complete the method which accepts such an array, 
  and returns that single different number.*/

function stray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(x => x === arr[i]).length === 1) {
        return arr[i];
        }
    }
}