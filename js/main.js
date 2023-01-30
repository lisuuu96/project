document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click',function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('mobile-close')[0].addEventListener('click',function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

const createAppointment = (appointment) => {
    const appointmentMessage = document.querySelector('.appointment-message');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php',{
    Headers: {
        'content type': 'application/json',

    },
    mode: 'cors',
    method: 'Post',
    body: JSON.stringify(appointment)

    }).then(res => res.json())
    .then(resJSON =>{
        appointmentMessage.classList.add('send');
        appointmentMessage.innerText = `Dziekujemy ${resJSON.appointment.name}.Zostales Zapisany !`

    });
}

document.getElementById('appointment-form').addEventListener('submit',function(e){
    e.preventDefault();

    const appointmentMessage = document.querySelector('.appointment-message');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false ; 

    let appointment = {
        name:document.getElementById('appointment-name').value,
        name:document.getElementById('appointment-email').value,
        name:document.getElementById('appointment-service').value,
        name:document.getElementById('appointment-phone').value,
        name:document.getElementById('appointment-data').value,
        name:document.getElementById('appointment-time').value,
        name:document.getElementById('appointment-message').value

        
    }

    for(let i = 0; i<formFields.length; i++){
        if(formFields[i].value === ''){
            let allFields = false ; 
            formFields[i].classList.add('error');
        } else {
            allFields = true
            formFields[i].classList.remove('error');
        }
    }

    if(allFields) {
        createAppointment(appointment);

    }else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = 'Wypelnij wymagane pole'
    }

    
})