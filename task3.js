const fs = require('fs');

// Create a file named "welcome.txt" with the content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        console.error('Error creating the file:', err);
        return;
    }
    
    console.log('File "welcome.txt" created successfully with content "Hello Node"');
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    // Log the content to the console
    console.log('Content of hello.txt:', data);
});