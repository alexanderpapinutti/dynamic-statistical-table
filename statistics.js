var statistics;
statistics = {
    "numberDemocrats": "0",
    "numberRepublicans": "0",
    "numberIndependents": "0",
    "avgVotesDemocrats": 0,
    "avgVotesRepublicans": 0,
    "avgVotesIndependents": 0,
    "leastLoyalty": "0",
    "mostLoyalty": "0",
    "mostMissedVotes": "0",
    "leastMissedVotes": "0"
};

function updateStatistics() {
    var allRows = data.results["0"].members;

    var numDemocrats = [];
    var numIndependents = [];
    var numRepublicans = [];

    var sumDemocrats = 0;
    var sumRepublicans = 0;
    var sumIndependents = 0;
    var totalDemocraticVotes = 0;
    var totalRepublicanVotes = 0;
    var avgDemocrats = 0;
    var avgRepublicans = 0;
    var avgIndependents = 0;
    


    for (var i = 0; i < allRows.length; i++) { // setting respective arrays
        if (allRows[i].party == "D") {
            sumDemocrats += allRows[i].votes_with_party_pct; //finding sum of array
            numDemocrats.push(allRows[i]);
        }
        if (allRows[i].party == "R") {
            sumRepublicans += allRows[i].votes_with_party_pct;
            numRepublicans.push(allRows[i]);
        }
        if (allRows[i].party == "I") {
            sumIndependents += allRows[i].votes_with_party_pct;
            numIndependents.push(allRows[i]);
        }
    }
    avgIndependents = sumIndependents / numIndependents.length;
    avgDemocrats = sumDemocrats / numDemocrats.length; //Averages
    avgRepublicans = sumRepublicans / numRepublicans.length;
    var newAvgIndependents = avgIndependents.toFixed(2);
    var newAvgDemocrats = avgDemocrats.toFixed(2);
    var newAvgRepublicans = avgRepublicans.toFixed(2);
    statistics.numberDemocrats = "" + numDemocrats.length; // setting statistics parameters
    statistics.numberRepublicans = "" + numRepublicans.length;
    statistics.numberIndependents = "" + numIndependents.length;
    statistics.avgVotesDemocrats = newAvgDemocrats + "%";
    statistics.avgVotesRepublicans = newAvgRepublicans + "%";
    statistics.avgVotesIndependents = newAvgIndependents + "%";
    statistics.mostLoyalty= sortTopTen("votes_with_party_pct")[0].votes_with_party_pct;
    statistics.leastLoyalty= sortBottomTen("votes_with_party_pct")[0].votes_with_party_pct;
    statistics.mostMissedVotes = sortTopTen("missed_votes_pct")[0].missed_votes_pct;
    statistics.leastMissedVotes = sortBottomTen("missed_votes_pct")[0].missed_votes_pct;
    
}

updateStatistics();

function tenPercentArray(array,sortkey) {
    var empty = [];
    for (var i = 0; i < array.length; i++) {
        if (i < (array.length * 0.1)) {
            empty.push(array[i]);
        } else if (array[i-1][sortkey] == array[i][sortkey]) {
            empty.push(array[i]);
        } else {
            break;
        }
    }
    return empty;
}


function sortTopTen(sortkey) {
    var allRows = data.results["0"].members;
    allRows.sort(function (a, b) {return b[sortkey] - a[sortkey]});
    return allRows;
}




function sortBottomTen(sortkey) {
    var allRows = data.results["0"].members;
    allRows.sort(function (a, b) {return a[sortkey] - b[sortkey]});
    return allRows;
}

var myBottomArrayLoyalty= tenPercentArray(sortBottomTen("votes_with_party_pct"),"votes_with_party_pct");
var myTopArrayLoyalty= tenPercentArray(sortTopTen("votes_with_party_pct"),"votes_with_party_pct");

var myBottomArrayAttendance = tenPercentArray(sortBottomTen("missed_votes_pct"),"missed_votes_pct");
var myTopArrayAttendance = tenPercentArray(sortTopTen("missed_votes_pct"),"missed_votes_pct");



