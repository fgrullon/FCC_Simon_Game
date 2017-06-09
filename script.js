/*
1. ON / OFF Button disable and enable the console div.    *
2. Count show 00 when ON
3. Create and array and add a random number to it
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
		var count = 0;
		var autoArr = [];


		run(autoArr);

		$(".game").on('click', function(evt) {
			var userArr = [];
			
			if(autoArr[autoArr.length - 1] != evt.target.id){
				alert("WRONG");
			}else{
				userArr.push(evt.target.id);
			} 


			if(autoArr.length === userArr.length){

				run(autoArr);


			}
		});


	});

	//On Click in Start Button
	$(".strict").click(function(){
		alert("click strict");
	});

//firstElementChild: div#green.btn-green


});


function addSet(set){
	var number = Math.floor(Math.random() * 4 + 1);
	set.push(number);

	return set;
}


function hightlight(set){

	for (var i = 0; i < set.length; i++) {
				switch(set[i]){
					case 1:
					$(".btn-green").addClass('horizTranslate');
					setTimeout(function(){
						
						$(".btn-green").removeClass('horizTranslate');
						
					},500);
					break;
					case 2:
					$(".btn-red").addClass('horizTranslate');
					setTimeout(function(){
						
						$(".btn-red").removeClass('horizTranslate');
						
					},500);
					break;
					case 3:
					$(".btn-yellow").addClass('horizTranslate');
					setTimeout(function(){
						
						$(".btn-yellow").removeClass('horizTranslate');
						
					},500);
					break;
					case 4:
					$(".btn-blue").addClass('horizTranslate');
					setTimeout(function(){
						
						$(".btn-blue").removeClass('horizTranslate');
						
					},500);
					break;
				}

	};

}

function run(set){
		addSet(set);

		count = set.length;
		if(count < 10){ count = "0"+count; }
		document.getElementsByClassName("count")[0].innerText = count;

		hightlight(set);
}


