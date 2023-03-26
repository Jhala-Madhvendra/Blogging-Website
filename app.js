const inputs = document.querySelectorAll(".input");





 function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
 }

 function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
    
 }

 inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",focusFunc);
 });

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission behavior
  alert('Message successfully received!'); // show the alert message
  // your code to submit the form data and handle the response goes here
});