var tileW = 40, tileH = 40;
var mapW = 10, mapH = 10;
var canvas = document.getElementById("game");
var ctx = null;
var mapSize = mapW * mapH;
var gameTiles = [];
var encounters = [];
var playerLocation; 
var levelExit;

console.log(gameTiles);





//Generating encounter as the player gets to it
function generateEncounter(){
	
};

//Game tile object declaration
function gameTile(){
	this.type = 0;
};
//Generate random tile number/type
function generateTileType(){
	var x = gameTiles.length;
	gameTiles[x] = new gameTile();
	gameTiles[x].type = Math.floor((Math.random() * 3) + 0); //Tile type rng
};
//Generate tiles on map
function generateTiles(){
	for(let i = 0;i<mapSize;i++){
	generateTileType();	
	}
};
//Generating the tiles without encounters
function generateMap(){
	if(ctx==null)
	{
		return;
	}
	for(var y = 0; y < mapH; y++)
	{
		for(var x = 0; x < mapW; x++)
		{
			switch(gameTiles[((y*mapW)+x)])
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
	requestAnimationFrame(generateMap);
}

//To be loaded on window load
window.onload = function(){
	generateTiles();
	generateMap();
	ctx = document.getElementById("game").getContext("2d");
	requestAnimationFrame(generateMap);
	ctx.font = "bold 10pt sans-serif";
}




/******************************************************
*******************************************************
Sample code for character/movement
*******************************************************
*******************************************************


var keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};

var player = new Character();

function Character(){
	this.tileFrom = [1,1];
	this.tileTo = [1,1];
	this.timeMoved = 0;
	this.dimensions = [30,30];
	this.position = [45,45];
	this.delayMove = 700;
}
Character.prototype.placeAt = function(x,y){
	this.tileFrom = [x,y];
	this.tileTo = [x,y];
	this.position =  [((tileW*x) +
		((tileW-this.dimensions[0])/2)),
		((tileH*y) + ((tileH-this.dimensions[1])/2))];
};

Character.prototype.processMovement = function(t)
{
	if(this.tileFrom[0]==this.tileTo[0] &&
		this.tileFrom[1]==this.tileTo[1])
		{
			return false;
		}
		
		if((t-this.timeMoved)>=this.delayMove)
		{
			this.placeAt(this.tileTo[0], this.tileTo[1]);
		}
		else
		{
			this.position[0] = (this.tileFrom[0] * tileW) +
				((tileW - thils.dimensions[0])/2);
			this.position[1] = (this.tileForm[1] * tileH) +
				((tileH - thils.dimensions[1])/2);
				
			if(this.tileTo[0] != this.tileFrom[0])
			{
				var diff = (tileW / this.delayMove) *
					(t - this.timeMoved);
				this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ?
					0 - diff : diff);
			}
			if(this.tileTo[1] != this.tileFrom[1])
			{
				var diff = (tileH / this.delayMove) *
					(t - this.timeMoved);
				this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ?
					0 - diff : diff);
			}
			
			this.position[0] = Math.round(this.position[0]);
			this.position[1] = math.round(this.position[1]);
		}
		
		return true;
};

function toIndex(x,y)
{
	return ((y * mapW) + x);
}

*******************************************************
Frames per second
*******************************************************

var currentSecond = 0, frameCount = 0, framesLastSecond = 0;
var lastFrameTime = 0;

	var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
			currentSecond = sec;
			framesLastSecond = frameCount;
			frameCount = 1;
	}
	
	else { frameCount++; }
	
	ctx.fillStyle = "red";
	ctx.fillText("FPS: " + framesLastSecond, 10, 20);
	

*******************************************************
*******************************************************/
