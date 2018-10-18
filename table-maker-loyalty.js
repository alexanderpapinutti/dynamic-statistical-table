
function bottomTableMakerLoyalty(array) {
    var table = document.getElementById("senate-least-loyal-table");
    
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');
    var header_row = document.createElement("tr");
    var header_party = document.createElement("th");
    var header_nMembers = document.createElement("th");
    var header_avgVotes = document.createElement("th");
    var txt_party = document.createTextNode("Name");
    var txt_nMembers = document.createTextNode("Number of Party Votes");
    var txt_avgVotes = document.createTextNode("% Party Votes");
    header_party.appendChild(txt_party);
    header_nMembers.appendChild(txt_nMembers);
    header_avgVotes.appendChild(txt_avgVotes);
    header_row.appendChild(header_party);
    header_row.appendChild(header_nMembers);
    header_row.appendChild(header_avgVotes);
    tbody.appendChild(header_row);
    
    for (var i=0; i<array.length; i++){
        var tr = document.createElement("tr");
        var td_name = document.createElement("td");
        var links = array[i].url;
        var a = document.createElement("a");
        a.setAttribute("href", links);
        var firstName= array[i].first_name;
        var middleName = array[i].middle_name;
        if (middleName == null){
            middleName="";
        }
        var lastName = array[i].last_name;
        var txt_firstName = document.createTextNode(firstName+" ");
        var txt_middleName = document.createTextNode(middleName+" ");
        var txt_lastName = document.createTextNode(lastName+ " ");
        a.appendChild(txt_firstName);
        a.appendChild(txt_middleName);
        a.appendChild(txt_lastName);
        td_name.appendChild(a);
        var td_nVotes = document.createElement("td")
        var nVotes = array[i].total_votes;
        var txt_nVotes = document.createTextNode(nVotes);
        td_nVotes.appendChild(txt_nVotes);
        var td_partyVotes = document.createElement("td");
        var partyVotes = array[i].votes_with_party_pct;
        var txt_partyVotes = document.createTextNode(partyVotes);
        td_partyVotes.appendChild(txt_partyVotes);
        tr.appendChild(td_name);
        tr.appendChild(td_nVotes);
        tr.appendChild(td_partyVotes);
        
        tbody.appendChild(tr);
        
    }
    table.appendChild(tbody);
}

bottomTableMakerLoyalty(myBottomArrayLoyalty);


function topTableMakerLoyalty (array) {
    var table = document.getElementById("senate-most-loyal-table");
   
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');
    var header_row = document.createElement("tr");
    var header_party = document.createElement("th");
    var header_nMembers = document.createElement("th");
    var header_avgVotes = document.createElement("th");
    var txt_party = document.createTextNode("Name");
    var txt_nMembers = document.createTextNode("Number of Party Votes");
    var txt_avgVotes = document.createTextNode("% Party Votes");
    header_party.appendChild(txt_party);
    header_nMembers.appendChild(txt_nMembers);
    header_avgVotes.appendChild(txt_avgVotes);
    header_row.appendChild(header_party);
    header_row.appendChild(header_nMembers);
    header_row.appendChild(header_avgVotes);
    tbody.appendChild(header_row);
    
    for (var i=0; i<array.length; i++){
        var tr = document.createElement("tr");
        var td_name = document.createElement("td");
        var links = array[i].url;
        var a = document.createElement("a");
        a.setAttribute("href", links);
        var firstName= array[i].first_name;
        var middleName = array[i].middle_name;
        if (middleName == null){
            middleName="";
        }
        var lastName = array[i].last_name;
        var txt_firstName = document.createTextNode(firstName+" ");
        var txt_middleName = document.createTextNode(middleName+" ");
        var txt_lastName = document.createTextNode(lastName+ " ");
        a.appendChild(txt_firstName);
        a.appendChild(txt_middleName);
        a.appendChild(txt_lastName);
        td_name.appendChild(a);
        
        var td_nVotes = document.createElement("td")
        var nVotes = array[i].total_votes;
        var txt_nVotes = document.createTextNode(nVotes);
        td_nVotes.appendChild(txt_nVotes);
        var td_partyVotes = document.createElement("td");
        var partyVotes = array[i].votes_with_party_pct;
        var txt_partyVotes = document.createTextNode(partyVotes);
        td_partyVotes.appendChild(txt_partyVotes);
        tr.appendChild(td_name);
        tr.appendChild(td_nVotes);
        tr.appendChild(td_partyVotes);
        
        tbody.appendChild(tr);
        
    }
    table.appendChild(tbody);
}

topTableMakerLoyalty(myTopArrayLoyalty);





