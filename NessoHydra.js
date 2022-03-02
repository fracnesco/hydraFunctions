//UTILITIES
// RANGE set the componentwise range of each channel
setFunction({
  name: 'range',
  type: 'color',
  inputs: [
    {
      type: 'float',
      name: 'RMin',
      default: '0.0'
    },
    {
      type: 'float',
      name: 'RMax',
      default: '1.0'
    },
    {
      type: 'float',
      name: 'GMin',
      default: '0.0'
    },
    {
      type: 'float',
      name: 'GMax',
      default: '1.0'
    },
    {
      type: 'float',
      name: 'BMin',
      default: '0.0'
    },
    {
      type: 'float',
      name: 'BMax',
      default: '1.0'
    },
    {
      type: 'float',
      name: 'AMin',
      default: '0.0'
    },
    {
      type: 'float',
      name: 'AMax',
      default: '1.0'
    },
  ],
  glsl:
`
vec4 min = vec4(RMin, GMin, BMin, AMin);
vec4 max = vec4(RMax, GMax, BMax, AMax);
return _c0 * (max - min) + min;
`
})
//CHANNEL SELECTION
//ISOLATE RED CHANNEL
setFunction({
  name: 'xr', // name that will be used to access function in js as well as in glsl
  type: 'color', // can be 'src', 'color', 'combine', 'combineCoords'. see below for more info
  inputs: [
    {
      name: `amount`,
      type: `float`,
      default: 1.0
    }
  ],
  // The above code generates the glsl function
  glsl:
  `vec4 r = vec4(amount,0,0,1);
  return  _c0 * r;
  `
},)
//ISOLATE GREEN CHANNEL
setFunction({
  name: 'xg', // name that will be used to access function in js as well as in glsl
  type: 'color', // can be 'src', 'color', 'combine', 'combineCoords'. see below for more info
  inputs: [
    {
      name: `amount`,
      type: `float`,
      default: 1.0
    }
  ],
  // The above code generates the glsl function
  glsl:
  `vec4 g = vec4(0,amount,0,1);
  return  _c0 * g;
  `
},)
//ISOLATE BLUE CHANNEL
setFunction({
  name: 'xb', // name that will be used to access function in js as well as in glsl
  type: 'color', // can be 'src', 'color', 'combine', 'combineCoords'. see below for more info
  inputs: [
    {
      name: `amount`,
      type: `float`,
      default: 1.0
    }
  ],
  // The above code generates the glsl function
  glsl:
  `vec4 b = vec4(0,0,amount,1);
  return  _c0 * b;
  `
},)
//COMPOSITING////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AVERAGE
setFunction({
  name: 'average', // name that will be used to access function in js as well as in glsl
  type: 'combine', // can be 'src', 'color', 'combine', 'combineCoords'. see below for more info
  inputs: [
    {
      name: `opacity`,
      type: `float`,
      default: 0.5
    }
  ],
  // The above code generates the glsl function
  glsl:
  `
  return ((_c0+_c1)/2.0)*opacity + _c0*(1.0-opacity);
  `
},)
//OVER
setFunction({
  name: 'over', // name that will be used to access function in js as well as in glsl
  type: 'combine', // can be 'src', 'color', 'combine', 'combineCoords'. see below for more info
  inputs: [],
  // The above code generates the glsl function
  glsl:
  `
  return  vec4((_c0.rgb+_c1.rgb)*0.5,_c0.a);
  `
},)
//TEXTURE CREATION /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
noiserg = (scale=10)=> noise(scale).color(1,0,0).add(noise(scale,0.11).color(0,1))
noisecomplex = ()=> noise().color(1,0,0).add(noise(10,0.11).color(0,1,0)).blend(noise(2).color(1,0.5,0).add(noise(2.1,0.1011).color(0.5,1,0)),0.3).blend(noise(100,0.99).color(1,0.5,0).add(noise(100,0.101).color(0.5,1)),0.1);
