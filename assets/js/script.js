function hideToast(){ 
    const toast = document.querySelector('.toast');
    // close.style.display = "none"
    toast.classList.add('toast-out');
    setTimeout(() => {
      toast.remove();
    }, 1000);
    console.log("testing");
  }
function createTost(content){
    const flex = document.querySelector('.addToast');
    const div = document.createElement('div');
    div.classList.add('toast');
    const p = document.createElement('p');
    p.textContent = `${content}`;
    const icons = document.createElement('i');
    icons.setAttribute("id", "close");
    icons.setAttribute("onclick" , "hideToast()");
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
        return createTost('Enter names');
    }
    if(email === ""){
        console.log("Please enter email");
        return createTost('enter email');
    }else if(!emailPattern.test(email)){
        console.log("Please enter valid email");
        return createTost("Enter valid email");
    }
    if(countryCode === ""){
        console.log("Please enter country code");
        return createTost("Enter country code");
    }
    if(phone === ""){
        console.log("Please enter phone");
        return createTost("Enter phone number")
    }
    if(subject === ""){
        console.log("Please enter subject");
        return createTost("Enter subjects");
    }
    if(message === ""){
        console.log("Please enter messages");
        return createTost("Enter a valid messages");
    }
    console.log(`
    Names = ${names}\n Email = ${email} \n Phone = ${countryCode}${phone} \n Subject = ${subject} \n Message ${message}
    `);
}