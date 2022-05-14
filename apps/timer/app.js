Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);
var counter = 0;

function updateScreen() {
  g.clearRect(0, 250, 250, 150);
  g.setColor(0xFFFF);
  g.setFont("Vector",40).setFontAlign(0,0);

  g.drawString(Math.floor(counter), g.getWidth()/2, 200);
  g.drawString('-', 45, 200);
  g.drawString('-', 45, 200);

  g.drawString('+', 190, 200);

}



setWatch(() => {
  g.clear();

  counter += 1;
  if(counter==33){
Bangle.buzz(200, 1);
 g.drawString('Astaghfir', 125, 50);
 g.drawString('Allah', 125, 100);

  }
  if(counter==66){
Bangle.buzz(200, 1);
 g.drawString('Subhan', 125, 50);
 g.drawString('Allah', 125, 100);

  }
  if(counter==99){
Bangle.buzz(200, 1);
 g.drawString('Allah', 125, 100);
 g.drawString('Akbar', 125, 50);


  }


  if(counter==101){

    counter=0;
  }
  updateScreen();
}, BTN1, {repeat:true});


setWatch(() => {
  counter -= 1;
  g.clear();
  if(counter==-1){
    counter=0;}
  updateScreen();
}, BTN3, {repeat:true});


setWatch(() => {
  g.clear();
  counter = 0;
  updateScreen();
}, BTN2, {repeat:true});

g.clear(1).setFont("6x8");


Bangle.loadWidgets();
Bangle.drawWidgets();
updateScreen();
