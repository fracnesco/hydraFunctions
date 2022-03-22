a.setScale(14)
a.setBins(1) //set the number of bands
a.setCutoff(18)
a.setSmooth(0.35) // set a smooth factor for audioreactive
av = () => a.fft[0]
nav = () => 1-a.fft[0]
r1 = () => Math.random()
mx = () => mouse.x
my = () => mouse.y
(function(){Math.clamp=function(a,b,c){return Math.max(b,Math.min(c,a));}})();
s1.initCam()
s0.initScreen()
