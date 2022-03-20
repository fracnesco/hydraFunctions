fbzoom1 = () => a.setScale(14);a.setBins(1);a.setCutoff(18);a.setSmooth(0.35);voronoi(0.1,2,2).blend(src(s0),0.95).brightness(()=>(1-a.fft[0])*0.18).blend(src(o0).scale(()=>a.fft[0]*0.003+1+Math.random()*0.001,()=>a.fft[0]*0.01+1+Math.random()*0.001),0.989).out()

fbout1 = () =>
a.setScale(14);a.setBins(1);a.setCutoff(18);a.setSmooth(0.35);
src(s0)
.blend (src(o0).scale(()=>a.fft[0]*0.03+1,()=>a.fft[0]*0.03+1),()=>a.fft[0]*0.6+0.3)
.modulateScale(
  voronoi(2,()=>a.fft[0]*0.5+0.5,1),1.01)
.luma(()=>1-a.fft[0]*5)
.out()


fbzoom1()

ciao = ()=> osc().out()

solid().out()
