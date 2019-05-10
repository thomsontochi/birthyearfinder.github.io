    
   document.getElementById("year").style.display = "none";
// the above removes the display text with the id year, like styles in js
   document.getElementById("button").onclick = function() {  calculate();  };

    function calculate() {
	
		var number = document.getElementById("number").value;
		// the above is a code that saves the value of the id number to variable  number
		if (number == "" || number == 0) {
			
			window.alert("Please type your correct age!");
			return;
            // the if statement is some sort of validation that works when the number typed in the box, is either nothing or zero, then it echos the window.alert.
		}
		
		var date = new Date().getFullYear();
		// getting the current year stored in the date variable.
		var birthyear = number - date;
		// doing the actual maths
		document.getElementById("year").style.display = "block";
        // this above displays the hidden id, withthe id year.
		document.getElementById("year").innerHTML = "Your birth year is " + birthyear;
        // this code above displays the results
		
	}
