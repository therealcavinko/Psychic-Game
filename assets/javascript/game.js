let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
                'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let win = 0;
let lose = 0;
let left = 10;
let guesses = [];
//----------------------------------------------------------------------------------------
//generate random letter or "letter code"?
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
   
       function play() {
	            document.querySelector("#guess").innerHTML = "Your Guesses So Far: " + guesses.join(' ');
        }
 function remaining() {
             // https://plainjs.com/javascript/selecting/ (how to select element)
             // https://www.w3schools.com/jsref/prop_html_innerhtml.asp (changes the html i guess, no idea why its needed)
            	document.querySelector("#left").innerHTML = "Guesses Left: " + left;
        }

 //-------------------------------------------------------------------------------------------------------------------------
      
        let restart;
       restart = function() {
	            Left = 9;
                guesses = [];
	            randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
        }

   

    document.onkeyup = function(key) {
    left = left - 1;
//----------------------------------------------------------------------------------------------------------------------------
    // google search how to change letter code to letter
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
	 let select = String.fromCharCode(key.keyCode).toLowerCase();

   //https://www.w3schools.com/jsref/jsref_push.asp
     //.push added the letter to the array
     guesses.push(select); 
    play();
    remaining();
	
	if (select === randomLetter){
		win = win + 1;
		document.querySelector("#wins").innerHTML = "Wins: " + win;
		restart();
    } 
    
	else if (left === 0) {
		lose = lose + 1;
		document.querySelector("#lose").innerHTML = "Loses: " + lose;
		left = 10;
	}
  };

       

 