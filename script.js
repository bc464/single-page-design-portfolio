let slider = tns({
    "container": "#lazyload",
    "item": 3,
    slideBy: "page",
    "mouseDrag": true,
    prevButton: ".prev",
    nextButton: ".next",
    hasControls: false,
    "swipeAngle": false,
    "speed": 400,

    responsive: {
        2560: {
            items: 5,
        },
        1440: {
            items:3,
            gutter: 300,
        },
        1350: {
            items:2,
            gutter: -230,
        },
        1024: {
            items: 3,
        },
        768: {
            items: 2,
        },
        420: {
            items: 1,
        },
        375: {
            items: 1,
        }

    }
})