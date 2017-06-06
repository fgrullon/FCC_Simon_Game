$(function(){

	//On Click in Start Button
	$(".start").click(function(){
		count = 0;
		var arr = [];
		setInterval(function(){


			if(count < 10){ count = "0"+count; }

			var set = Math.floor(Math.random() * 4 + 1);
			console.log(set);
			switch(set){
				case 1:
				document.getElementsByClassName("btn-green")[0].style.backgroundColor = "#98FB98";
				arr.push(set);
				break;
				case 2:
				document.getElementsByClassName("btn-red")[0].style.backgroundColor = "#FF0000";
				arr.push(set);
				break;
				case 3:
				document.getElementsByClassName("btn-yellow")[0].style.backgroundColor = "#FFFF00";
				arr.push(set);
				break;
				case 4:
				document.getElementsByClassName("btn-blue")[0].style.backgroundColor = "#0070BB";
				arr.push(set);
				break;
			}

			document.getElementsByClassName("count")[0].innerText = count;
			console.log(arr)
			count++;
			if(arr.length > 19){
				alert("You Win!");
				location.reload();
			}
		}, 1000);
	});

	//On Click in Start Button
	$(".strict").click(function(){
		alert("click strict");
	});


});
