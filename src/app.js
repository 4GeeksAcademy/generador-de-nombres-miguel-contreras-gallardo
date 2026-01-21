import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            console.log(pronoun[i] + adj[a] + noun[n] + '.com' + '.es')
        }
    }
}
 // console.log("Hello Rigo from the console!");
};
