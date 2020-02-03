var color=["#93bcea","#3fabc5","#50ab42","#cd5c90","#d17f35","#8165cc"];
var bolamono=document.getElementsByClassName('bola mono');
for (var k = 0; k < bolamono.length; k++) {
    bolamono[k].style.backgroundColor=color[k];
}
var boladark=document.getElementsByClassName('bola dark');
for (var k = 0; k < bolamono.length; k++) {
    boladark[k].style.backgroundColor=color[k];
}
var bolaartic=document.getElementsByClassName('bola artic');
for (var k = 0; k < bolamono.length; k++) {
    bolaartic[k].style.backgroundColor=color[k];
}
var grane=document.getElementsByClassName('grane');
var grand=document.getElementsByClassName('grand');
var bolamono=document.getElementsByClassName('bola mono');
var boladark=document.getElementsByClassName('bola dark');
var bolaartic=document.getElementsByClassName('bola artic');
var esdark=document.getElementsByClassName('esquerra dark');
var dedark=document.getElementsByClassName('dreta dark');
var esartic=document.getElementsByClassName('esquerra artic');
var deartic=document.getElementsByClassName('dreta artic');
var slider=document.getElementsByClassName('slider');
//for (var i= 0; i < bola.length; i++) {
  //var bol="bol"+i;
  //bola[i].addEventListener('click',bol(i));
//}

bolamono[0].addEventListener('click',bolamono0);
bolamono[1].addEventListener('click',bolamono1);
bolamono[2].addEventListener('click',bolamono2);
bolamono[3].addEventListener('click',bolamono3);
bolamono[4].addEventListener('click',bolamono4);
bolamono[5].addEventListener('click',bolamono5);


boladark[0].addEventListener('click',boladark0);
boladark[1].addEventListener('click',boladark1);
boladark[2].addEventListener('click',boladark2);
boladark[3].addEventListener('click',boladark3);
boladark[4].addEventListener('click',boladark4);
boladark[5].addEventListener('click',boladark5);

bolaartic[0].addEventListener('click',bolaartic0);
bolaartic[1].addEventListener('click',bolaartic1);
bolaartic[2].addEventListener('click',bolaartic2);
bolaartic[3].addEventListener('click',bolaartic3);
bolaartic[4].addEventListener('click',bolaartic4);
bolaartic[5].addEventListener('click',bolaartic5);






document.getElementById('default').addEventListener('click',def);
function def() {
  document.getElementById('gran').style.backgroundColor="#cfd7e2";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor="#fff";
      grane[k].style.opacity="1";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor="#f0ffe2";
      grand[k].style.opacity="1";
  }
  document.getElementById('colors').style.display="none";
  document.getElementById('colors_dark').style.display="none";
  document.getElementById('colors_artic').style.display="none";
}
document.getElementById('mono').addEventListener('click',mono);
function mono() {
  slider[0].style.display="block";
  slider[1].style.display="none";
  slider[2].style.display="none";
  document.getElementById('colors').style.display="block";
  document.getElementById('colors_dark').style.display="none";
  document.getElementById('colors_artic').style.display="none";
  document.getElementById('gran').style.backgroundColor=color[0];
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor="#fff";
      grane[k].style.opacity="1";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor="#fff";
      //grand[k].style.filter="brightness(100)";
      grand[k].style.opacity="0.5";
  }

  //document.getElementById('grand').pseudoStyle("before").border="solid red 30px"
  //document.getElementById('grand').pseudoStyle("before","backgroundColor","red");
//var grand=getElementById('grand');
//grand.pseudoStyle("before","backgroundColor","red");

  //document.getElementById('grand').classList.add(''-before').backgroundColor="red";
}
document.getElementById('dark').addEventListener('click',dark);
function dark() {
  slider[0].style.display="none";
  slider[1].style.display="block";
  slider[2].style.display="none";
  document.getElementById('colors_dark').style.display="block";
  document.getElementById('colors').style.display="none";
  document.getElementById('colors_artic').style.display="none";
  esdark[0].style.backgroundColor=color[0];
  esdark[0].style.opacity="0.4";
  dedark[0].style.backgroundColor=color[0];
  dedark[0].style.opacity="0.8";
  document.getElementById('gran').style.backgroundColor="#5d6c81";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[0];
      grane[k].style.opacity="0.2";
      //grane[k].style.filter="brightness(2)";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[0];
      grand[k].style.opacity="1";
  }

  //document.getElementById('grane').style.backgroundColor="#748599";
  //document.getElementById('grand').style.backgroundColor="#83a7e5";
}
document.getElementById('artic').addEventListener('click',artic);
function artic() {
  slider[0].style.display="none";
  slider[1].style.display="none";
  slider[2].style.display="block";
  document.getElementById('colors_artic').style.display="block";
  document.getElementById('colors_dark').style.display="none";
  document.getElementById('colors').style.display="none";
  document.getElementById('gran').style.backgroundColor="#fff";

  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[0];
      grane[k].style.opacity="0.2";
      //grane[k].style.filter="brightness(2)";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[0];
      grand[k].style.opacity="1";
  }
  //document.getElementById('grane').style.backgroundColor="#e9eef4";
  //document.getElementById('grand').style.backgroundColor="#7caffe";
}

