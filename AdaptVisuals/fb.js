fbzoom1 = () =>
// a.setScale(14);a.setBins(1);a.setCutoff(18);a.setSmooth(0.35); s0.initScreen(); // this stops the function to be evaluated
voronoi(0.1,2,2)
.blend(src(s0),0.95).brightness(()=>(1-a.fft[0])*0.18)
.blend(src(o0).scale(()=>a.fft[0]*0.003+1+Math.random()*0.001,()=>a.fft[0]*0.01+1+Math.random()*0.001),0.989)
.out();
fbout1 = () =>
// a.setScale(14);a.setBins(1);a.setCutoff(18);a.setSmooth(0.35); s0.initScreen();
src(s0)
.blend (src(o0).scale(()=>a.fft[0]*0.03+1,()=>a.fft[0]*0.03+1),()=>a.fft[0]*0.6+0.3)
.modulateScale(
  voronoi(2,()=>a.fft[0]*0.5+0.5,1),1.01)
.luma(()=>1-a.fft[0]*5)
.out()
fbmove1 = () =>
src(s0)
.colorama(
  ()=>a.fft[0]*0.00000001+0.00000003)
.blend(src(s0).scale(0.9,0.9)
        .scrollX(()=>a.fft[0]*0.085)
        .scrollY(()=>a.fft[0]*0.025)
        ,0.5)
.luma( () => 0.7-a.fft[0]*1.5)
.out();
fbpixel1 = () =>
src(s0)
.blend(src(s0).pixelate([10,1080,32,7,80,90].smooth(0.2),[120,2,1920,180,17].smooth([0.1])))
.modulateScale(voronoi([2,0,0,0,0,0,0,0,0,0,0],()=>a.fft[0]*0.5+0.5,1),[1,2,3,1,2,1,2])
.scrollX(0,[0.1,-0.1,0,0,-1,0.5,0.1,-0.1,0.1,-0.1])
.scrollY(0,[0.1,0,0,0,-1,0.5,-0.1,0.7,-0.13,-0.1,0,-0.4])
.luma( () => 0.7-a.fft[0]*1.5)
.out();
fbpixel2 = () =>
// a.setSmooth(0.8)
src(o0)
.blend(src(s0),()=>a.fft[0] * 0.4)
	.modulatePixelate(noise(3).pixelate(()=>a.fft[0] * 10 +10,()=>a.fft[0] * 10 + 10),[12,120].fast(0.1).smooth(0.9),[12,120].fast(0.09).smooth(0.9))
	.contrast(1.01)
	// .colorama(1.0001)
	.out();
fbcomp1 = () =>
src(s0)
.mult(shape(4,0.8,0.32)
.scale(1,0.5)
.scrollX([-0.24,0.24].ease(1))
.scrollY([-0.24,0.24].smooth(1)))
.scale(()=>(a.fft[0]*(-0.1)+1),()=>(a.fft[0]*(-0.1)+1))
.add(
	src(s0)
	.mult(shape(4,0.8,0.32)
	 .scale(1,0.5)
	 .scrollX([+0.24,-0.24].ease(1))
	 .scrollY([+0.24,-0.24].smooth(1)))
	 .scale(()=>(a.fft[0]*(+0.07)+1),()=>(a.fft[0]*(+0.3)+1))
)
.blend(src(o0).colorama(0.00001),()=>a.fft[0]*0.25)
.out()
moveBall = (speed=1,range=2, radius=1) =>
shape(100,0.1*radius)
.modulate( noise(0.004,speed*0.1).xr().add(noise(0.004,speed*0.12).xg()).mult(solid(range,range,range)));
balls321 = () => moveBall(1,5,2).add(moveBall(0.9,3,5)).add(moveBall(0.93,4,3));
brushes = ()=>
src(o0)
.modulate( noisecomplex().mult(balls321().add(solid(1,1),0.2)), 0.003)
.out()



fbout1()

fbzoom1()

fbmove1()

fbpixel1()

fbpixel2()

fbcomp1()

brushes()

solid().out()
