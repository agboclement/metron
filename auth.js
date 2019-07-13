const signupForm=document.querySelector("#signupform");
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
//get user info
const fullname= signupForm['signupfullname'].value;
    const email= signupForm['signupemail'].value;
    const password= signupForm['signuppassword'].value;
 
//sign up the user
auth.createUserWithEmailAndPassword(email, password).then( cred=> {
    console.log(cred)
    signupForm.reset();
})


})