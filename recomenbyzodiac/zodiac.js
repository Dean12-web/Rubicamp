const readline = require('readline');
const fs = require('node:fs');

function calculateHobbySimiliarity(hobbyString, userHobbies) {
    const hobbiesFromData = hobbyString.toLowerCase().split(/,|\s|and|or/).filter(Boolean);
    const userHobbiesLower = userHobbies.map(hobby => hobby.toLowerCase());
    const commonHobbies = hobbiesFromData.filter(hobby => userHobbiesLower.includes(hobby));
    return commonHobbies.length / userHobbies.length;
}

function recomendScents(data, userInput) {
    const zodiacData = data.zodiac_hobbies[userInput.zodiac];
    const zodiacScore = 1;
    const hobbyScore = calculateHobbySimiliarity(zodiacData.hobby, userInput.hobbies);

    return {
        scents: zodiacData.scents,
        score: 0.7 * zodiacScore + 0.3 * hobbyScore
    }
}

function getZodiacSign(day, month) {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagittarius";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return "Capricorn";
    } else {
        return "Invalid date!";
    }
}

const dataPath = 'data.json';
let zodiacData;

try {
    const rawData = fs.readFileSync(dataPath, 'utf8');
    zodiacData = JSON.parse(rawData);
} catch (error) {
    console.log("Error loading daa", error.message);
    process.exit(1);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter your birthdate (YYYY-MM-DD): ", (inputDate) => {
    const [year, month, day] = inputDate.split('-').map(Number);

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        console.log("Invalid input. Please use the format YYYY-MM-DD.");
        rl.close();
        return;
    }
    const zodiacSign = getZodiacSign(day, month);
    if (zodiacSign === "Invalid date!") {
        console.log("Invalid date provided.");
        rl.close();
        return;
    }

    
    rl.question("Enter your hobbies :", (hobbiesInput) => {
        const userHobbies = hobbiesInput.split(',').map(hobby => hobby.trim());
        const userInput = {
            zodiac: zodiacSign,
            hobbies: userHobbies,
        };
        const recommendation = recomendScents(zodiacData, userInput);
        
        console.log(`Your zodiac sign is: ${zodiacSign}`);
        console.log(`Recommended scents for you : ${recommendation.scents.join(', ')}`);
        // console.log(`Compatiblity score : ${recommendation.score.toFixed(2)}`);

        rl.close();
    });
});
