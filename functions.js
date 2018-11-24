// functions go here in that scheme:
/*

	var commands =	["help", "text: this is a response"];
	
*/

 var prefix = "!";
 var commands = ["help", "text: hello world",
		 "end", "text: goodbye!"]; 

/////// 	Useful commands (NEEDED!)

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

/////// 	Defining functions here. 
///////			DONT TOUCH THIS!

function sendMessage(text){
  //insert the text
  document.getElementsByClassName("_2S1VP")[0].innerHTML = text;
    document.getElementsByClassName("_2S1VP")[0].innerTEXT = text;
    // refresh to apply change
    event = document.createEvent("UIEvents");
		event.initUIEvent("input", true, true, window, 1);
    messageBox.dispatchEvent(event);
    // click the send button
    $("._35EW6").click();
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
	console.log("Scanning for "+(commands.length / 2)+" commands...");
	setInterval(function(){
	  console.log("scanning for commands...");
	}, 1000);
}

clear();
sleep(3000);
console.log("all set! start the bot with listen();");
