// script.js
document.getElementById('prettify-btn').addEventListener('click', function() {
  const input = document.getElementById('json-input').value;
  const output = document.getElementById('json-output');

  try {
      const json = JSON.parse(input); // Parse the JSON input
      const prettyJson = JSON.stringify(json, null, 4); // Prettify with 4-space indentation
      output.textContent = prettyJson;
      output.style.color = '#333'; // Reset color in case of previous errors
  } catch (error) {
      output.textContent = 'Invalid JSON: ' + error.message;
      output.style.color = 'red';
  }
});
