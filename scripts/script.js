var black = "887788";
var synth = new Tone.Synth().toMaster();

/////// These functions are for turning Hex to RGB

function hexhash(hex) {return("#"+hex);};

function HextoRGB(hex){
  var R = parseInt((hex.slice(0,2)),16);
  var G = parseInt((hex.slice(2,4)),16);
  var B = parseInt((hex.slice(4,6)),16);
  console.log(R,G,B);
  return [R, G, B];
};

function RGBtoHex(RGB){
  hexR=(RGB[0]).toString(16);
  hexG=(RGB[1]).toString(16);
  hexB=(RGB[2]).toString(16);
  var hex = (hexR + hexG + hexB);
  console.log(hexR + hexG + hexB);
  return (hex);
};

/////// This is the mutate color function

function MutColor(RGB){
  R = (RGB[0] + 50);
  G = (RGB[1] + 50);
  B = (RGB[2] + 50);
  RGB = [R,G,B];
  console.log (hexhash(RGBtoHex(RGB)));
  return hexhash(RGBtoHex(RGB));
}

/////// This is the sound generator

function RGBtoFreq(RGB){
  Freq = RGB[0] + RGB[1] + RGB[2];
  synth.triggerAttackRelease(Freq, "8n")
}


$(document).ready(function() {
  $(".one").css("background-color", hexhash(black));
  console.log(RGBtoHex(HextoRGB(black)));
  var secondColor= (HextoRGB(black));
  $(".button").click(function(){

    $(".two").css("background-color", MutColor(secondColor));
  });
  $(".two").click(function(){
    RGBtoFreq(secondColor);
  })
});
