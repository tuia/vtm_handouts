jQuery(document).ready(function ($) {

    var sliderContainer = $("#slider"),
        slider = sliderContainer.find("ul"),
        slides = sliderContainer.find("li"),
        firstSlide = slider.find("li:first-child"),
        lastSlide = slider.find("li:last-child"),
        slideCount = slides.length,
        slideWidth = slides.width(),
        sliderUlWidth = slideCount * slideWidth;

    function styleSlider() {
        slides.css({width: "auto", "max-width": "100vw"})

        slideWidth = slides.width();
        console.log(slideWidth)
        sliderUlWidth = slideCount * slideWidth;

        sliderContainer.css({width: slideWidth})
        slider.css({width: sliderUlWidth, marginLeft: - slideWidth})
        lastSlide.prependTo('#slider ul');
    }


    function moveLeft() {
        slider.animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            slider.css('left', '');
        });
    };

    function moveRight() {
        slider.animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            slider.css('left', '');
        });
    };

    $( window ).resize(function() {
        styleSlider();
    })

    $('a.control_prev').click(function (event) {
        event.preventDefault()
        // confirm("Tem certeza? Spoiler alert");
        moveLeft();
    });

    $('a.control_next').click(function (event) {
        event.preventDefault()
        // confirm("Tem certeza? Spoiler alert");
        moveRight();
    });

    styleSlider();

});    
