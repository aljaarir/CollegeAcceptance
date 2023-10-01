document.getElementById("student-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const userGPA = parseFloat(formData.get("gpa"));

    // Sample data for Ivy League colleges
    const colleges = [
        { "name": "Harvard University", "gpaRequirement": 3.4, "acceptanceRate": 3.4, "tuitionInState": 55587, "tuitionOutOfState": 55587 },
        { "name": "Yale University", "gpaRequirement": 3.4, "acceptanceRate": 5.3, "tuitionInState": 59950, "tuitionOutOfState": 59950 },
        { "name": "Princeton University", "gpaRequirement": 3.4, "acceptanceRate": 5.8, "tuitionInState": 56010, "tuitionOutOfState": 56010 },
        { "name": "University of Pennsylvania", "gpaRequirement": 3.4, "acceptanceRate": 5.9, "tuitionInState": 61710, "tuitionOutOfState": 55000 },
        { "name": "Brown University", "gpaRequirement": 3.4, "acceptanceRate": 5.5, "tuitionInState": 62304, "tuitionOutOfState": 62304 },
        { "name": "Columbia University", "gpaRequirement": 3.4, "acceptanceRate": 4.1, "tuitionInState": 63530, "tuitionOutOfState": 55000 },
        { "name": "Cornell University", "gpaRequirement": 3.4, "acceptanceRate": 8.7, "tuitionInState": 61015, "tuitionOutOfState": 55000 },
        { "name": "Dartmouth College", "gpaRequirement": 3.4, "acceptanceRate": 6.2, "tuitionInState": 60870, "tuitionOutOfState": 55000 }
    ];

    // Filter colleges based on GPA
    const matchingColleges = colleges.filter(college => userGPA >= college.gpaRequirement);

    // Generate HTML for results
    let resultHTML = "<table><tr><th>Name</th><th>GPA Requirement</th><th>Acceptance Rate</th><th>Tuition (In-State)</th><th>Tuition (Out-of-State)</th></tr>";

    matchingColleges.forEach(college => {
        resultHTML += `<tr><td>${college.name}</td><td>${college.gpaRequirement}</td><td>${college.acceptanceRate}%</td><td>$${college.tuitionInState}</td><td>$${college.tuitionOutOfState}</td></tr>`;
    });

    resultHTML += "</table>";

    document.getElementById("results").innerHTML = resultHTML;
    document.getElementById("results").style.display = "block";
    document.getElementById("info-container").style.display = "none";
});
