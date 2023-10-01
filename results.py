import cgi

# Sample data for Ivy League colleges
colleges = [
    {"name": "Harvard University", "gpaRequirement": 3.4 " ,acceptanceRate": 3.4, "tuitionInState": 55587, "tuitionOutOfState": 55587},
    {"name": "Yale University", "gpaRequirement": 3.4" ,acceptanceRate": 5.3, "tuitionInState": 59950, "tuitionOutOfState": 59950},
    {"name": "Princeton University", "gpaRequirement": 3.4 " ,acceptanceRate": 5.8, "tuitionInState": 56010, "tuitionOutOfState": 56010},
    {"name": "University of Pennsylvania", "gpaRequirement": 3.4 " ,acceptanceRate": 5.9, "tuitionInState": 61710, "tuitionOutOfState": 55000},
    {"name": "Brown University", "gpaRequirement": 3.4 " ,acceptanceRate": 5.5, "tuitionInState": 62304, "tuitionOutOfState": 62304},
    {"name": "Columbia University", "gpaRequirement": 3.4 " ,acceptanceRate": 4.1, "tuitionInState": 63530, "tuitionOutOfState": 55000},
    {"name": "Cornell University", "gpaRequirement": 3.4 " , acceptanceRate": 8.7, "tuitionInState": 61015, "tuitionOutOfState": 55000},
    {"name": "Dartmouth College", "gpaRequirement": 3.4 " , acceptanceRate": 6.2, "tuitionInState": 60870, "tuitionOutOfState": 55000}
]

# Function to find matching colleges based on GPA
def find_matching_colleges(input_gpa):
    matching_colleges = []
    for college in colleges:
        if input_gpa >= college["gpaRequirement"]:
            matching_colleges.append(college)
    return matching_colleges

# Get form data
form = cgi.FieldStorage()
name = form.getvalue("name")
gpa = float(form.getvalue("gpa"))
field = form.getvalue("field")
state = form.getvalue("state")

# Find matching colleges based on GPA
matching_colleges = find_matching_colleges(gpa)

# Generate a result table in HTML
result_html = """
<!DOCTYPE html>
<html>
<head>
    <title>College Matches</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid black;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>College Matches</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>GPA Requirement</th>
            <th>Acceptance Rate</th>
            <th>Tuition (In-State)</th>
            <th>Tuition (Out-of-State)</th>
        </tr>
"""

for college in matching_colleges:
    result_html += f"""
        <tr>
            <td>{college["name"]}</td>
            <td>{college["gpaRequirement"]}</td>
            <td>{college["acceptanceRate"]}%</td>
            <td>${college["tuitionInState"]}</td>
            <td>${college["tuitionOutOfState"]}</td>
        </tr>
    """

result_html += """
    </table>
</body>
</html>
"""

print("Content-type: text/html\n")
print(result_html)
