// Qestion 01
function power(a, b) {
    return a ** b;
}
document.write("The power a raised to b is: " + power(5, 2));

// Qestion 02
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}
var year = prompt("Enter a year:");
alert(isLeapYear(parseInt(year)));

// Qestion 03
function semipara(a, b, c) {
    return (a + b + c) / 2;
}

function area(a, b, c) {
    var S = semipara(a, b, c);
    return S * (S - a) * (S - b) * (S - c);
}

document.write("<br>Area fo a triangle" + area(2, 4, 8));

// Qestion 04
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}

function calculatePercentage(marks1, marks2, marks3) {
    var totalObtained = marks1 + marks2 + marks3;
    return (totalObtained / (300)) * 100;
}

function mainFunction(marks1, marks2, marks3) {
    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3);

    document.write("<br>Average Marks: " + average);
    document.write(" Percentage: " + percentage + "%");
}

mainFunction(78, 90, 56);

// Qestion 05
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

document.write("<br>Index of o in hello world is: " + customIndexOf("Hello, World!", 'o'));

// Qestion 06
function removeVowels(sentence) {
    var vowels = 'aeiouAEIOU';
    var result = '';
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

document.write("<br>Sentence without vowels: ", removeVowels("My name is fatima"));

// Qestion 07
function countVowelPairs(text) {
    var lowerText = text.toLowerCase();
    var count = 0;
    for (var i = 0; i < lowerText.length - 1; i++) {
        var currentPair = lowerText[i] + lowerText[i + 1];
        switch (currentPair) {
            case 'aa':
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'ea':
            case 'ee':
            case 'ei':
            case 'eo':
            case 'eu':
            case 'ia':
            case 'ie':
            case 'ii':
            case 'io':
            case 'iu':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'oo':
            case 'ou':
            case 'ua':
            case 'ue':
            case 'ui':
            case 'uo':
            case 'uu':
                count++;
                break;
            default:
                break;
        }
    }
    return count;
}
document.write("<br>The sentence: Pleases read this application and give me gratuity");
document.write("<br>The number of vowel pairs are: ", countVowelPairs("Pleases read this application and give me gratuity"));

// Qestion 08
function convertToMeters(distanceInKm) {
    return distanceInKm * 1000;
}
function convertToFeet(distanceInKm) {
    return distanceInKm * 3280.84;
}
function convertToInches(distanceInKm) {
    return distanceInKm * 39370.1;
}
function convertToCentimeters(distanceInKm) {
    return distanceInKm * 100000;
}

var distanceInKm = prompt("Enter the distance between two cities (in km):");
document.write("<br>Distance in meters: " + convertToMeters(distanceInKm) + " meters");
document.write("<br>Distance in feet: " + convertToFeet(distanceInKm) + " feet");
document.write("<br>Distance in inches: " + convertToInches(distanceInKm) + " inches");
document.write("<br>Distance in centimeters: " + convertToCentimeters(distanceInKm) + " centimeters");

// Qestion 09
function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;

    if (hoursWorked > regularHours) {
        var overtimeHours = hoursWorked - regularHours;
        var overtimePay = overtimeHours * overtimeRate;

        return overtimePay;
    }
    else {
        return 0;
    }
}

document.write("<br>Overtime pay: ", calculateOvertimePay(60));

// Qestion 10
function calculateNotes(amount) {
    var hundredNotes = 0;
    var fiftyNotes = 0;
    var tenNotes = 0;
    hundredNotes = Math.floor(amount / 100);
    amount = amount % 100;
    fiftyNotes = Math.floor(amount / 50);
    amount = amount % 50;
    tenNotes = Math.floor(amount / 10);
    document.write("<br>100-rupee notes: " + hundredNotes + "<br>");
    document.write("50-rupee notes: " + fiftyNotes + "<br>");
    document.write("10-rupee notes: " + tenNotes + "<br>");
}
var amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));
calculateNotes(amount);




