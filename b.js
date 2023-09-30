document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('/submit', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('results').style.display = 'block';
            document.querySelector('#results table').innerHTML = data;
        });
});
