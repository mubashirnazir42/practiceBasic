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

for(let x=1;x<=3;x++){
  console.log(`-----------${x}-----------------`);
  for(let k=4 ; k<=7 ; k++){
    console.log(`-----------${k}-----------------`);
    for(let  z=5; z>=1 ; z-- ){
      console.log(`-----------${z}-----------------`);
    }
  }
}

let v=1;

while(v<=10){
  console.log(`${v}`);
  v++;
}

let randomNumber= Math.trunc(Math.random()*6)+1;
console.log(randomNumber);

while(randomNumber !==6 ){
  console.log(` you rolled a dice ${randomNumber}`);
  randomNumber= Math.trunc(Math.random()*6)+1;
  console.log(randomNumber);
  
}