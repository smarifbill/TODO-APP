//get all input elements with class-task
let inputs = document.getElementsByClassName("task");
console.log(inputs);
//initialize an array to store all inputs/tasks
let array = [];

function saveToLocalStorage() {
  //loop through each input element to get their values
  for (var i = 0; i < inputs.length; i++) {
    //.push adds new items to the end of an array, and returns the new length
    //.value gets value of input element
    array.push(inputs[i].value);
  }

  //store to local storage and convert to string
  localStorage.setItem("items", JSON.stringify(array));
  console.log("Task saved in LS");

  
}

window.onload = function (){
  let savedTask;

  if(localStorage.getItem("items")){
//
savedTask = JSON.parse(localStorage.getItem("items"));
  }
  else{
    savedTask = [];
  }
  
}


//Delete saved notes from local storage
function deleteFrmLocalStorage() {
  localStorage.removeItem("items");
  console.log("all tasks have been deleted");
}

/*
  logic
  event listener must be binded to each specific button to perform seperate functions
  therefore cannot loop over all buttons and apply the functions as each button is clicked.
  
  1. Store all inputs/task in a variable. For stack of notes, use array
  to store data in local storage
  2. Cross out task that have been completed.
  2. use JSON.Stringify() to convert a data array to a string
  3. save it to local storage using setItem()
  4. use getItem() to get tasks from local storage
  5. use JSON.parse() to convert back for manupulations
  6. use removeItem to delete all tasks when delete button is clicked
  */
