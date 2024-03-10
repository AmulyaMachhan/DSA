function printSPattern(size) {
    // Loop through rows
    for (let i = 0; i < size; i++) {
        let row = '';
        
        // Loop through columns
        for (let j = 0; j < size; j++) {
            // Print '*' at the ends of the pattern
            if (i === 0 || i === size - 1 || i === Math.floor(size / 2)
                || (i < Math.floor(size / 2) && j === 0)
                || (i > Math.floor(size / 2) && j === size - 1)) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        
        // Print each row
        console.log(row);
    }
}

// Example usage
printSPattern(8);
