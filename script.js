var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate dynamic resume HTML
    resumeDisplay.innerHTML = "\n    <h1>Resume</h1>\n         <h3>Personal Information</h3>\n         <p><strong>Name:</strong> ".concat(name, "</p>\n         <p><strong>Email:</strong> ").concat(email, "</p>\n         <p><strong>Phone No:</strong> ").concat(telephone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n         <h3>Experience</h3>\n         <p>").concat(experience, "</p>\n\n         <h3>Skills</h3>\n         <p>").concat(skills, "</p>\n\n    <button id=\"edit-resume\">Edit</button>\n  ");
    // Handle edit button click
    var editButton = document.getElementById('edit-resume');
    editButton.addEventListener('click', function () {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('telephone').value = telephone;
        document.getElementById('education').value = education;
        document.getElementById('experience').value = experience;
        document.getElementById('skills').value = skills;
        resumeDisplay.innerHTML = ''; // Clear the displayed resume
    });
});
