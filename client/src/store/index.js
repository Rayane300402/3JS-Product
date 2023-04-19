import {proxy} from 'valtio';

const state = proxy({
    // are we in the default page or not
    intro: true,
    color: '#EFBD48',
    // are we displaying logo on shirt
    isLogoTexture: true,
    isFullTexture: false,
    // init shirt logo & shirt look
    logoDecal:'./threejs.png',
    fullDecal: './threejs.png'
})

export default state;