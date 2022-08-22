const cardArray = [];

function display(playercard){
// console.log(playercard);
const tableBody = document.getElementById("player-table");
tableBody.innerHTML ="";
for(let i = 0; i < 5; i++){
    if(playercard.length > 5){
        alert("you can not more than 5 players");
        return;
    }
    const name = cardArray[i].playerName;


    const tr = document.createElement("tr");

    tr.innerHTML = `
    <th id="rubel">${i + 1}</th>
    <td>${name}</td>
   
    `;
    tableBody.appendChild(tr);
   
}

}


function addcard(element){
    // console.log(element.parentNode.parentNode.children[0].innerText);
    element.addcard = true;

    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj ={
        playerName:playerName
    }
    cardArray.push(playerObj)
    // console.log(cardArray.length);
    document.getElementById("total-player-added").innerText = cardArray.length;
    display(cardArray);
}


// secondpart
document.getElementById("btn-calculate").addEventListener('click', function(){
    const userCalculate = document.getElementById("user-player");
    const calculateString = userCalculate.value;
    const calculateId = parseFloat(calculateString);

    
    // console.log(arafat);
    const playerCalculated = document.getElementById("player-calculated");
    const playerCalculatedString = playerCalculated.innerText;
    const playerCalculatedElement = parseFloat(playerCalculatedString);
    const playerCalculatedPrice = playerCalculatedElement + calculateId * 5;
    playerCalculated.innerText = playerCalculatedPrice;


    userCalculate.value = '';

})
// secondpart2
document.getElementById("btn-calcultar").addEventListener('click', function(){
    const userCalculatar = document.getElementById("coach")
    const userCalculatarString = userCalculatar.value;
    const calculataeClass = parseFloat(userCalculatarString);
    userCalculatar.value = '';

    const managerId = document.getElementById("manager");
    const managerIdStrring = managerId.value;
    const managerTotal = parseFloat(managerIdStrring);

    managerId.value = '';
    const inputValue = calculataeClass + managerTotal;

    const playerCalculated = document.getElementById("player-calculated");
    const playerCalculatedString = playerCalculated.innerText;
    const playerCalculatedElement = parseFloat(playerCalculatedString);
    // const playerCalculatedElementTotal = playerCalculatedElement + inputValue;
    // playerCalculated.innerText = playerCalculatedElementTotal;
// console.log(playerCalculatedElementTotal);
   

    
    const teamClacular = document.getElementById("total-player");
    const teamClacularString = teamClacular.innerText;
    const teamClacularElement = parseFloat(teamClacularString);
    const teamToatalPrice = teamClacularElement + playerCalculatedElement + inputValue;

teamClacular.innerText = teamToatalPrice;
})
