var statistics;
statistics = {
    "numberDemocrats": "0",
    "numberRepublicans": "0",
    "numberIndependents": "0",
    "avgVotesDemocrats": 0,
    "avgVotesRepublicans": 0,
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
  
    var sumDemocrats=0;
    var sumRepublicans=0;
    var totalDemocraticVotes=0;
    var totalRepublicanVotes=0; 
    var avgDemocrats = 0;
    var avgRepublicans = 0;
    
    
    for (var i = 0; i < allRows.length; i++) {                              // setting respective arrays
        if (allRows[i].party == "D") {
            sumDemocrats += allRows[i].votes_with_party_pct;                //finding sum of array
            numDemocrats.push(allRows[i]);    
        }
        if (allRows[i].party == "R") {
            sumRepublicans += allRows[i].votes_with_party_pct;
            numRepublicans.push(allRows[i]);
        }
        if (allRows[i].party == "I") {
            numIndependents.push(allRows[i]);
        }
    }
    
    avgDemocrats = sumDemocrats/numDemocrats.length;                    //Averages
    avgRepublicans= sumRepublicans/numRepublicans.length;
    
    statistics.numberDemocrats = "" + numDemocrats.length;                  // setting statistics parameters
    statistics.numberRepublicans = "" + numRepublicans.length;
    statistics.numberIndependents = "" + numIndependents.length;
    statistics.avgVotesDemocrats = avgDemocrats;
    statistics.avgVotesRepublicans = avgRepublicans;
    
}

updateStatistics();

function tenPercent (){
    var allRows = data.results["0"].members;
    var highLoyalty =[];
    var lowLoyalty =[];
    var newHighLoyalty =[];
    var newLowLoyalty=[];
    var mostMissedVotes=[];
    var leastMissedVotes=[];
    
    for (var j= 0; j < allRows.length; j++){ 
        lowLoyalty.push(allRows[j]);   
    }
    
    lowLoyalty.sort(function(a,b){return a.votes_with_party_pct-b.votes_with_party_pct;});
    
    var lowPercentage =lowLoyalty.length/10;
    
    for (var k=0; k<lowPercentage; k++){
        newLowLoyalty.push(lowLoyalty[k]);
        if (lowLoyalty[k]==lowLoyalty[k+1]){
            newLowLoyalty.push(lowLoyalty[k+1]); 
        }
    }
    
    for (var g =0; g<allRows.length; g++ ){
        highLoyalty.push(allRows[g])
    }
    
    highLoyalty.sort(function(a,b){return b.votes_with_party_pct-a.votes_with_party_pct;});
    
    var highPercentage = highLoyalty.length/10;
    
    for (var l=0; l<highPercentage; l++){
        newHighLoyalty.push(highLoyalty[l]);
        if (highLoyalty[l]==highLoyalty[l+1]){
            newHighLoyalty.push(highLoyalty[l+1]);
        }
    }
    
    newHighLoyalty.sort(function(a,b){return b.votes_with_party_pct-a.votes_with_party_pct;});
    newLowLoyalty.sort(function(a,b){return a.votes_with_party_pct-b.votes_with_party_pct;});
    
    for(var m=0; m < allRows.length; m++){                                                              
        mostMissedVotes.push(allRows[m]);
    }
    
    mostMissedVotes.sort(function(a,b){return b.votes_with_party_pct-a.votes_with_party_pct;});
    
    for(var n=0; n < allRows.length; n++){                                                              
        leastMissedVotes.push(allRows[n]);
    }
    
    leastMissedVotes.sort(function(a,b){return a.votes_with_party_pct-b.votes_with_party_pct;});
    
    console.log(newHighLoyalty);
    console.log(newLowLoyalty);
    statistics.leastLoyalty = newLowLoyalty[0].votes_with_party_pct;
    statistics.mostLoyalty = newHighLoyalty[0].votes_with_party_pct;
    statistics.mostMissedVotes = mostMissedVotes[0].missed_votes_pct; 
    statistics.leastMissedVotes = leastMissedVotes[0].missed_votes_pct;
}

tenPercent();