//Variaveis Bola
let xInicialBola = 400;
let yInicialBola = 300;
let diametroBola = 20;
let raioBola = 10;
let velocidadeBolax  =  15;
let velocidadeBolay  =  15;

//Variaveis Raquete
let xInicialRaquete1 = 10;
let yInicialRaquete1 = 260;
let alturaRaquetes = 80;
let larguraRaquetes = 10;
let xInicialRaquete2 = 770;
let yInicialRaquete2 = 260;
let velocidadeRaquete2;
let colisao = false;


//Pontuação
let pontosJogador = 0;
let pontosIA = 0;

//sons
let trilha;
let ponto;
let hit;

function preload (){
 trilha = loadSound("Sons/trilha.mp3") 
 ponto = loadSound("Sons/ponto.mp3")  
 hit = loadSound("Sons/raquetada.mp3") 
}

function setup() {
  createCanvas(800, 600);
  trilha.loop();
}

function draw() {
  background(0);

mostrabola();
mostraraquetes(xInicialRaquete1,yInicialRaquete1);
mostraraquetes(xInicialRaquete2,yInicialRaquete2);
movimentaBola();
verificabordas();
movimentaRaquete();
iaoponente();
colisaoRaquetes(xInicialRaquete1, yInicialRaquete1);
colisaoRaquetes(xInicialRaquete2, yInicialRaquete2);
exibepontuacao();
marcaponto();
}

function mostrabola(){


circle(xInicialBola,yInicialBola,diametroBola);
  
}

function mostraraquetes(x,y){


rect(x,y,larguraRaquetes,alturaRaquetes);
rect(x,y,larguraRaquetes,alturaRaquetes);
  
}

function movimentaBola (){ 
xInicialBola += velocidadeBolax;
yInicialBola += velocidadeBolay;
 
}

function verificabordas(){
  if (xInicialBola + raioBola >= width || xInicialBola - raioBola <= 0 ){
  velocidadeBolax *= -1;
}

  if (yInicialBola + raioBola >= height || yInicialBola - raioBola <= 0){
  velocidadeBolay *= -1
}      
}

function colisaoRaquetes (x,y){
  colisao = collideRectCircle (x,y,larguraRaquetes, alturaRaquetes,xInicialBola,yInicialBola,diametroBola)
  if (colisao){
    velocidadeBolax *= -1
    hit.play();
  }  
}


function movimentaRaquete(){
  
  if (keyIsDown (UP_ARROW)){
   yInicialRaquete1 -= 10
  }

  if (keyIsDown (DOWN_ARROW)){
   yInicialRaquete1 += 10
  }

}

function iaoponente (){
  
 velocidadeRaquete2 = yInicialBola - yInicialRaquete2 - larguraRaquetes / 2 -30;
 yInicialRaquete2 += velocidadeRaquete2 
 
}

function exibepontuacao(){
textAlign(CENTER);
textSize(30);  
fill(255);
text(pontosJogador, 280,40);
text(pontosIA, 520,40);
}

function marcaponto(){  
  
  if(xInicialBola + raioBola == 800){
    pontosJogador += 1 ; 
    ponto.play();

  }

    if(xInicialBola - raioBola == 0){
    pontosIA += 1 ;
    ponto.play();
  }
}

