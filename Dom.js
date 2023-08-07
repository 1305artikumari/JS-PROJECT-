const form = document.getElementById('userForm');
const outputContainer = document.getElementById('output');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {};

    formData.forEach((value, key) => {
        userData[key] = value;
    });

    //for localstroage
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;


    const userDetails = {
        name: name,
        email: email,
        phone: phone
    };

    const userDetailsJSON = JSON.stringify(userDetails);

    localStorage.setItem(email, +" " + userDetailsJSON);

    // Create a new paragraph element for the submitted data
    const paragraph = document.createElement('p');

    // Format the submitted data as a string
    const userDataString = Object.entries(userData)
        .map(([key, value]) => ` ${value}`)
        .join();

    // Set the innerHTML of the paragraph to the formatted data
    paragraph.innerHTML = userDataString;

    // Append the paragraph to the output container
    outputContainer.appendChild(paragraph);

    // Clear the form after submission
    form.reset();











     
 
}
