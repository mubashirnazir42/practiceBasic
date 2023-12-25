const bills=[125,555,44];
const calcTip= function(billValue){
    const tip=  billValue >= 50 && billValue<=300 ? 0.15* billValue : 0.2 *billValue;
    return tip;
  }

  const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
  
 

 const totals = [(bills[0]+tips[0]) , (bills[1]+tips[1]) ,  (bills[2]+tips[2]) ]
    console.log(bills, tips ,totals);


    const aboutMubashir=[
        'mubashir',
        5,7,
        2024-1994,                          //elements, reference them by their ordder number
        'nazirhussain',
        'fun guy',
        'iphoneX',
        ['sauliha','tabasum','sabah']

    ];
    




const namekey ='name';
console.log(mubashir['father'+namekey]);



console.log(mubashir.name);
console.log(mubashir.fathername);
console.log(mubashir['fathername']);




console.log(namekey);
console.log(mubashir); 
console.log(mubashir.name);
console.log(mubashir.x);
console.log(mubashir['name']);
console.log(mubashir['family']);

console.log(mubashir['fatherName']);





console.log(mubashir.family);
console.log(mubashir.x- 29);
console.log(aboutMubashir[3]);


console.log(mubashir);
console.log(aboutMubashir);


const mubashir={
    name : 'mubashir',
    fathername : 'nazirhussain',
    familyname : 'sultani',
    x:2024,
    fatherName : 'nazir hussain',               // reference them by key : value
    birthYear :1994,
    personlity : 'fun guy',
    family : ['sauliha','tabasum','sabah'],
    jonas : {
        name:'ali'
    },
    calcTip : function(){
     this.age = 2024-this.birthYear;
      return this.age;
    },
    hasDriverLisence : true,

    getSummary : function(){
       return  `${this.name} is ${this.calcTip()} years old and  ${this.hasDriverLisence? 'aa' : 'no'} driver lisence`
    }
}


const arr = ['mubashir', 'nazir','hussain'];

arr.push('ali') // dot notation b aik object hai

console.log(arr);



console.log(mubashir['getSummary']());



console.log(mubashir['jonas']['name']);
console.log(mubashir['calcTip']());
console.log(mubashir.age);
console.log(`${mubashir.name} has ${mubashir.family.length} friends but his best friend is ${mubashir.family[0]}.` );

const interestedIn =prompt("what do you want to choose");


if(mubashir[interestedIn]){
    console.log(mubashir[interestedIn]);
}else{
    console.log('invalid request ⚠ use correct numbers');
}
mubashir.location= 'karimabad';
mubashir.twitter = '@mubashirnazir42';
mubashir['facebook'] = '@mubashirnazir42'
console.log(mubashir)