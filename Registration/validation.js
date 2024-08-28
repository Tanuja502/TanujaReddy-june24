const form=document.getElementById("form")
const uname=document.getElementById("uname")
const email=document.getElementById("email")
const password=document.getElementById("password")
const cpassword=document.getElementById("cpassword")
const tandc=document.getElementById("tc")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate()
})
function validate(){
    let namevalue=uname.value.trim()
    let emailvalue=email.value.trim()
    let passwordValue=password.value.trim()
    let cpasswordValue=cpassword.value.trim()

if(namevalue===''){
    setError(uname,'user name cannot be empty')
}
else if(namevalue.length<3){
    setError(uname,'user name should be minimum 3 characters')
}
else{
    setSuccesss(uname)
}
if(emailvalue===''){
    setError(email,'Email cannot be empty')
}
else if(!emailCheck(emailvalue)){
    setError(email,'Enter valid Email ID')
}
else{
    setSuccesss(email)
}
if(passwordValue===''){
    setError(password,'password cannot be empty')
}
else if(passwordValue.length<8){
    setError(password,'password should be minimum 8 characters')
}
else{
    setSuccesss(password)
}
if(cpasswordValue===''){
    setError(cpassword,'password cannot be empty')
}
else if(passwordValue.length<8){
    setError(cpassword,'password not matched')
}
else{
    setSuccesss(cpassword)
}
if(!tandc.checked){
    setError(tc,'click on agree terms checkbox')
}
else{
    setSuccesss(tc)
}

    function setError(input,message){
        let parent=input.parentElement
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccesss(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }
    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
    }
}
