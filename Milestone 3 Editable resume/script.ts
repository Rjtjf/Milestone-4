// Get references to the form and display area
const Form = document.getElementById('resume-form') as HTMLFormElement;
const ResumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
Form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

       // Collect input values
       const Name = (document.getElementById('name') as HTMLInputElement).value;
       const Email = (document.getElementById('email') as HTMLInputElement).value;
       const Phone = (document.getElementById('phone') as HTMLInputElement).value;
       const Education = (document.getElementById('education') as HTMLTextAreaElement).value;
       const Degree = (document.getElementById('Degree') as HTMLTextAreaElement).value;
       const Experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
       const Skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
       const References = (document.getElementById('Refrences') as HTMLTextAreaElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
    <div style="font-family: 'Arial', sans-serif; max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <div style="text-align: center; border-bottom: 2px solid #1abc9c; padding-bottom: 10px;">
            <h1 style="margin: 0; color: #2c3e50;">${name}</h1>
            <p style="margin: 5px 0; color: #7f8c8d;">${Email} | ${Phone}</p>
        </div>
        <div style="margin: 20px 0;">
            <h2 style="border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;">Personal Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${Email}</p>
            <p><strong>Phone:</strong> ${Phone}</p>
        </div>
        <div style="margin: 20px 0;">
            <h2 style="border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;">Education</h2>
            <p>${Education}</p>
        </div>
        <div style="margin: 20px 0;">
            <h2 style="border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;">Work Experience</h2>
            <p>${Experience}</p>
        </div>
        <div style="margin: 20px 0;">
            <h2 style="border-bottom: 2px solid #1abc9c; padding-bottom: 5px; color: #2c3e50;">Skills</h2>
            <p>${Skills}</p>
        </div>
    </div>
    `;

    // Display the generated resume
    if (ResumeDisplayElement) {
        ResumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});
