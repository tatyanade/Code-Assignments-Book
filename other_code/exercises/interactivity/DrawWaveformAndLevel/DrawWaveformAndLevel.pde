/**
  * This sketch demonstrates how to use the AudioBuffer objects of an AudioPlayer 
  * to draw the waveform and level of the sound as it is playing. These same 
  * AudioBuffer objects are available on AudioInput, AudioOuput, and AudioSample,
  * so they same drawing code will work in those cases.
  *
  */

import ddf.minim.*;

Minim minim;
AudioPlayer groove;
float alpha;
void setup()
{
  size(300, 300);

  minim = new Minim(this);
  groove = minim.loadFile("beat.aiff", 1024);
  groove.loop();
}

void draw()
{
  background(180, 157, 27);
  strokeWeight(3);
  
  
  // draw the waveforms
  // the values returned by left.get() and right.get() will be between -1 and 1,
  // so we need to scale them up to see the waveform
  // note that if the file is MONO, left.get() and right.get() will return the same value
  for(int i = 0; i < groove.bufferSize() - 1; i=i+5)
  {
    float x1 = map( i, 0, groove.bufferSize(), 0, width );
    float x2 = map( i+1, 0, groove.bufferSize(), 0, width );
    
    //line( x1, (50 + groove.left.get(i)*50)*2, x2, (50 + groove.left.get(i+1)*50)*2 );
   stroke(252,205,229,alpha);
   println(alpha);
   
   alpha=groove.left.get(i)*100+120;
   alpha = map(alpha,60,180,100,255);
   
    line(i,50 + groove.left.get(i)*100+100,i,50 + height);
    
    
    //line( x1, (150 + groove.right.get(i)*50)*2-100, x2, (150 + groove.right.get(i+1)*50)*2-100 );
  }
  
  noStroke();
  fill( 255, 128 );
  
  // the value returned by the level method is the RMS (root-mean-square) 
  // value of the current buffer of audio.
  // see: http://en.wikipedia.org/wiki/Root_mean_square
 // rect( 0, 0, groove.left.level()*width, 100 );
  ///rect( 0, 100, groove.right.level()*width, 100 );
}

void keyPressed(){
 saveFrame(); 
}