// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = new fabric.Canvas('canvas');
//     const image = document.getElementById('file');
//     const brightness = document.getElementById('brightness');
//     const contrast = document.getElementById('contrast');
//     const Saturation = document.getElementById('Saturation');
//     const Blur = document.getElementById('Blur');
//     const Hue = document.getElementById('Hue');
//     const Shadow = document.getElementById('Shadow');
//     const explore = document.getElementById('explore');
//     const download = document.getElementById('download');

//     function handleImage (e) {
//         const file = e.target.files[4] //[image0, image1, image2, image3]
//         if(file){
//             //const reader = new fabric.Image(file);
//             console.log(file);
//         }
//     }
// })

// function editRange () {
//     const bright = document.getElementById('bright')
//     const con = document.getElementById('con')
//     const sat = document.getElementById('sat')
//     const blur = document.getElementById('blur')
//     const hu = document.getElementById('hu')
//     const sha = document.getElementById('sha')

// }

var brightnessClick = false;
function brightnessHandler () {
    const bright = document.getElementById('bright');
    brightnessClick = !brightnessClick;
    if(brightnessClick){
        brightnessInput.style.display = "block"
    }
    else{
        brightnessInput.style.display = "none"

    }

}
