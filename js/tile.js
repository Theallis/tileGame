var tileW = 40, tileH = 40;
var mapW = 10, mapH = 10;
var canvas = document.getElementById("game");
var ctx = null;
var mapSize = mapW * mapH;
var gameTiles = [];
var playerLocation = [4, 4];
var levelExitLocation = [10,10];
var coordInfo = [];
window.addEventListener("keydown", updateGame, false); //for player movement

//Not currently in use
var encounters = [];


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//                     Level Modifiers                            //
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


//Level exit
function exitLevel()
{
	if(playerLocation == levelExitLocation)
	{
		
	}
	
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//                     Encounters                                 //
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


//Generating encounter as the player gets to it
function generateEncounter()
{
	
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//                     Tile Generation                            //
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


//Game tile object declaration
function gameTile(type)
{
	this.type = type;
}

//Generate random tile number/type 
function generateTileType()
{
	var x = gameTiles.length;
	gameTiles[x] = new gameTile();
	gameTiles[x].type = Math.floor((Math.random() * 4) + 0); //Tile type rng
}

//Generate tiles into the gameTiles array by calling generateTileType for each tile up to the the max for the map
function generateTiles()
{
	for(let i = 0;i < mapSize;i++){
	generateTileType();	
	}
}

//Generating the tile color based off of tile type value
function generateMap()
{
	if(ctx==null)
	{
		return;
	}
	for(var y = 0; y < mapH; y++)
	{
		for(var x = 0; x < mapW; x++)
		{
			for(var i = 0; i < gameTiles.length;i++)
			{
				switch(gameTiles[((y*mapW)+x)].type)
				{
					case 0:
						ctx.fillStyle="green";
						break;
					case 1:
						ctx.fillStyle="purple";
						break;
					case 2:
						ctx.fillStyle="blue";
						break;
					case 3:
						ctx.fillStyle="red";
						break;
					default:
						ctx.fillStyle="black";
				}
				ctx.fillRect(x*tileW, y*tileH, tileW, tileH);
			}	
		}
	}
	requestAnimationFrame(generateMap);
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//                     Coordinate Storage                         //
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


//Load playerLocation and levelExitLocation into encounteredCoords once per load
function initialCoords()
{
	/*for(var i = 0; i !== 1;i++)
	{
		encounteredCoords[playerLocation].push(duplicatePlayerLocation(playerLocation), levelExitLocation);
	}*/
}

//Duplicating current playerlocation to add to the encountered array otherwise it continues to change because of the current referenced array
function duplicatePlayerLocation(location)
{
	var tempPlayerLocation = JSON.parse(JSON.stringify(location));
	return tempPlayerLocation;
}

//Player location update on arrow key press
function updateGame(key) {
	if(key.keyCode == 37)
	{
		if(playerLocation[0] >= 2)
		{
		playerLocation[0] = playerLocation[0] - 1;
		}
	}
	if(key.keyCode == 38) {
		if(playerLocation[1] >= 2)
		{
		playerLocation[1] = playerLocation [1] - 1;
		}
	}
	if(key.keyCode == 39) {
		if(playerLocation[0] <= 9)
		{
		playerLocation[0] = playerLocation [0] + 1;
		}
	}
	if(key.keyCode == 40) {
		if(playerLocation[1] <=9)
		{
		playerLocation[1] = playerLocation [1] + 1;
		}
	}
	document.getElementById('playerLocation').innerHTML = playerLocation;
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//                     window load                                //
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


//To be loaded on window load
window.onload = function(){
	generateTiles();
	generateMap();
	ctx = document.getElementById("game").getContext("2d");
	requestAnimationFrame(generateMap);
	ctx.font = "bold 10pt sans-serif";
	initialCoords();
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//                     Editing Help                               //
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
console.log(playerLocation);
console.log(levelExitLocation);
console.log(mapSize);
console.log(gameTiles);
console.log(duplicatePlayerLocation(playerLocation));