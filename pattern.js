// Pattern 1
for (let i = 0; i < 5; i++) {
    let pola = ''
    for (let j = i; j < 5; j++) {
        pola += '*'        
    }
    console.log(pola);
}

//Pattern 2
for (let i = 5; i > 0; i--) {
    let pola = ''
    for (let j = i; j <= 5; j++) {
        pola+= '*'
    }
    console.log(pola)
}

//Pattern 3
for (let i = 1; i <= 5; i++) {
    let pola = ''
    for (let j = i; j <= 5; j++) {
        pola += j
    }
    console.log(pola)
}

// //Pattern 4
for (let i = 5; i >= 1; i--) {
    let pola = ''
    for (let j = i; j <= 5; j++) {
        pola += j
    }
    console.log(pola)
}

//Pattern 5 
for (let i = 1; i <= 5; i++) {
    let pola = ''
    for (let j = 1; j <= i; j++) {
        pola += j
    }
    console.log(pola)
}

// Pattern 6
for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let j = i; j >= 1; j--) {
        line += j
    }
    console.log(line)
    
}

// Pattern 7
for (let i = 5; i >= 1; i--) {
    let line = '';
    for (let j = i; j >= 1; j--) {
        line += j
    }
    console.log(line)
}

//piramid pattern
for (let i = 1; i <= 5; i++) {
    let pattern= ''
    for (let j = 1; j <= 2 * 5; j++) {
        if (i + j >= 5 + 1 && i >= j - 5 + 1) { 
            pattern+= '* ';
        }else{
            pattern+= '  '
        }
    }
    console.log(pattern)
}


function printHourglass(n) {
    // Upper half of the hourglass
    for (let i = 0; i < n; i++) {
        let row = '';
        // Leading spaces
        for (let j = 0; j < i; j++) {
            row += ' ';
        }
        // Asterisks
        for (let k = 0; k < (2 * (n - i) - 1); k++) {
            row += '*';
        }
        console.log(row);
    }

    // Lower half of the hourglass
    for (let i = 1; i < n; i++) {
        let row = '';
        // Leading spaces
        for (let j = 1; j < (n - i); j++) {
            row += ' ';
        }
        // Asterisks
        for (let k = 0; k < (2 * i + 1); k++) {
            row += '*';
        }
        console.log(row);
    }
}

// Test the function
printHourglass(5);
