var elements = document.querySelectorAll('.heading');

/////// --- ANIMATION TIMER CONTROL PARAMETERS ------------ ///

// Central Image
var imagefadeTime = 1200;
var imageTranslateY = 30;
var imageShrinkTime = 900;
var imageChangeTime = 1250;

//Left Logo 
var texttime  = 800;
var textLeftX = 60;
var textRightX = 60;


// Animation Time Line Sequence 
let parameters = {};
var yaliTimeline = anime.timeline(
    {
        loop:true, autoplay: true
    }
);

var ImageObject = document.querySelector('#mainImage_inner');
var LeftText = document.querySelector('#leftHeading');
var rightText = document.querySelector('#rightHeading');


yaliTimeline
// --------------------------------  Frame - 1 --------------------------------- //
.add({
    targets:  '#mainImage',
    translateY: [imageTranslateY,0],
    opacity: [0.2,1],
    direction: "normal",
    duration: imagefadeTime,
    autoplay: true,
    easing: "easeOutBack"

})

.add({
    targets:  '#leftHeading',
    translateX: [textLeftX,0],
    opacity: [0.0,1],
    direction: "normal",
    duration: texttime,
    autoplay: true,
    easing: "easeOutSine"
})

.add({
    targets:  '#rightHeading',
    translateX: [-textLeftX,0],
    opacity: [0.0,1],
    direction: "normal",
    duration: texttime,
    autoplay: true,
    easing: "easeOutSine"
})

// Change the Image Source

// .add({
//     targets:  '#mainImage',
//     opacity: [1,0.5],
//     scale: [1,0.4],
//     direction: "normal",
//     duration: imageShrinkTime,
//     autoplay: true,
//     easing: "easeInExpo"
// })

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/Logo_01.png"
    },
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/Logo_02.png"
    },
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/Logo_03.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})


.add({
    targets:  '.mainelem',
    opacity: [1,0],
    duration: 800,
    autoplay: true,
    easing: "easeInExpo"
})


///////  --- END OF FRAME - 1 //////////////////////////////////////////////



/////////// ---- START OF FRAME 2 ------------- ////////////////////////////

//---------------- Change Background Color  -----------------------// 

.add({
    targets:  'body',
    backgroundColor: ["#131313", "#8C9748"],
    direction: "normal",
    duration: 500,
    autoplay: true,
    easing: "easeOutBack"
})


// Change Image Source
.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_main.png"
    },
    easing: "easeInExpo",
    translateY: [imageTranslateY,0],
    opacity: [0.2,1],
    scale: 1,
    direction: "normal",
    duration: imagefadeTime,
    autoplay: true,
    easing: "easeOutBack"

})


// Image Appears
.add({
    targets:  '#mainImage',



})


// Change and appear left text 
.add({
    targets:  '#leftHeading',
    translateX: [textLeftX,0],
    update: function() { LeftText.innerHTML = "Architec" },
    opacity: [0.0,1],
    direction: "normal",
    duration: texttime,
    autoplay: true,
    easing: "easeOutSine"
})

.add({
    targets:  '#rightHeading',
    translateX: [-textLeftX,0],
    update: function() { rightText.innerHTML = "ture" },
    opacity: [0.0,1],
    direction: "normal",
    duration: texttime,
    autoplay: true,
    easing: "easeOutSine"
})



.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_01.png"
    },
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_02.png"
    },
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_03.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_04.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_05.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})


.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_06.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_07.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})


.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_08.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})


.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/AR_09.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})


.add({
    targets:  '.mainelem',
    opacity: [1,0],
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})


/////////// ---- START OF FRAME 3 ------------- ////////////////////////////

//---------------- Change Background Color  -----------------------// 

.add({
    targets:  'body',
    backgroundColor: ["#8C9748", "#E62819"],
    direction: "normal",
    duration: 500,
    autoplay: true,
    easing: "easeOutBack"
})


// Change Image Source
.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/BR_main.png"
    },
    easing: "easeInExpo",
    translateY: [imageTranslateY,0],
    opacity: [0.2,1],
    scale: 1,
    direction: "normal",
    duration: imagefadeTime,
    autoplay: true,
    easing: "easeOutBack"

})


// Image Appears
.add({
    targets:  '#mainImage',



})


// Change and appear left text 
.add({
    targets:  '#leftHeading',
    translateX: [textLeftX,0],
    update: function() { LeftText.innerHTML = "Brand" },
    opacity: [0.0,1],
    direction: "normal",
    duration: texttime,
    autoplay: true,
    easing: "easeOutSine"
})

.add({
    targets:  '#rightHeading',
    translateX: [-textLeftX,0],
    update: function() { rightText.innerHTML = "ing" },
    opacity: [0.0,1],
    direction: "normal",
    duration: texttime,
    autoplay: true,
    easing: "easeOutSine"
})



.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/BR_01.png"
    },
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/BR_02.png"
    },
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/BR_03.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/BR_04.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/BR_05.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})


.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/BR_06.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/BR_07.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})





.add({
    targets:  '.mainelem',
    opacity: [1,0],
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})




/////////// ---- START OF FRAME 3 ------------- ////////////////////////////

//---------------- Change Background Color  -----------------------// 

.add({
    targets:  'body',
    backgroundColor: ["#E62819", "#FF6A04"],
    direction: "normal",
    duration: 500,
    autoplay: true,
    easing: "easeOutBack"
})


// Change Image Source
.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/UI_Main.png"
    },
    easing: "easeInExpo",
    translateY: [imageTranslateY,0],
    opacity: [0.2,1],
    scale: 1,
    direction: "normal",
    duration: imagefadeTime,
    autoplay: true,
    easing: "easeOutBack"

})


// Image Appears
.add({
    targets:  '#mainImage',



})


// Change and appear left text 
.add({
    targets:  '#leftHeading',
    translateX: [textLeftX,0],
    update: function() { LeftText.innerHTML = "UX" },
    opacity: [0.0,1],
    direction: "normal",
    duration: texttime,
    autoplay: true,
    easing: "easeOutSine"
})

.add({
    targets:  '#rightHeading',
    translateX: [-textLeftX,0],
    update: function() { rightText.innerHTML = "UI" },
    opacity: [0.0,1],
    direction: "normal",
    duration: texttime,
    autoplay: true,
    easing: "easeOutSine"
})



.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/UI_01.png"
    },
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/UI_02.png"
    },
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/UI_03.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/UI_04.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})

.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/UI_05.png"
    },
    duration: imageChangeTime-10,
    autoplay: true,
    easing: "easeInExpo"
})







.add({
    targets:  '.mainelem',
    opacity: [1,0],
    duration: imageChangeTime,
    autoplay: true,
    easing: "easeInExpo"
})

/// -----------------------  SET UP FOR FRAME 1 --------------------------- 


.add({
    targets:  'body',
    backgroundColor: ["#FF6A04" , "#131313"],
    direction: "normal",
    duration: 500,
    autoplay: true,
    easing: "easeOutBack"
})


// Change Image Source
.add({
    targets:  '#mainImage_inner',
    update: function()
    {
        ImageObject.src = "./assets/Logo_Main.png"
    },
    duration: 10,
    autoplay: true,
})


// Change and appear left text 
.add({
    targets:  '#leftHeading',
    update: function() { LeftText.innerHTML = "Coming" },
    duration: 10,

})

.add({
    targets:  '#rightHeading',
    update: function() { rightText.innerHTML = "soon" },
    duration: 10
})





;
