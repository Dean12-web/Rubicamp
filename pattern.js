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