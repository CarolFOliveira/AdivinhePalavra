function addUser() {
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("player1name",player1Name)
    localStorage.setItem("player2name",player2Name)  
   window.location = "game.html" ;
  }