function bolamono0() {
  document.getElementById('gran').style.backgroundColor=color[0];
  document.getElementById('mono').style.backgroundColor=color[0];
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor="#fff";
      grane[k].style.opacity="1";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor="#fff";
      grand[k].style.opacity="0.5";
  }
}
function bolamono1() {
  document.getElementById('gran').style.backgroundColor=color[1];
  document.getElementById('mono').style.backgroundColor=color[1];
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor="#fff";
      grane[k].style.opacity="1";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor="#fff";
      grand[k].style.opacity="0.5";
  }
}
function bolamono2() {
  document.getElementById('gran').style.backgroundColor=color[2];
  document.getElementById('mono').style.backgroundColor=color[2];
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor="#fff";
      grane[k].style.opacity="1";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor="#fff";
      grand[k].style.opacity="0.5";
  }
}
function bolamono3() {
  document.getElementById('gran').style.backgroundColor=color[3];
  document.getElementById('mono').style.backgroundColor=color[3];
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor="#fff";
      grane[k].style.opacity="1";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor="#fff";
      grand[k].style.opacity="0.5";
  }
}
function bolamono4() {
  document.getElementById('gran').style.backgroundColor=color[4];
  document.getElementById('mono').style.backgroundColor=color[4];
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor="#fff";
      grane[k].style.opacity="1";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor="#fff";
      grand[k].style.opacity="0.5";
  }
}
function bolamono5() {
  document.getElementById('gran').style.backgroundColor=color[5];
  document.getElementById('mono').style.backgroundColor=color[5];
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor="#fff";
      grane[k].style.opacity="1";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor="#fff";
      grand[k].style.opacity="0.5";
  }
}



