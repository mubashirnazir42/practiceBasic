// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//     }
//   };
   
//   const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//     }
//   };
   
//   mark.calcBMI();
//  john.calcBMI();

// console.log(john.bmi);
// console.log(mark.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
//   }



const mubashir={
  firstName : `mubashir Nazir`,
  age:24,
  lastName : `Nazir Hussain`,
  familyName : `sultani`,
  family : ['dadiyaal',`naniyaal`],

  nazir :{
    class : 'matric',
    family : ['dadiyaal',`naniyaal`],
    age:32,
    calcString : function(){
      return this.finalString = `${mubashir[`nazir`][`class`]} is the son of  ${mubashir.lastName} and he looks like ${mubashir[`nazir`]['family'][0]}. and he is follower of ${mubashir[`familyName`]}`
     
    }
  },

  calcString : function(){
    
    return this.finalString = `${this.firstName} is the son of  ${this.lastName} and he looks like ${this['family'][0]}. and he is follower of ${this.familyName}`
   
  }

    
  }





console.log(mubashir[`nazir`][`calcString`]());



// const myinfor=[
// 24,
// function(num){
// return 24-num
// },
//   {
//     firstName : 'mubashir',
//     lastName : `nazir`,
//     age : '24'
//   },

//   {
//     firstName : 'mubashir',
//     lastName : `nazir`,
//     age : '24'
//   }

// ]

// console.log(myinfor[1](2));

