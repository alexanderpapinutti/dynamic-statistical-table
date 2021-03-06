function glanceTableMaker(object) {
    var table = document.getElementById("senate-glance-table");
    
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');
    var header_row = document.createElement("tr");
    var header_party = document.createElement("th");
    var header_nMembers = document.createElement("th");
    var header_avgVotes = document.createElement("th");
    var txt_party = document.createTextNode("Party");
    var txt_nMembers = document.createTextNode("Number of Reps")
    var txt_avgVotes = document.createTextNode("% Voted with Party")
    header_party.appendChild(txt_party);
    header_nMembers.appendChild(txt_nMembers);
    header_avgVotes.appendChild(txt_avgVotes);
    header_row.appendChild(header_party);
    header_row.appendChild(header_nMembers);
    header_row.appendChild(header_avgVotes);
    tbody.appendChild(header_row);
    
    // republican row
    var tr_republican= document.createElement("tr");
    var td_party_republican = document.createElement("td");
    var republicans= document.createTextNode("Republicans");
    var republican_reps=object.numberRepublicans;
    var td_republican_reps = document.createElement("td");
    var txt_td_republican_reps = document.createTextNode(republican_reps);
    var votes_republican = object.avgVotesRepublicans;
    var td_votes_pct= document.createElement("td");
    var txt_td_votes_pct = document.createTextNode(votes_republican);
    td_party_republican.appendChild(republicans);
    td_republican_reps.appendChild(txt_td_republican_reps);
    td_votes_pct.appendChild(txt_td_votes_pct);
    tr_republican.appendChild(td_party_republican);
    tr_republican.appendChild(td_republican_reps);
    tr_republican.appendChild(td_votes_pct);
    
    //democratic row
    var tr_democratic= document.createElement("tr");
    var td_party_democratic = document.createElement("td");
    var democrats= document.createTextNode("Democrats");
    var democratic_reps=object.numberDemocrats;
    var td_democratic_reps = document.createElement("td");
    var txt_td_democratic_reps = document.createTextNode(democratic_reps);
    var votes_democrats = object.avgVotesDemocrats;
    var td_votes_pct_democrats= document.createElement("td");
    var txt_td_votes_pct_democrats = document.createTextNode(votes_democrats);
    td_party_democratic.appendChild(democrats);
    td_democratic_reps.appendChild(txt_td_democratic_reps);
    td_votes_pct_democrats.appendChild(txt_td_votes_pct_democrats);
    tr_democratic.appendChild(td_party_democratic);
    tr_democratic.appendChild(td_democratic_reps);
    tr_democratic.appendChild(td_votes_pct_democrats);
    
    //independents row
    var tr_independent = document.createElement("tr");
    var td_party_independent = document.createElement("td");
    var independents= document.createTextNode("Independent");
    var independents_reps= object.numberIndependents;
    var td_independent_reps= document.createElement("td");
    var txt_td_independent_reps= document.createTextNode(independents_reps);
    var votes_independent;
    
    if (object.avgVotesIndependents === "NaN%"){
        votes_independent=0;
    }else{
        votes_independent = object.avgVotesIndependents;
    }
    var td_votes_pct_independents= document.createElement("td");
    var txt_td_votes_pct_independents = document.createTextNode(votes_independent);
   
    td_party_independent.appendChild(independents);
    td_independent_reps.appendChild(txt_td_independent_reps);
    td_votes_pct_independents.appendChild(txt_td_votes_pct_independents);
    tr_independent.appendChild(td_party_independent);
    tr_independent.appendChild(td_independent_reps);
    tr_independent.appendChild(td_votes_pct_independents);
    
    
    
    
    
    tbody.appendChild(tr_republican);
    tbody.appendChild(tr_democratic);
    tbody.appendChild(tr_independent);
    table.appendChild(tbody);
}

glanceTableMaker(statistics);