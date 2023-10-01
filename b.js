document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submitted'); // Add this line for debugging
    const formData = new FormData(this);
    fetch('/results.py', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            console.log('Response received:', data); // Add this line for debugging
            // Rest of your code
        })
        .catch(error => {
            console.error('Error:', error); // Add this line for debugging
        });
});
