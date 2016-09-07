var tries=0;
var correct = 0;
var stone = [[0,0,0],[0,0,0],[0,0,0]];
	for(i=0;i<3;i++){
		var x = Math.floor(Math.random()*3);
		var y = Math.floor(Math.random()*3);
			if(stone[x][y]==1){
				if(stone[y][x]==0){
					stone[y][x]=1;
				}else
					stone[Math.floor(Math.random()*3)][Math.floor(Math.random()*3)]=1;
				}
				stone[x][y]=1;
	}

		//to see position of stone
			console.log(JSON.stringify(stone));
		function check(id){
			if(stone[id.parentNode.rowIndex][id.cellIndex]==1){
				id.innerHTML = "<img src='images/stone.png' />"
				correct++;
			}else{
				id.innerHTML = "<img src='images/x.png' />"
				tries++;
			}
			if(tries === 3){
				document.getElementById("script").innerHTML = "<h1> Game Over!! YOU LOSE!!!! </h1>";
				document.getElementById("script").innerHTML += "<h1 onclick='location.reload()'> click me to play again </h1>";
			}else if(correct === 3){
				document.getElementById("script").innerHTML = "<h1> You Win !!  </h1>";
				document.getElementById("script").innerHTML += "<h1 onclick='location.reload()'> click me to play again </h1>";
			}
		}

