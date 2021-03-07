const spanEmail = document.getElementById("email-me");


spanEmail.addEventListener("mouseover" , ()=>{
    spanEmail.innerHTML = "ErfanHanifezade@gmail.com"
})

spanEmail.addEventListener("mouseleave" , ()=>{
    spanEmail.innerHTML = "EMAIL ME"
})