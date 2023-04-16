let input, button;
let del;
let xSpace = 30;
let ySpace = 30;
let case_10,case_9,case_8,case_7,case_6,case_5,case_4;
let seedX, seedY;
let textX, textY;
let startup03 = "昨天吃酸菜魚真的好吃";
let startup01 = "可不可冷露歐蕾真好喝";
let startup02 = "鐵工直角器直角固定器";

var socket;
var output;


function setup() {
  //SOCKET ZONE
  socket = io.connect('http://localhost:3000');
  socket.on('userInput',newDrawing);

  createCanvas(428,926);
  background('#c6cdd7');
  textFont('Noto+Sans+TC');
  textSize(20);
  input = createInput('輸入4-10字');
  input.position(130,500);

  button = createButton('upload');
  button.position(130, 530);
  button.mousePressed(uploadText);
  
  for(var i=0; i<10; i++){
    textX = 70;
    textY = 120;
    
    //(100,100)(640,640)
    text(startup01.charAt(i),textX+i*xSpace,textY);
    text(startup02.charAt(i),textX+i*xSpace,textY+ySpace);
    text(startup03.charAt(i),textX+i*xSpace,textY+ySpace*2);
    text(startup01.charAt(i),textX+i*xSpace,textY+ySpace*3);
    text(startup02.charAt(i),textX+i*xSpace,textY+ySpace*4);
    text(startup03.charAt(i),textX+i*xSpace,textY+ySpace*5);
    text(startup01.charAt(i),textX+i*xSpace,textY+ySpace*6);
    text(startup02.charAt(i),textX+i*xSpace,textY+ySpace*7);
    text(startup03.charAt(i),textX+i*xSpace,textY+ySpace*8);
    text(startup02.charAt(i),textX+i*xSpace,textY+ySpace*9);
  
    
  }
    
}

//SOCKET ZONE
function newDrawing(data){


//TRANSFORM
    for(var i=0; i<=10; i++){
    noStroke();
    rectColor = color(198,205,215);
    var rectAlpha = 2+millis()/80000;
    rectColor.setAlpha(rectAlpha);
    fill(rectColor);
    rect(95,85,600,600);
    console.log(rectAlpha);
  }
  
  if(data.length == 10){ //10字大組合
     del = int(random(0,9)); //行列中C10取1
     case_10 = int(random(1,5));
     console.log(del);
     //noFill();
      
    //case_10 = int(random(1,5));
    case_10 = 1;
    
      switch(case_10){
          
        case 1: //左至右
        
          for(var i = 0; i < 10; i++){
            
      fill('#c6cdd7');
      noStroke();
      rect(textX+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+i*xSpace,textY+del*ySpace);
     }
          
          break;
        
          case 2: //上至下
          for(var i = 0; i < 10; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+i*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textY+del*ySpace,textX+i*xSpace);
     }
          break;
          
          case 3: //右斜
          for(var i=0; i<10; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*i-5,textY+ySpace*i-15,20,20);
            fill(0);
            text(data.charAt(i),textX+xSpace*i,textY+ySpace*i);
            
          }
          
          break;
          
          case 4: //左斜
          for(var i=0; i<10; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*9-i*xSpace-5,textY+ySpace*i-15,20,20);
            fill(0);
            text(data.charAt(i),textX+xSpace*9-i*xSpace,textY+ySpace*i);
            
          }
          break;
          
      
          
      }
    
  }else if(data.length == 9){ //9字大集合
    
       del = int(random(0,9)); //行列中C10取1
       seedX = int(random(0,2)); //9字從1,2位開始
       case_9 = int(random(1,3));
      console.log(case_9+','+del+","+seedX);
    
    switch(case_9){
        
      case 1: //左至右
        for(var i = 0; i < 9; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
        
        case 2: //上至下
          for(var i = 0; i < 9; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+seedX*xSpace+i*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+del*xSpace,textY+seedX*xSpace+i*ySpace);
    }
        break;
       
       
       
    
    }
  }else if(data.length == 8){ //8字大集合
    
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,3)); //8字從1-3位開始
    seedY = int(random(0,3));
    case_8 = int(random(1,4));
    //case_8 = 3;
    console.log(case_8+','+del+","+seedX+","+seedY);
    
    switch(case_8){
        
      case 1: //左右
       for(var i = 0; i < 8; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
      
        case 2:
        for(var i = 0; i < 8; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+seedX*xSpace+i*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+del*xSpace,textY+seedX*xSpace+i*ySpace);
    }
        break;
        
        case 3: //右斜
        for(var i=0; i<8; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*i+seedX*xSpace-5,textY+ySpace*i+seedY*ySpace-15,20,20);
            fill(0);
            text(data.charAt(i),textX+xSpace*i+seedX*xSpace,textY+ySpace*i+seedY*ySpace);
            
          }
          
          break;
        
    }
    
    
  }else if(data.length == 7){
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,4)); //7字從1-4位開始
    seedY = int(random(0,4));
    case_7 = int(random(1,3));
    //case_7 = 2;
    console.log(case_7+','+del+","+seedX+","+seedY);
    
    switch(case_7){
        
      case 1: //左右
        for(var i = 0; i < 7; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
        
        case 2: //左斜
        for(var i=0; i<7; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*(9-seedX)-i*xSpace-5,textY+ySpace*seedY+ySpace*i-15,20,20);
            fill(0);
            text(data.charAt(i),textX+xSpace*(9-seedX)-i*xSpace,textY+ySpace*seedY+ySpace*i);
            
          }
          break;
        
    }
  }else if(data.length == 6){
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,5)); //6字從1-5位開始
    seedY = int(random(0,5));
    case_6 = int(random(1,3));
    //case_6 = 2;
    console.log(case_6+','+del+","+seedX+","+seedY);
    
    switch(case_6){
      case 1: //上下
        for(var i = 0; i < 6; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+seedX*xSpace+i*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+del*xSpace,textY+seedX*xSpace+i*ySpace);
    }
        break;
        
        case 2: //右斜
        for(var i=0; i<6; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*i+seedX*xSpace-5,textY+ySpace*i+seedY*ySpace-15,20,20);
            fill(0);
            text(data.charAt(i),textX+xSpace*i+seedX*xSpace,textY+ySpace*i+seedY*ySpace);
            
          }
          
          break;
        
        
        
    }
    
  }else if(data.length == 5){
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,6)); //5字從1-6位開始
    seedY = int(random(0,6));
    case_5 = int(random(1,3));
    //case_5 = 2;
    console.log(case_5+','+del+","+seedX+","+seedY);
    
    switch(case_5){
        case 1: //左右
        for(var i = 0; i < 5; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
        
        case 2: //上下
        for(var i = 0; i < 5; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+seedX*xSpace+i*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+del*xSpace,textY+seedX*xSpace+i*ySpace);
    }
        break;
        
    }
    
  }else if(data.length == 4){
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,7)); //4字從1-7位開始
    seedY = int(random(0,7));
    case_4 = int(random(1,3));
    //case_4 = 2;
    console.log(case_4+','+del+","+seedX+","+seedY);
    
    switch(case_4){
      case 1: //右斜
        for(var i=0; i<4; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*i+seedX*xSpace-5,textY+ySpace*i+seedY*ySpace-15,20,20);
            fill(0);
            text(data.charAt(i),textX+xSpace*i+seedX*xSpace,textY+ySpace*i+seedY*ySpace);
            
          }
          
          break;
          
          case 2:
        for(var i = 0; i < 4; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(data.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
    }
  }
  
}

