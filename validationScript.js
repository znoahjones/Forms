    // JavaScript code for form validation
	
document.getElementById("myForm").addEventListener("submit", function(event){
      // Retrieve the input field value
      let input = document.getElementById("inputField").value;
      // Regular expression pattern for alphanumeric input
      const regexTest = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
      // Invalid input: display error message
      if (regexTest.test(input) == false){
        alert("Enter only aplanumeric values.");
        // Prevent form from submitting    
        event.preventDefault;
      }
        // Valid input: display confirmation and submit the form
      else {
        alert("Form submitted.");
      }
      });