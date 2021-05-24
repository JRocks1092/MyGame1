class Game {

    constructor() {

        this.form = new Form();         
    }

    createGameObjects() {

        player = new Player(500, 100);             

        p1 = new Platform(600, 300, 600, 50);
        p2 = new Platform(1200, -100, 50, 800);
        p3 = new Platform(500, 300, 600, 50);/*        
        p4 = new Platform(875, 400, 600, 50);
        p5 = new Platform(600, 300, 600, 50);
        p6 = new Platform(600, 300, 600, 50);
        p7 = new Platform(600, 300, 600, 50);        
        p8 = new Platform(875, 400, 600, 50); 
        p9 = new Platform(600, 300, 600, 50);                
        p10 = new Platform(600, 300, 600, 50);
        p11 = new Platform(600, 300, 600, 50);
        p12 = new Platform(600, 300, 600, 50);        
        p13 = new Platform(875, 400, 600, 50); 
        p14 = new Platform(600, 300, 600, 50);
        p15 = new Platform(600, 300, 600, 50);
        p16 = new Platform(600, 300, 600, 50);        
        p17 = new Platform(875, 400, 600, 50); 
        p18 = new Platform(600, 300, 600, 50);
        p19 = new Platform(600, 300, 600, 50);
        p20 = new Platform(600, 300, 600, 50);        
        p21 = new Platform(600, 300, 600, 50);
        p22 = new Platform(600, 300, 600, 50);        
        p23 = new Platform(875, 400, 600, 50); 
        p24 = new Platform(600, 300, 600, 50);
        p25 = new Platform(600, 300, 600, 50);*/
           
        
        
    }

    start() {

        gameState = 0;                  

    }

    gameManager(){

        if(gameState === 1){

            this.play();
        }
    }

    display() {

        background(255, 255, 255);       
        
        p1.display();
        p2.display();
        p3.display();/*        
        p4.display(); 
        p5.display();
        p6.display();
        p7.display();        
        p8.display();
        p9.display();                
        p10.display();
        p11.display();
        p12.display();        
        p13.display(); 
        p14.display();
        p15.display();
        p16.display();        
        p17.display(); 
        p18.display();
        p19.display();
        p20.display();        
        p21.display();
        p22.display();        
        p23.display(); 
        p24.display();
        p25.display();*/
       

        player.display();        
    }
    play() {
                        
        this.display();        
        player.playerMovements();        

    }

}