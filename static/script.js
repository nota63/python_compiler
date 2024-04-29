document.addEventListener('DOMContentLoaded', function() {
    const codeArea = document.getElementById('code');
    const runButton = document.getElementById('run-btn');
    const outputDiv = document.getElementById('output');

    // Automatically resize the textarea based on content
    codeArea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight + 10) + 'px';
    });

    // Focus on the textarea when the page loads
    codeArea.focus();

    // Run button click event
    runButton.addEventListener('click', function(event) {
        event.preventDefault();
        outputDiv.innerHTML = ''; // Clear previous output
        outputDiv.textContent = 'Running...'; // Placeholder for running animation
        const codeContent = codeArea.value;
        // Simulate code execution delay
        setTimeout(function() {
            const result = executePythonCode(codeContent);
            outputDiv.textContent = ''; // Clear the running animation
            outputDiv.innerHTML = '<pre>' + result + '</pre>'; // Display the output
        }, 1500); // Adjust delay time as needed
    });

    // Function to simulate Python code execution (Replace with actual logic)
    function executePythonCode(code) {
        // Placeholder for Python code execution
        return 'Code executed successfully!';
    }
});
