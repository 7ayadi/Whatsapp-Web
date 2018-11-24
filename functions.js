// functions go here in that scheme:
/*

	var commands =	["help", "text: this is a response"];
	
*/
var helpMessage = '[*+*]-----------------[*+*]\n' +
 		   ' |       *Crysis-Bot*       |\n' + 
			 '[*+*]-----------------[*+*]\n' +
 		   ' |            help              |\n' +
		   ' |           credits           |\n' +
		   '[*+*]-----------------[*+*]'

 var prefix = "!";
 var commands = ["help", "text: "+helpMessage,
		 "credits", "text: "+helpMessage]; 
var actions = ["text", "sendMessage",
	       "respond", "respond"];
var emotes = ["yes", "👍",
	      "no", "👎"];


/////// 	Defining functions here. 
///////			DONT TOUCH THIS!
function pad(widthleft, string, padding){return (widthleft <= string.length) ? string : pad(widthleft, padding + string, padding)}
function isEven(n) {return n % 2 == 0;}
function sendMessage(text){
   messageBox = document.querySelectorAll("[contenteditable='true']")[0];
  document.getElementsByClassName("_2S1VP")[0].innerHTML = text;
    document.getElementsByClassName("_2S1VP")[0].innerTEXT = text;
    event = document.createEvent("UIEvents");
		event.initUIEvent("input", true, true, window, 1);
    messageBox.dispatchEvent(event);
    $("._35EW6").click();
}

function drawMenu(header, options, size){
	options.map(function(el) { 
	  el = '*' + el + '*'; 
	});
	header = "*"+header+"*";
	var MenuOut =  '[*+*]-----------------[*+*]\n' +
		       '|'+header.padStart(16, ' ').padEnd(30, ' ')+'|\n' +
	    	       '[*+*]-----------------[*+*]\n';
			options.map(function(el) { 
				el = '*' + el + '*';
				MenuOut += '|'+(el).padStart(16, ' ').padEnd(30, ' ')+'|\n'
			});
			MenuOut += '[*+*]-----------------[*+*]\n';
	return MenuOut;
}


function getCommandAction(action, parameters){
	action = action.slice(0,-1);
	var actionINT = 0;
	for(actionINT = 0; actionINT < actions.length; actionINT++){
		if(isEven(actionINT)){
			window[actions[actionINT+1]](parameters);
		}
	}
}	

function lastMessage(){
  var lastmsgctn = document.getElementsByClassName("_3zb-j").length - 1
  var lastMSG = document.getElementsByClassName("_3zb-j")[lastmsgctn].textContent
  return lastMSG
}

function checkForCommands(){
	length = commands.length / 2;
	console.log(length);
}
///////			The bot listener goes here

function listen(){
	setInterval(function(){
		console.log("Scanning for "+(commands.length / 2)+" commands...");
		var runnerINT = 0;
		for(runnerINT = 0; runnerINT < commands.length; runnerINT++){
			if(isEven(runnerINT)){
				if(lastMessage() == commands[runnerINT]){
					console.log("Command detected, and it is : " + commands[runnerINT] + "!");
					var firstWords = [];
					for (var i=0;i<commands.length;i++){
					  var words = commands[(runnerINT + 1)].split(" ");
					  firstWords.push(words[0]);
					}console.log(firstWords[0]);
					getCommandAction(firstWords[0], commands[runnerINT+1].substr(commands[runnerINT+1].indexOf(" ") + 1));
				}
			}
		}
	}, 1000);
}

clear();
setTimeout(function(){console.log("all set! start the bot with listen();")}, 3000);
