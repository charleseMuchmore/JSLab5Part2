let scores = [];
console.log(scores);
function calcAverage () {
    let sum = 0;
    for (value in scores) {
        sum += scores[value];
        console.log(sum);
    }
    let average = (sum) / (scores.length);
    return average;
}

function findHighest () {
    let highest = 0;
    for (value of scores) 
        if (value > highest) {
            highest = value;
        }
    return highest;
}