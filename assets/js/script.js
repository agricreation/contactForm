function hideToast(toastElement) {
    if (toastElement) {
      toastElement.classList.add('toast-out');
      setTimeout(() => {
        toastElement.remove();
      }, 1000);
    }
    else{
        const toast =  document.querySelector('.green');
        toast.classList.add('toast-out');
        setTimeout(() => {
            toast.remove();
          }, 1000);
    }
  }
function createTost(content, bg){
    const flex = document.querySelector('.addToast');
    const div = document.createElement('div');
    div.classList.add('toast', bg);
    const p = document.createElement('p');
    p.textContent = `${content}`;
    const icons = document.createElement('i');
    icons.setAttribute("id", "close");
    icons.setAttribute("onclick" , "hideToast(this.parentNode)");
    icons.setAttribute("class", "close fa-solid fa-xmark");
    div.appendChild(p);
    div.appendChild(icons);
    flex.appendChild(div);
}
function formValidations(){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const names = document.querySelector('#names').value;
    const email = document.querySelector('#email').value;
    const countryCode = document.querySelector('#countryCode').value;
    const phone = document.querySelector('#phone').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
    if(names === ""){
        console.log("Please enter names");
        this.names.style.border = "1px solid red"
        return createTost('Enter names', 'danger');
    }
    if(email === ""){
        console.log("Please enter email");
        this.email.style.border = "1px solid red"
        return createTost('enter email', 'danger');
    }else if(!emailPattern.test(email)){
        console.log("Please enter valid email");
        this.email.style.border = "1px solid red"
        return createTost("Enter valid email", "danger");
    }
    if(countryCode === ""){
        console.log("Please enter country code");
        this.countryCode.style.border = "1px solid red"
        return createTost("Enter country code", "danger");
    }
    if(phone === ""){
        console.log("Please enter phone");
        this.phone.style.border = "1px solid red"
        return createTost("Enter phone number", "danger")
    }
    if(subject === ""){
        console.log("Please enter subject");
        this.subject.style.border = "1px solid red"
        return createTost("Enter subjects", "danger");
    }
    if(message === ""){
        console.log("Please enter messages");
        this.message.style.border = "1px solid red";
        return createTost("Enter a valid messages", "danger");
    }
    this.names.style.border = "1.5px solid green";
    this.email.style.border = "1.5px solid green";
    this.countryCode.style.border = "1.5px solid green";
    this.phone.style.border = "1.5px solid green";
    this.subject.style.border = "1.5px solid green";
    this.message.style.border = "1.5px solid green";
    
    createTost("Form submited successfully", "green");
    setTimeout(() => {
        hideToast();
    }, 4000);
    console.log(`
    Names = ${names}\n Email = ${email} \n Phone = ${countryCode}${phone} \n Subject = ${subject} \n Message ${message}
    `);
}