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

for(let k=0; k<=10 ; k++){
if(k==2) continue;
console.log(`${k}`)
}



let friend = [

  'mubashir',
  [23,45,23],
  2024-1994,
  [`waseem`,'john','jonas']

]
const x=[]

for(let i=friend.length-1;i>=0 ; i--){
  
 x.push(friend[i]);
}

console.log(x);


for(let i=1 ; i<=3;i++){
  for(let j=1 ; j<=3 ; j++){
    for(k=1; k <=5 ; k++){
      console.log(`${i}, ${j} , ${k}  `);
    }
  }
}


for(let j=3 ; j>=1;j--){
  for(let k=5 ; k>=3 ; k--){
    console.log(`${j} , ${k} `);
  }
}