function boladark0() {
  esdark[0].style.backgroundColor=color[0];
  esdark[0].style.opacity="0.4";
  dedark[0].style.backgroundColor=color[0];
  dedark[0].style.opacity="0.8";
  document.getElementById('dark').style.backgroundColor="#5d6c81";
  document.getElementById('gran').style.backgroundColor="#5d6c81";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[0];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[0];
      grand[k].style.opacity="1";
  }
}
function boladark1() {
  esdark[0].style.backgroundColor=color[1];
  esdark[0].style.opacity="0.4";
  dedark[0].style.backgroundColor=color[1];
  dedark[0].style.opacity="0.8";
  document.getElementById('dark').style.backgroundColor="#5d6c81";
  document.getElementById('gran').style.backgroundColor="#5d6c81";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[1];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[1];
      grand[k].style.opacity="1";
  }
}
function boladark2() {
  esdark[0].style.backgroundColor=color[2];
  esdark[0].style.opacity="0.4";
  dedark[0].style.backgroundColor=color[2];
  dedark[0].style.opacity="0.8";
  document.getElementById('dark').style.backgroundColor="#5d6c81";
  document.getElementById('gran').style.backgroundColor="#5d6c81";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[2];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[2];
      grand[k].style.opacity="1";
  }
}
function boladark3() {
  esdark[0].style.backgroundColor=color[3];
  esdark[0].style.opacity="0.4";
  dedark[0].style.backgroundColor=color[3];
  dedark[0].style.opacity="0.8";
  document.getElementById('dark').style.backgroundColor="#5d6c81";
  document.getElementById('gran').style.backgroundColor="#5d6c81";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[3];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[3];
      grand[k].style.opacity="1";
  }
}
function boladark4() {
  esdark[0].style.backgroundColor=color[4];
  esdark[0].style.opacity="0.4";
  dedark[0].style.backgroundColor=color[4];
  dedark[0].style.opacity="0.8";
  document.getElementById('dark').style.backgroundColor="#5d6c81";
  document.getElementById('gran').style.backgroundColor="#5d6c81";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[4];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[4];
      grand[k].style.opacity="1";
  }
}
function boladark5() {
  esdark[0].style.backgroundColor=color[5];
  esdark[0].style.opacity="0.4";
  dedark[0].style.backgroundColor=color[5];
  dedark[0].style.opacity="0.8";
  document.getElementById('dark').style.backgroundColor="#5d6c81";
  document.getElementById('gran').style.backgroundColor="#5d6c81";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[5];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[5];
      grand[k].style.opacity="1";
  }
}
function bolaartic0() {
  esartic[0].style.backgroundColor=color[0];
  esartic[0].style.opacity="0.4";
  deartic[0].style.backgroundColor=color[0];
  deartic[0].style.opacity="0.8";
  document.getElementById('artic').style.backgroundColor="#fff";
  document.getElementById('gran').style.backgroundColor="#fff";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[0];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[0];
      grand[k].style.opacity="1";
  }
}
function bolaartic1() {
  esartic[0].style.backgroundColor=color[1];
  esartic[0].style.opacity="0.4";
  deartic[0].style.backgroundColor=color[1];
  deartic[0].style.opacity="0.8";
  document.getElementById('artic').style.backgroundColor="#fff";
  document.getElementById('gran').style.backgroundColor="#fff";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[1];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[1];
      grand[k].style.opacity="1";
  }
}
function bolaartic2() {
  esartic[0].style.backgroundColor=color[2];
  esartic[0].style.opacity="0.4";
  deartic[0].style.backgroundColor=color[2];
  deartic[0].style.opacity="0.8";
  document.getElementById('artic').style.backgroundColor="#fff";
  document.getElementById('gran').style.backgroundColor="#fff";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[2];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[2];
      grand[k].style.opacity="1";
  }
}
function bolaartic3() {
  esartic[0].style.backgroundColor=color[3];
  esartic[0].style.opacity="0.4";
  deartic[0].style.backgroundColor=color[3];
  deartic[0].style.opacity="0.8";
  document.getElementById('artic').style.backgroundColor="#fff";
  document.getElementById('gran').style.backgroundColor="#fff";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[3];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[3];
      grand[k].style.opacity="1";
  }
}
function bolaartic4() {
  esartic[0].style.backgroundColor=color[4];
  esartic[0].style.opacity="0.4";
  deartic[0].style.backgroundColor=color[4];
  deartic[0].style.opacity="0.8";
  document.getElementById('artic').style.backgroundColor="#fff";
  document.getElementById('gran').style.backgroundColor="#fff";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[4];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[4];
      grand[k].style.opacity="1";
  }
}
function bolaartic5() {
  esartic[0].style.backgroundColor=color[5];
  esartic[0].style.opacity="0.4";
  deartic[0].style.backgroundColor=color[5];
  deartic[0].style.opacity="0.8";
  document.getElementById('artic').style.backgroundColor="#fff";
  document.getElementById('gran').style.backgroundColor="#fff";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=color[5];
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=color[5];
      grand[k].style.opacity="1";
  }
}


window.addEventListener("load", startup);
function startup() {
  var monocolor=document.getElementById('monocolor');
  monocolor.addEventListener("input", actuamono);
  //monocolor.addEventListener("change", actualizarTodo, false);
  //monocolor.select();
  var darkcolor=document.getElementById('darkcolor');
  darkcolor.addEventListener("input", actuadark);
  //monocolor.addEventListener("change", actualizarTodo, false);
  //darkcolor.select();
  var articolor=document.getElementById('articolor');
  articolor.addEventListener("input", actuartic);
  //monocolor.addEventListener("change", actualizarTodo, false);
  //articolor.select();
}
function actuamono() {
document.getElementById('gran').style.backgroundColor=monocolor.value;
document.getElementById('mono').style.backgroundColor=monocolor.value;
}
function actuadark() {
  esdark[0].style.backgroundColor=darkcolor.value;
  esdark[0].style.opacity="0.4";
  dedark[0].style.backgroundColor=darkcolor.value;
  dedark[0].style.opacity="0.8";
for (var k = 0; k < grane.length; k++) {
    grane[k].style.backgroundColor=darkcolor.value;
    grane[k].style.opacity="0.2";
    //grane[k].style.filter="brightness(2)";
}
for (var k = 0; k < grand.length; k++) {
    grand[k].style.backgroundColor=darkcolor.value;
    grand[k].style.opacity="1";
}
}
function actuartic() {
  esartic[0].style.backgroundColor=articolor.value;
  esartic[0].style.opacity="0.4";
  deartic[0].style.backgroundColor=articolor.value;
  deartic[0].style.opacity="0.8";
  for (var k = 0; k < grane.length; k++) {
      grane[k].style.backgroundColor=articolor.value;
      grane[k].style.opacity="0.2";
  }
  for (var k = 0; k < grand.length; k++) {
      grand[k].style.backgroundColor=articolor.value;
      grand[k].style.opacity="1";
  }
}
