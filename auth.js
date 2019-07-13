const signupForm=document.querySelector("#signupform");
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
//get user info
const fullname= signupForm['signupfullname'].value;
    const email= signupForm['signupemail'].value;
    const password= signupForm['signuppassword'].value;
    console.log(fullname,email,password)
})