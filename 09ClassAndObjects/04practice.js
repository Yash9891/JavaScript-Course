let Data="Informatoin"
class User{
   constructor(name,email){
    this.name=name;
    this.email=email;
   }
   viewDat(){
    console.log("Website data",Data);
   }


}

class Admin extends User{
    constructor(name,email){
        super(name,email)

    }
    editdata(){
        Data="This is the updated data"
        console.log(Data);
    }
}
let student1=new User('Yash','asg@gmail.com')
let student2=new User('Shivani','ashvg@gmail.com')
console.log(student1);
console.log(student1.viewDat());

console.log(student2);

let admin1= new Admin("Admin","We@gmail.com")
console.log(admin1);
console.log(admin1.editdata());