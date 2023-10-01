const form = document.querySelector('#login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const email = elements.email.value;
    const password = elements.password.value;

    if (email === '' || password === '') { 
        return alert('Усі поля повинні бути заповнені!');
    }

    const userDetails = { email, password }; 

    console.log(userDetails);
    event.currentTarget.reset();
}

