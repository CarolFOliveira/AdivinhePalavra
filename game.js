var player1Name = localStorage.getItem("player1name")
var player2Name = localStorage.getItem("player2name")

var player1Score=0
var	player2Score=0

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

function send() {
	word = document.getElementById("word").value
	
	word=word.toLowerCase()
	letra1=word.charAt(1)
	letra2 = Math.floor(word.length/2);
	letra2 = word.charAt(letra2);
	
	
	letra3=word.charAt(word.length-1)
	
	remove1=word.replace(letra1,"_")
	remove2=remove1.replace(letra2,"_")
	remove3=remove2.replace(letra3,"_")
	

    question_word = "<h4 id='wordDisplay'>" +remove3+ "</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btSend' onclick='check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";


}


var turnoPergunta = "player1";
var turnoResposta = "player2";


function check()
{
	obterResposta= document.getElementById("inputCheckBox").value
	obterResposta=obterResposta.toLowerCase()
	console.log(obterResposta)
	if(obterResposta==word)	
	{
		if(turnoResposta=="player1")
		{
			
			player1Score = player1Score+1
			document.getElementById("player1Score").innerHTML = player1Score;
		}
		else 
		{
			player2Score = player2Score+1
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}
	if(turnoPergunta=="player1")
	{
		turnoPergunta="player2"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name ;
	}
	else 
	{
		turnoPergunta="player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
	}

	if(turnoResposta=="player1")
	{
		turnoResposta="player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;
	}
	else 
	{
		turnoResposta="player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}