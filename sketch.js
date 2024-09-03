function setup () {
    createCanvas (600, 600);
    background("blue")
  
  }
  
  function draw() {
    stroke("purple");
    fill("#9C27B0")
  
  
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
  }