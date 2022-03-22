paint1 = () =>
src(o0)
.blend(src(s0),0.1)
.modulate(osc(300,0,1).kaleid(2).modulate(noise(20,0.1)).add(solid(1,1),-1),[0.001,0,0,0].smooth(1.9))
.modulateScale(noise(4), [0,0.005,0].smooth(1.9))
.modulateHue(o0,[100].smooth(1.9))
.scale(()=>a.fft[0]*(0.003*0.2)+1.001)
.contrast(1.001)
.out()

paint2 = () =>
shape(4,()=>a.fft[0]*0.4+0.0,()=>a.fft[0]*0.2+0.)
.color(0.2,0.1,0.7).scale(1,0.6)
.scrollX(()=>a.fft[0]*0.15)
.add(shape(4,()=>a.fft[0]*0.8,()=>a.fft[0]*0)
      .color(0.2,0.1,0.7)
      .scale(1,0.6)
      .scrollX(()=>a.fft[0]*(-0.15)),1
    )
.add(
src(o0).scale(0.9,0.9).shift(0.002,0.002,0.002),1)
.luma(()=>a.fft[0]*0.1)
.blend(src(s0),()=>a.fft[0]*0.5)
.blend(src(o0).modulateRotate(o0,0.02).modulateHue(o0,[10,20,30]),()=>1-(a.fft[0]*0.2))//levare per quadrati
.scale(()=>a.fft[0]*0.045+1,1)
.out(o0)

paint3 = () =>
src(o0)
.blend(src(s0).modulate(noise().add(solid(1,1,1),0.5),-0.01),[0.001,0.001,0.001,0.001,0.01].smooth(0.1)) // swith blend, add
.scrollX(0.001)
.modulate (noise(1)
.add(noiserg(100).mult(solid(0.1,0.1)))
.modulateScale(osc(0.02,0.01,1).kaleid()).add(solid(1,1),-0.5),0.00125)
// .layer(src(o0).pixelate([1080,1080,1080,1080,1080,1080,1080,1080,1080,1080,1080,1080,1080,1080,1080,1080,500,1080,180,1080].fast(3).smooth(0.9),1920) )
.contrast(() => a.fft[0]*0.001 + 1.001) // breaks pixels
.colorama(0.0001)
.modulateHue(o0,[5,10].smooth(0.5))
.out()

paint4 = () =>
src(o0)
.modulateScale(src(s0).mult(gradient()), ()=>a.fft[0] * (-0.1)-0.03)
.scrollX(1.0000001)
.colorama(()=>a.fft[0]*0.0001 +0.002) // activation
.modulateHue(src(o0),10)
.out()

paint1()

paint2()

paint3()

paint4()
