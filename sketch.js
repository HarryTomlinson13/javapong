let  xBolinha=300
     yBolinha=200
     diametro=25
let VelocidadeXbolinha= 3;
let VelocidadeYbolinha= 3;

function setup() {
createCanvas(600, 400);
}

function draw() 
{
   background(0);
 circle(xBolinha, yBolinha, diametro);
  xBolinha += VelocidadeXbolinha
  yBolinha += VelocidadeYbolinha
  
  if (xBolinha<0||xBolinha>width){VelocidadeXbolinha= VelocidadeXbolinha*-1}

  if (yBolinha<0||yBolinha>height)
  { VelocidadeYbolinha= VelocidadeYbolinha*-1}

}

  