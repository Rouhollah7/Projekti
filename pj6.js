function saveFormData() {
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        postalCode: document.getElementById('postalCode').value,
        city: document.getElementById('city').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
    };

    // Save data to local storage
    localStorage.setItem('userData', JSON.stringify(formData));

    // Optionally, you can provide user feedback, clear the form, etc.
    alert('Tiedot tallennettu paikallisesti.');
    document.getElementById('userForm').reset();
}
    