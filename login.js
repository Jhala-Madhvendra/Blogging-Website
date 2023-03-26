const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')
const LogIn = document.getElementById('LogIn')

signUpButton.addEventListener('click',() => {
    container.classList.add("right-panel-active")
})


signInButton.addEventListener('click',() => {
    container.classList.remove("right-panel-active")
})

LogIn.addEventListener('click',() => {
    alert("Successfully Logged-In!")
})


