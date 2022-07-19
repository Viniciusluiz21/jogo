//https://youtu.be/TvBLOxo-BDw
var fase=1
var y =120
var tela = 0
var musica
var omenu= 1
let img;
var ave=[]
var X=400

var cont = 0
function preload() {
  img = loadImage('Menu.png');
  img1 = loadImage('Tela(1).png')
  img2 = loadImage('Tela(2).png')
  img3 = loadImage('Tela(3).png')
  img4 = loadImage('venceu.png')
  musica=createAudio("jogo.mp3")
  ave[0]=loadImage("ave1.png")
  ave[1]=loadImage("ave2.png")
}
                        
function setup() {
  frameRate(30)
  createCanvas(480, 480);
 
}

function draw() {

  if(tela == 0){
 musica.pause()
    menu()
  //vetor e uma variavel que armazena varias variavel do mesmo tipo.
    if(X>0 && X<=400){
     cont++
    if(cont <=15){
      image(ave[0],X,400)
    }
    else if(cont<=30){
      image(ave[1],X,400)
    }else{
      cont = 0
    }
    X=X-2;
    
    }else if(X==0){
      X=400
    }
 
  }

 else  if(tela==1){
   musica.loop()
    
    jogar()

  }

  else if(tela==2){
musica.loop()
    instruções()

  }

  else if(tela==3){
musica.loop()
    creditos()

  }
  else if(tela==4){
    errou()
  }
 else if(tela==5){
    acertou()
  }
 else if(tela==6){
    venceu()
  }
}

function menu(){

  background(220);
  image(img,0,0)

  
  
   textSize(38);
   
  text("𝐌𝐚𝐭𝐡-𝐪𝐮𝐢𝐳 ", 70, 85)
   
  textSize(28);

  text ("𝐉𝐨𝐠𝐚𝐫",100, 150);

  text ("𝐈𝐧𝐬𝐭𝐫𝐮ç𝐨𝐞𝐬",100, 200);

  text ("𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬",100, 250);

  push()
     //botão 1
     if(mouseX >=80 && mouseX<=170+80 && mouseY>=120 && mouseY<=45+120){
      noFill()
      rect(80, 120, 170, 45);
   
     }
     //botão 2
      if(mouseX >=80 && mouseX<=170+80 && mouseY>=170 && mouseY<=45+170){
        noFill()
      rect(80, 170, 170, 45);
   
      }
     //botão 3
      if(mouseX >=150 && mouseX<=170+150 && mouseY>=220 && mouseY<=45+220){
        noFill()
        rect(80, 220, 170, 45);
   
      }
  pop()
 
}
function venceu(){
  background(img4)
  
}
function jogar(){
  
  background(img1)
  //fase 1
 if(fase==1){
  text("2+2=?",170, 125 )
  
   //botão 1
  rect(150, 200, 170, 45);
  text("5",220,230)
  
   //botão2
   rect(150, 280, 170, 45);
  text("4",220, 310)
  
   //botão3
   rect(150, 350, 170, 45);
   text("7",220,380)
 }
  //fase 2
 else if(fase==2){
     text("5+6=?",170, 125 )
  //botão 1
  rect(150, 200, 170, 45);
  text("7",220,230)
  
    //botão 2
   rect(150, 280, 170, 45);
  text("9",220, 310)
  
    //botão 3
   rect(150, 350, 170, 45);
   text("11",220,380)
  }
   //fase 3
else if(fase==3){
     text("14-8=?",170, 125 )
  //botão 1
  rect(150, 200, 170, 45);
  text("6",220,230)
  
    //botão 2
   rect(150, 280, 170, 45);
  text("9",220, 310)
  
    //botão 3
   rect(150, 350, 170, 45);
   text("7",220,380)
  }
  else if(fase==4){
   console.log("uuuu")
     text("22+20=?",170, 125 )
  //botão 1
  rect(150, 200, 170, 45);
  text("42",220,230)
  
    //botão 2
   rect(150, 280, 170, 45);
  text("46",220, 310)
  
    //botão 3
   rect(150, 350, 170, 45);
   text("40",220,380)
  }
   else if(fase==5){
     text("30-15=?",170, 125 )
  //botão 1
  rect(150, 200, 170, 45);
  text("11",220,230)
  
    //botão 2
   rect(150, 280, 170, 45);
  text("15",220, 310)
  
    //botão 3
   rect(150, 350, 170, 45);
   text("13",220,380)
  }
}

function errou (){
    background(img1)
  text("tente novamente",130, 125 )
  
  rect(150, 350, 170, 45);
  text("voltar",220,380)
}

function acertou(){
  background(img1)
  text("Parabens",170, 125 )
  
  rect(150, 350, 170, 45);
  text("continuar",160,380)
}

