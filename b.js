document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('/results.py', { // Update the URL to '/results.py'
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('info-container').style.display = 'none'; // Hide the form
            document.getElementById('results').style.display = 'block'; // Show the results
            document.querySelector('#results table').innerHTML = data;
        });
});
