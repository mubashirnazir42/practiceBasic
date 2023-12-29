const mubashir = {
  fname : 'mubashir',
  newfor :[],
  calcName : function(ali){

    for(let k=1; k<=2;k++){
      this.strink = `${ali} my name is  ${this.fname} `
      console.log(this.strink)
    this.newfor.push(this.strink)
    
    }
   
  }
}

mubashir['calcName'](2)

console.log(mubashir['newfor']);