function instruções(){

  background(img2)
  
  text("𝐈𝐧𝐬𝐭𝐫𝐮ç𝐨𝐞𝐬",170,125)
  push()
  noFill()
  rect(340,420,85,40)
   pop()
   text("Voltar",350,450)
  text("𝐌𝐚𝐭𝐞𝐫𝐢𝐚: 𝐦𝐚𝐭𝐞𝐦𝐚𝐭𝐢𝐜𝐚 -1 𝐀𝐧𝐨",70,190)
   text( "as funções do jogo são\n controlada pelo mouse", 100, 230)
}

function creditos(){

  background(img3)
     
  text("𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬",170,125)
  
 text( "Nome: Aquiles Burlamaqui\nFunção: Educador Docente", 100, 170);
  
  text("Nome:Vinicius Luiz \nFunção: Programador", 100, 270);  
  
  text("Dayana karoline\nfunção: Monitora",100 , 370)
  push()
  noFill()
   rect(100,420,85,40)
  pop()
  text("Voltar",110,450)
}


function mouseClicked() {

  
  if(tela==0){
     //botão 1
     if(mouseX >=80 && mouseX<=170+80 && mouseY>=120 && mouseY<=45+120){
       tela=1
     }
     //botão 2
      if(mouseX >=80 && mouseX<=170+80 && mouseY>=170 && mouseY<=45+170){
        tela=2
      }
     //botão 3
      if(mouseX >=150 && mouseX<=170+150 && mouseY>=220 && mouseY<=45+220){
        tela=3
      }
  
  }
  
 else if(tela==1){
     //fase 1
     if(fase==1){
       //botão 1
       if(mouseX >=150 && mouseX<=170+150 && mouseY>=200 && mouseY<=45+200){
         tela=4
       }
       //botão 2
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=280 && mouseY<=45+280){
          tela=5
        }
       //botão 3
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=350 && mouseY<=45+350){
          tela=4
        }
     }

     
     //fase 2
      else if(fase==2){
        //botão 1
       if(mouseX >=150 && mouseX<=170+150 && mouseY>=200 && mouseY<=45+200){
         tela=4
       }
        //botão 2
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=280 && mouseY<=45+280){
          tela=4
        }
        //botão 3
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=350 && mouseY<=45+350){
          tela=5
        }
     }
       //fase 3
      else if(fase==3){
        //botão 1
       if(mouseX >=150 && mouseX<=170+150 && mouseY>=200 && mouseY<=45+200){
         tela=5
       }
        //botão 2
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=280 && mouseY<=45+280){
          tela=4
        }
        //botão 3
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=350 && mouseY<=45+350){
          tela=4  
        }
      
 }
   
   else if(fase==4){
        //botão 1
       if(mouseX >=150 && mouseX<=170+150 && mouseY>=200 && mouseY<=45+200){
         tela=5
       }
        //botão 2
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=280 && mouseY<=45+280){
          tela=4
        }
        //botão 3
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=350 && mouseY<=45+350){
          tela=4
        }
      
 }
   else if(fase==5){
        //botão 1
       if(mouseX >=150 && mouseX<=170+150 && mouseY>=200 && mouseY<=45+200){
         tela=4
       }
        //botão 2
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=280 && mouseY<=45+280){
          tela=5
        }
        //botão 3
        if(mouseX >=150 && mouseX<=170+150 && mouseY>=350 && mouseY<=45+350){
          tela=4
        }
      
 }
   
 }
  //errou
  else if(tela==4){
    //se o mouse não estiver pressionado
    if(mouseIsPressed==false){
      
      
      
    
        //veio da fase 1
        if(fase==1){
          tela=1
        fase=1 //volta pra fase 1
        }
        //veio da fase 2
      else  if(fase==2){
          tela=1
        fase=2 //volta para a fase 2
        
       }
      else  if(fase==3){
          tela=1
        fase=3 //volta para a fase 3
      
      }
        else  if(fase==4){
          tela=1
        fase=4 //volta para a fase 4
      
       }
      else if(fase==5){
        tela=1
        fase=5 //volta para a fase 5
      
      
 }
        //...proxima fase
        
       } 
    
  }
  //acertou
  else if(tela==5){
     
        //veio da fase 1
        if(fase==1){
          tela=1
        fase=2 //vai pra fase 2
        }
        //veio da fase 2
       else if(fase==2){
          tela=1
        fase=3 //vai para a fase 3
         
        }
         //veio da fase 3
   else    if(fase==3){
          tela=1
        fase=4 //vai pra fase 4
        }
      //veio da fase 4
   else     if(fase==4){
          tela=1
        fase=5 //vai pra fase 5
        }
     //veio da fase 5
   else   if(fase==5){
          tela=6
        fase=0 //vai pra fase 6
        }
  
        //... proxima fase
        
     }
  else if(tela==3){
    if(mouseX >=100 && mouseX<=185 && mouseY>=420 && mouseY<=420+40){
        tela=0
      }
  }
  else if(tela==2){
    if(mouseX >=340 && mouseX<=340+85 && mouseY>=420 && mouseY<=420+40){
        tela=0
      }
  }
  
}