for(let k=0; k<=2;k++){
  for(let i=1; i<=10; i=i+1){
    console.log(`2 * ${i} = ${2*i} `);
  
  
  }
  console.log(`hi ${k}`);
 
}

console.log(`=====>the end<======`);

const movies = [ `alexander` , `wall of karachi` , 'anonymousfunction' ];

for(let l = 0; l<=movies.length-1 ; l++){
 console.log( movies[l]);
}

movies.push('hi');
console.log(movies);




const birthYear = [1998 , 1994 , 2000 , 1876];


for(let i=0 ; i<= birthYear.length-1 ; i++){

const age = 2024 - birthYear[i]
console.log(` my age is ${age} `);

}

for(let breakPoint = 5 ; breakPoint>=0 ; breakPoint--){
console.log(birthYear[breakPoint]);
}



for(i=0; i<=2 ; i++){

  console.log(`${i}`);

  for(j=i+1 ; j<=5 ; j++){
    console.log(`${j}`);
  }
   
}



for(i=10 ; i>=3 ; i--){
console.log(`outerloop`);  //10                 ,9,                 8,                7
  for(j=1;j<=5 ; j++){
    console.log(`innerloop`); // 1,2,3,4,5,      1,2,3,4,5          1,2,3,4,5         1,2,3,4,5
  }

}

const y=Math.trunc(Math.random()*5)
console.log(`${y}`);
while(y==3){
  console.log(`stop ${y}`);
  break;
}


