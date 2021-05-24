const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var gameState;
var player;
var platforms = [];
var moving, isToRight;
var canvas
var p1, p2, p3, p4,p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25;

function preload() {



}

function setup() {

    canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
    
    game = new Game();
    game.createGameObjects();    

    game.start();        
}

function draw() {  
    
    Engine.update(engine);

    game.gameManager();

    game.form.display();
}