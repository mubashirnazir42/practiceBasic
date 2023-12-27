"use strict"

const birthYear = [1991,  "ali", 1986 , 2012, 2000]; 
const ages= []; 
for(let i=0 ; i<=birthYear.length-1 ; i++){ 
  if(typeof birthYear[i] !== 'number') continue;
  console.log(typeof birthYear[i]);
      ages.push(2024 - birthYear[i]) 

}

console.log(ages);

const boyfriendIsPaying = false;
const isSale = false;

if (boyfriendIsPaying || !isSale) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}

const age = 12;
if(age !==24){
console.log(`can apply in uni`);
}

for(let k=0; k<=4 ; k++){
  if(typeof(age) !== 'string') break;
    console.log(`done`)
    
}


