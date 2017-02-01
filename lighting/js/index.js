/* Pen by DIACO : twitter.com/Diaco_ml || codepen.io/MAW
powered by GSAP : http://www.greensock.com/
*/

var DOC=document, F=0 , 
    l0=DOC.getElementById('lightning'),
    l1=DOC.getElementById('lightning1'),
    l2=DOC.getElementById('lightning2'),
    bl=DOC.getElementById('blob'),
    lNoise=DOC.createElement('audio'),
    TwL=TweenLite , M=Math ; 
lNoise.src = 'http://www.freesound.org/data/previews/170/170612_1015240-lq.mp3'; lNoise.volume=.9; 
DOC.getElementById('myLamp').addEventListener('click',POn);
function POn(){
  TwL.set('#lightningG',{opacity:1});
  F=1;  lNoise.currentTime=0.4; lNoise.play();  T();
  TwL.delayedCall(2.2*M.random(),POff);
};

function POff(){  
  F=0;  
  lNoise.pause(); 
  TwL.to('#lightningG',0.2,{opacity:0}); 
  TwL.to('#text',0.5,{color:'rgba(0,145,145,0.2)'});
  TwL.to(bl,0.3,{fill:"hsla(190,100%,0%,0.5)"});
};

function T(){
  if(!F){return false};
  var L=106,C=R(3,11),PC=L/C,A=[],D=4.5,NP='M',S=R(1,2)*0.01,B=R(-2,5),RF=0.4;
  for (var i=0;i<C;i++){if(i<(C/2)){A.push([i*PC,R(-D,D)*i])}else{ A.push( [i*PC,R(-D,D)*(C-i)])}};
  for(var i=0;i<C;i++){
    if(i!=0 && i!=C-1){
    var P=f(A[i-1],A[i],RF) , p=f(A[i],A[i+1],1-RF);
    NP+=' L'+P[0]+','+P[1];
    NP+=' Q'+A[i][0]+','+A[i][1];
    NP+=' '+p[0]+','+p[1];
    }else if(i==C-1){NP+=' T'+L+','+0}else{NP+=" "+A[i][0]+','+A[i][1]}
  };
  At(l0,"stroke-width",B+12);  At(l1,"stroke-width",B+6);  At(l2,"stroke-width",B); 
  TwL.to(bl,S,{fill:"hsla(190,100%,"+M.random()*12+"%,0.5)"});
  TwL.to('#text',S,{color:'rgba(0,145,145,'+M.random()+')'});
  TwL.to([l0,l1],S,{morphSVG:{d:NP}});
  TwL.to(l2,S,{morphSVG:{d:NP},delay:S,onComplete:T});
  function f(p,P,d){ return [(p[0]-P[0])*d+P[0],(p[1]-P[1])*d+P[1]]};
};
function At(el,a,v){el.setAttribute(a,v)};
function R(min,max){return M.round(min+M.random()*(max-min))};
TwL.set("#lightningG",{x:146,y:141});

// a Pen by DIACO : twitter.com/Diaco_ml || codepen.io/MAW