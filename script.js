const subYear = function(saal){
return saal/2;
}

const birthYear = function(year){


  for(i=0; i <=year.length-1;i++){
           
    const x =subYear(year[i]);
    console.log(x);
    

    console.log(`my age is ${2024- year[i]}`); 
  }


}
birthYear([1994,1997,2000,2010]);






for(let rep =5; rep <= 10 ; rep= rep+1){
  
  console.log(`lifting up weight ${rep} 🏆 `);
  
  
}

const aliRaza =[
  `ali`,
  "raza",
  2024-1994,
  "sheikh",
  [21,45,67],
  {
    fName : 'waqas',
    sName : 'raheem',
    tName : 'jonas'
  }
];

const type=[];

for(i=0 ; i<=aliRaza.length-1;i++){
  console.log(aliRaza[i], typeof(aliRaza[i]));
// type.push(typeof aliRaza[i]);
type[i] = aliRaza[i]
}

console.log(type);