function keyPressed() {
  if (keyCode === 13) {
    uploadText();
  }
}

function draw() {
  

      
   }


function uploadText() { //UPLOAD TEXT FUNCTIONS
  output = input.value();
  input.value('');
  //background('#c6cdd7');
  //text(output, 400, 200);
  
  //SOCKET ZONE
  console.log('user sending:'+ output);
  socket.emit('userInput', output);

  //TRANSFORM
    for(var i=0; i<=10; i++){
    noStroke();
    rectColor = color(198,205,215);
    var rectAlpha = 2+millis()/80000;
    rectColor.setAlpha(rectAlpha);
    fill(rectColor);
    rect(95,85,600,600);
    console.log(rectAlpha);
  }
  
  if(output.length == 10){ //10字大組合
     del = int(random(0,9)); //行列中C10取1
     console.log(del);
     //noFill();
      
    //case_10 = int(random(1,5));
    case_10 = 1;
    
      switch(case_10){
          
        case 1: //左至右
        
          for(var i = 0; i < 10; i++){
            
      fill('#c6cdd7');
      noStroke();
      rect(textX+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+i*xSpace,textY+del*ySpace);
     }
          
          break;
        
          case 2: //上至下
          for(var i = 0; i < 10; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+i*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textY+del*ySpace,textX+i*xSpace);
     }
          break;
          
          case 3: //右斜
          for(var i=0; i<10; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*i-5,textY+ySpace*i-15,20,20);
            fill(0);
            text(output.charAt(i),textX+xSpace*i,textY+ySpace*i);
            
          }
          
          break;
          
          case 4: //左斜
          for(var i=0; i<10; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*9-i*xSpace-5,textY+ySpace*i-15,20,20);
            fill(0);
            text(output.charAt(i),textX+xSpace*9-i*xSpace,textY+ySpace*i);
            
          }
          break;
          
      
          
      }
    
  }else if(output.length == 9){ //9字大集合
    
       del = int(random(0,9)); //行列中C10取1
       seedX = int(random(0,2)); //9字從1,2位開始
       case_9 = int(random(1,3));
      console.log(case_9+','+del+","+seedX);
    
    switch(case_9){
        
      case 1: //左至右
        for(var i = 0; i < 9; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
        
        case 2: //上至下
          for(var i = 0; i < 9; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+seedX*xSpace+i*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+del*xSpace,textY+seedX*xSpace+i*ySpace);
    }
        break;
       
       
       
    
    }
  }else if(output.length == 8){ //8字大集合
    
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,3)); //8字從1-3位開始
    seedY = int(random(0,3));
    case_8 = int(random(1,4));
    //case_8 = 3;
    console.log(case_8+','+del+","+seedX+","+seedY);
    
    switch(case_8){
        
      case 1: //左右
       for(var i = 0; i < 8; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
      
        case 2:
        for(var i = 0; i < 8; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+seedX*xSpace+i*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+del*xSpace,textY+seedX*xSpace+i*ySpace);
    }
        break;
        
        case 3: //右斜
        for(var i=0; i<8; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*i+seedX*xSpace-5,textY+ySpace*i+seedY*ySpace-15,20,20);
            fill(0);
            text(output.charAt(i),textX+xSpace*i+seedX*xSpace,textY+ySpace*i+seedY*ySpace);
            
          }
          
          break;
        
    }
    
    
  }else if(output.length == 7){
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,4)); //7字從1-4位開始
    seedY = int(random(0,4));
    case_7 = int(random(1,3));
    //case_7 = 2;
    console.log(case_7+','+del+","+seedX+","+seedY);
    
    switch(case_7){
        
      case 1: //左右
        for(var i = 0; i < 7; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
        
        case 2: //左斜
        for(var i=0; i<7; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*(9-seedX)-i*xSpace-5,textY+ySpace*seedY+ySpace*i-15,20,20);
            fill(0);
            text(output.charAt(i),textX+xSpace*(9-seedX)-i*xSpace,textY+ySpace*seedY+ySpace*i);
            
          }
          break;
        
    }
  }else if(output.length == 6){
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,5)); //6字從1-5位開始
    seedY = int(random(0,5));
    case_6 = int(random(1,3));
    //case_6 = 2;
    console.log(case_6+','+del+","+seedX+","+seedY);
    
    switch(case_6){
      case 1: //上下
        for(var i = 0; i < 6; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+seedX*xSpace+i*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+del*xSpace,textY+seedX*xSpace+i*ySpace);
    }
        break;
        
        case 2: //右斜
        for(var i=0; i<6; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*i+seedX*xSpace-5,textY+ySpace*i+seedY*ySpace-15,20,20);
            fill(0);
            text(output.charAt(i),textX+xSpace*i+seedX*xSpace,textY+ySpace*i+seedY*ySpace);
            
          }
          
          break;
        
        
        
    }
    
  }else if(output.length == 5){
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,6)); //5字從1-6位開始
    seedY = int(random(0,6));
    case_5 = int(random(1,3));
    //case_5 = 2;
    console.log(case_5+','+del+","+seedX+","+seedY);
    
    switch(case_5){
        case 1: //左右
        for(var i = 0; i < 5; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
        
        case 2: //上下
        for(var i = 0; i < 5; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+del*xSpace-5,textY+seedX*xSpace+i*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+del*xSpace,textY+seedX*xSpace+i*ySpace);
    }
        break;
        
    }
    
  }else if(output.length == 4){
    del = int(random(0,9)); //行列中C10取1
    seedX = int(random(0,7)); //4字從1-7位開始
    seedY = int(random(0,7));
    case_4 = int(random(1,3));
    //case_4 = 2;
    console.log(case_4+','+del+","+seedX+","+seedY);
    
    switch(case_4){
      case 1: //右斜
        for(var i=0; i<4; i++){
            fill('#c6cdd7');
            noStroke();
            rect(textX+xSpace*i+seedX*xSpace-5,textY+ySpace*i+seedY*ySpace-15,20,20);
            fill(0);
            text(output.charAt(i),textX+xSpace*i+seedX*xSpace,textY+ySpace*i+seedY*ySpace);
            
          }
          
          break;
          
          case 2:
        for(var i = 0; i < 4; i++){
      fill('#c6cdd7');
      noStroke();
      rect(textX+seedX*xSpace+i*xSpace-5,textY+del*ySpace-15,20,20);
      fill(0);
      text(output.charAt(i),textX+seedX*xSpace+i*xSpace,textY+del*ySpace);
         }
        break;
    }
  }
  
  
  
}



