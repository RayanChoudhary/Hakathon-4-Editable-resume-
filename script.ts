const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const telephone = (document.getElementById('telephone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Generate dynamic resume HTML
  resumeDisplay.innerHTML = `
    <h1>Resume</h1>
         <h3>Personal Information</h3>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Phone No:</strong> ${telephone}</p>

        <h3>Education</h3>
        <p>${education}</p>

         <h3>Experience</h3>
         <p>${experience}</p>

         <h3>Skills</h3>
         <p>${skills}</p>

    <button id="edit-resume">Edit</button>
  `;

  // Handle edit button click
  const editButton = document.getElementById('edit-resume') as HTMLButtonElement;
  editButton.addEventListener('click', () => {
    (document.getElementById('name') as HTMLInputElement).value = name;
    (document.getElementById('email') as HTMLInputElement).value = email;
    (document.getElementById('telephone') as HTMLInputElement).value = telephone;
    (document.getElementById('education') as HTMLTextAreaElement).value = education;
    (document.getElementById('experience') as HTMLTextAreaElement).value = experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value = skills;

    resumeDisplay.innerHTML = ''; // Clear the displayed resume
  });
});
