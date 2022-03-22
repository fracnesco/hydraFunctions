pix1 = () =>
// fps = Math.random() *7 + 7

a.setSmooth(0.8)
src(o0)
.blend(src(s0),()=>a.fft[0] * 0.4)
	.modulatePixelate(noise(3).pixelate(()=>a.fft[0] * 10 +10,()=>a.fft[0] * 10 + 10),[12,120].fast(0.1).smooth(0.9),[12,120].fast(0.09).smooth(0.9))
	.contrast(1.01)
	// .colorama(1.0001)
	.out()

moveBall = (speed=1,range=2, radius=1) =>
shape(100,0.1*radius)
.modulate( noise(0.004,speed*0.1).xr().add(noise(0.004,speed*0.12).xg()).mult(solid(range,range,range)) )


balls = () => moveBall(1,5,2).add(moveBall(0.9,3,5)).add(moveBall(0.93,4,3))

src(o0)
.modulate( noisecomplex().mult(balls().add(solid(1,1),0.2)), 0.003)
.out()

solid().out()

pix1()

fps = Math.random() *7 + 7


fps = 30


src(o0)
.add( src(s0).mult(src(s0).thresh(0).luma()),()=>a.fft[0] * 0.07 )
	.modulatePixelate( noise(3).pixelate(()=>a.fft[0] * 10 +10,()=>a.fft[0] * 10 + 10),[12,120].fast(0.1).smooth(0.9),[12,120].fast(0.09).smooth(0.9))
	.contrast(1.01)
	// .colorama(1.0001)
.modulateHue(src(o0).mask(osc(4,0.2,1)),()=>a.fft[0]*20+1)
.modulateScale(src(o0).mask(osc(4,0.2,1).invert()),()=>a.fft[0]*0.1)
	.out();

	noise()
	.layer( noise().mult(noise().thresh(0.5)).luma() ).out()
