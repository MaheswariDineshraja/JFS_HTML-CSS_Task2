// Get the survey form element by its ID
const surveyForm = document.getElementById('survey-form');

// Add a submit event listener to the form
surveyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {};

  // Convert form elements into an array and iterate through each element
  Array.from(e.target.elements).forEach((element) => {
    if (element.nodeName === 'INPUT') {
      if (element.type === 'radio') {
        if (element.checked)
          formData[element.name] = element.value;
      } else {
        formData[element.name] = element.value;
      }
    }
  });

  // Output the formData object to the console
  console.log(formData);
});