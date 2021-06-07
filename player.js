
var ParentPlayer=document.getElementById("players-card");
var urlName=location.href.split('=')[1];
console.log(urlName)

var playersList=localStorage.getItem(`${urlName}`) === null ? [] : JSON.parse(localStorage.getItem(`${urlName}`));
playersList.map((item,index)=>{
    createPlayerCard(item,index+1);
});

console.log(ParentPlayer)
function createPlayerCard(list,id){
    var PlayerCard= document.createElement("a");
    PlayerCard.className="player-card";
   // PlayerCard.id=id+1;
    PlayerCard.href="./team.html?id="+(id+1);
    var PlayerName= document.createElement("h2");
    PlayerName.innerHTML=list.pName;
    var PlayerPhoto= document.createElement("img");
    PlayerPhoto.src=list.pimage;
    PlayerPhoto.alt=list.pName+"image"
    var TeamName= document.createElement("h3")
    TeamName.innerHTML=list.tname;
    var Price= document.createElement("h3");
    Price.innerHTML="Auction Price "+list.price;
    var PlayerStatus= document.createElement("h3");
    PlayerStatus.innerHTML="status:"+list.pStatus;
    var Description= document.createElement("h3");
    Description.innerHTML="Description"+list.description

    PlayerCard.appendChild(PlayerName);
    PlayerCard.appendChild(PlayerPhoto);
    PlayerCard.appendChild(TeamName);
    PlayerCard.appendChild(Price);
    PlayerCard.appendChild(PlayerStatus);
    PlayerCard.appendChild(Description);
       
        console.log(PlayerCard)
        ParentPlayer.appendChild(PlayerCard)
}