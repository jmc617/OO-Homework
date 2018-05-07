// Create an object called Multiplier with two methods:
// multiply and getCurrentValue. multiply should initially
// return the number supplied * 1 and from then on whatever
// the current value is times the number supplied.getCurrentValue
// should return the last answer returned from multiply.
  function Multiplier(x) {
    this.x = x;
    this.multiply = function (){
      return((x*1)*x)
    }
    this.getCurrentValue = function(){
      return this.multiply()
    }
    console.log(this.getCurrentValue());
  }
  Multiplier(9)
// Implement an object model that allows you to store strings that
// represent a Photo. Your model should include an Album object
// that can contain many Photo objects in its photos attribute.
// Each Album should allow you to add a new photo, list all photos,
// and access a specific photo by the order it was added.
// Each Photo should store the photo's file name and the location
// the photo was taken in as strings. Create instances of each
// object defined to prove that your object model works.

var album = []

function Photo (fileName,location) {
  this.fileName = fileName
  this.location = location
  album.push(this)
}
var ocean = new Photo("ocean.jpg","Florida")
var vacation = new Photo("vacation.jpg","California")
var family = new Photo("family.jpg", "Philly")

function list(){
  console.log(album);
}
function access(i){
  console.log(album[i]);
}
list()
access(1)



// Create a prototypical Person object. From this object, extend a Teacher
// object and a Student object. Each of these objects should have attributes
//  and methods pertinent to what they describe. Also create a School
//  object that should be able to store instances of students and teachers.
//  Make sure to write code afterwards that creates instances of these
//  objects to make sure that what you've written works well and you're able
//  to store the necessary data in each object.

var school = []

function Person (firstName,lastName,age,faveSubject,subjectTaught,gradeTaught){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age ;
  this.faveSubject = faveSubject;
  this.subjectTaught = subjectTaught;
  this.gradeTaught = gradeTaught;
  school.push(this)
}
  this.teacher = function(){
    return "Name: "+this.firstName+" "+ this.lastName+" Subject taught: "+ this.subjectTaught+" Grade taught "+ this.gradeTaught
  }
  this.student = function(){
    return "Name: "+this.firstName+" "+ this.lastName+" Favorite subject: "+this.faveSubject
  }
  var teacher1 = new Person ("Jess","C","","","math","4th")
  var student1 = new Person ("Joe","J","10","music","","")
  var student2 = new Person ("Jen","B","8","art","","")

  console.log(teacher1);
  console.log(student1);
  console.log(school);
