document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();
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
});
