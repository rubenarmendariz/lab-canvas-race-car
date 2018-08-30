window.onload = function() {

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var canvas = document.getElementById('road');
  var ctx = canvas.getContext('2d');
  var car = {
    x: 225,
    y:500,
    width:80,
    height:150
  
  }
    
 //functions move
 moveLeft() {
   car.x -= 4

  }

  moveRight() {
   car.x +=1
  }

  function startGame() {
    function road() {
      
      ctx.fillStyle = "grey";
      ctx.fillRect(0, 0, 500, 700);
      
      
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 30, 700);
      
      ctx.fillStyle = "gren";
      ctx.fillRect(470, 1, 30, 700);
      
      ctx.fillStyle = "white";
      ctx.fillRect(40, 1, 12, 700);
      
      ctx.fillStyle = "white";
      ctx.fillRect(448, 1, 12, 700);
      
      ctx.beginPath() 
      ctx.moveTo(250, 0);
      ctx.lineTo(250, 700);
      ctx.lineWidth = 4;
      ctx.setLineDash([18,20]); 
      ctx.lineHeight=700;
      ctx.strokeStyle= "white"
      ctx.stroke();
    }
    
    var car = new Image();
    
    car.onload = function() {
      ctx.drawImage(car, 225, 500,80,150);
    };
    car.src = "images/car.png";
    road();
    
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        
        case 37: car.moveLeft();  console.log('left',  car); break;
        case 39: car.moveRight(); console.log('right', car); break;
        
      }
    };
    
  }
  
  //document.onkeydown = function(e) {
    //switch (e.keyCode) {
      
      //   case 37: car.moveLeft();  console.log('left',  car); break;
      //   case 39: car.moveRight(); console.log('right', car); break;
      //} 
      
}