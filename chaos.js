var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const width = 1200;
const height = 1200;

const numFocusPoints = 4;
const numPoints = 10000;

const dotSize = 1;

let focusPoints=[null,null,null];

canvas.width= width;
canvas.height=height;


//basic point class
class point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static midpoint(a,b){
        let newX= (a.x+b.x)/2;
        let newY= (a.y+b.y)/2;
        return new point(newX,newY);
    }
    
    toString(){
        return("("+this.x+","+this.y+")");
    }
}

//choose Focus points at random
for (i=0;i<numFocusPoints;i++){
    let x= Math.floor(Math.random()*width+1);
    let y=Math.floor(Math.random()*height+1);
    focusPoints[i]= new point(x,y);
    drawPoint(focusPoints[i]);
}

//choose a random starting point
let firstPoint = new point(Math.floor(Math.random()*width+1),Math.floor(Math.random()*height+1));
drawPoint(firstPoint);
let lastPoint=firstPoint;

//do the rest of the points
for (i=0;i<numPoints;i++){
    currentFocusPoint = focusPoints[Math.floor(Math.random()*numFocusPoints)];
    nextPoint = point.midpoint(currentFocusPoint,lastPoint);
    drawPoint(nextPoint);
    lastPoint = nextPoint;
}

//fucntion to draw points
function drawPoint(point){
    ctx.fillRect(point.x,point.y,dotSize,dotSize); 
}


