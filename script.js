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
		//hightlight();
		var count = 0;
		var autoArr = [];
		

		run(autoArr);
		var userArr = [];
		$(".game").on('click', function(evt) {
			
			
			//console.log(autoArr[autoArr.length - 1] +" : "+ evt.target.id);
			//console.log(autoArr[autoArr.length - 1] == evt.target.id)
			userArr.push(evt.target.id);
			console.log(userArr);
			if(autoArr[userArr.length - 1] != userArr[userArr.length - 1]){
				console.log("Wrong");
				document.getElementsByClassName("count")[0].innerText = "!!";
			}
				
				
			if(autoArr.length === userArr.length){
				var igual = compareArr(autoArr, userArr);

				if(igual){
					if(userArr.length === 20){
						alert("You win!!!")
					}else{
						userArr = [];
						run(autoArr);

					}
					
				}

			}

			{


			}
		});


	});

	//On Click in Start Button
	$(".strict").click(function(){
		alert("click strict");
	});



});

var setArr = [];
function addSet(set){
	var number = Math.floor(Math.random() * 4 + 1);
	set.push(number);
	console.log("System: "+set);
	return set;
}


function hightlight(arreglo) {
		i = 0;
		
		for (var j = 0; j < arreglo.length; j++) {
		console.log("Hi: "+j);
		i++;
		var who = "";
		switch(arreglo[j]){
					case 1:
					$(".btn-green").addClass('horizTranslate');				
					break;
					case 2:
					$(".btn-red").addClass('horizTranslate');
					break;
					case 3:
					$(".btn-yellow").addClass('horizTranslate');
					break;
					case 4:
					$(".btn-blue").addClass('horizTranslate');
					break;
				}
		setTimeout(function(){
						
			$(".btn-green").removeClass('horizTranslate');
			$(".btn-red").removeClass('horizTranslate');
			$(".btn-yellow").removeClass('horizTranslate');
			$(".btn-blue").removeClass('horizTranslate');
						
					},800);		
		};
	
	if(i < arreglo.length){

	    setTimeout(hightlight(setArr), 500);
	}
}




function run(set){
		addSet(set);

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
