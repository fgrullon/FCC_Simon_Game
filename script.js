/*
1. ON / OFF Button disable and enable the console div.    *
2. Count show 00 when ON *
3. Create and array and add a random number to it *
4. highlight the div with the number in the array
5. Add one to Count
6. Wait to the user click the div
7. add a number correspond to the div the user click
8. compare the set array and the clicked array
	1. if equal add another number to the set and repect from number 4
	2. If are different and strict is false, repect from number 4
	3 If on strict mode restart the count and erase the set array


*/


$(function(){

	var strict = false;

	$(".power").click(function(){
		if(document.getElementsByClassName("power")[0].checked){
			$(".game").removeClass("disabled");
			$(".console > div").removeClass("disabled");
		}else{
			$(".game").addClass("disabled");
			$(".console > div").addClass("disabled");
		}
	});

	
	//On Click in Start Button
	$(".start").click(function(){
		var count = 0;
		var autoArr = [];
		

		addSet(autoArr);
		var userArr = [];
		$(".game").on('click', function(evt) {
			
			userArr.push(evt.target.className);
			
			if(autoArr[userArr.length - 1] != userArr[userArr.length - 1]){
				if(strict === true){
					userArr = [];
					autoArr = [];
					addSet([]);
				}else{
					run(autoArr);
					document.getElementsByClassName("count")[0].innerText = "!!";
				}
				
			}
				
				
			if(autoArr.length === userArr.length){
				var igual = compareArr(autoArr, userArr);

				if(igual){
					if(userArr.length === 20){
						alert("You win!!!")
					}else{
						userArr = [];
						addSet(autoArr);

					}
					
				}

			}

			{


			}
		});


	});

	//On Click in Start Button
	$(".strict").click(function(){
		if(strict){
			strict = false;
		}else{
			strict = true;
		}
		
		document.getElementsByClassName("light")[0].style.backgroundColor = "red";
	});



});

var setArr = [];
function addSet(set){
	var number = Math.floor(Math.random() * 4 + 1);
	var word = "";
	if( number === 1){
		word = "btn-green"
	}else if( number === 2){
		word = "btn-red"
	}else if( number === 3){
		word = "btn-yellow"
	}else{
		word = "btn-blue"
	}
	set.push(word);
	run(set);
}


function hightlight(arreglo) {
  var i = 0;
  var moves = setInterval(function(){
    playGame(arreglo[i]);
    i++;
    if (i >= arreglo.length) {
      clearInterval(moves);
    }
  }, 600)
  
}

function playGame(field) {
  $("."+field).addClass('horizTranslate');
  var audio = new Audio("audio/"+field+".mp3");
  audio.play();
  setTimeout(function(){
      $("."+field).removeClass('horizTranslate');
  }, 400);
}



function run(set){
		count = set.length;
		if(count < 10){ count = "0"+count; }
		document.getElementsByClassName("count")[0].innerText = count;

		hightlight(set);

}

function compareArr(a, b){
	var igual = true;

		for(var i=0; i < a.length; i++){
			if(a[i] != b[i]){
				igual = false;
			}

		}

	return igual;

}


