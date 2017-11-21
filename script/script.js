
//Settings shuffle

$(document).ready(function() {
    var $grid = $('#grid');
    $grid.shuffle({
        itemSelector: '.item'
    });
    $('#filter a').click(function (e) {
        e.preventDefault();
        $('#filter a').removeClass('active');
        $(this).addClass('active');
        var groupName = $(this).attr('data-group');
        $grid.shuffle('shuffle', groupName );
    });
});
$(document).ready(function(){
    $('a[href^="#"], a[href^="."]').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
        return false;
    });
});
$(document).ready(function() {
    $('article').fullpage({
        afterLoad: function(anchorLink, index){
            $( "*" ).removeClass( "bold" );
            $("nav ." + anchorLink).addClass("bold");
        },
    });
});
$(document).on('click', '.home', function(){
    $.fn.fullpage.moveTo('home');
});
$(document).on('click', '.about', function(){
    $.fn.fullpage.moveTo('about');
});
$(document).on('click', '.portfolio', function(){
    $.fn.fullpage.moveTo('portfolio');
});
$(document).on('click', '.price', function(){
    $.fn.fullpage.moveTo('price');
});
$(document).on('click', '.comments', function(){
    $.fn.fullpage.moveTo('comments');
});
$(document).on('click', '.contacts', function(){
    $.fn.fullpage.moveTo('contacts');
});

//Settings slider

var widthS;
function sliderWidth(){
    widthS = $(window).width();
    $(".container-slider").css('width', widthS * 3 );
    $(".slide-one").css('width',widthS);
    $(".slide-two").css('width', widthS);
    $(".slide-three").css('width', widthS);
    $( ".container-slider" ).css( "marginLeft", "0px" )
}
function changeSlide(goTo){
    if(goTo == "prev"){
        if(parseInt($( ".container-slider" ).css( "marginLeft" )) < -(widthS)){
            $(".container-slider").animate({
                marginLeft : "0px"
            }, 1000);
        }
        else {
            $(".container-slider").animate({
                marginLeft : "-=" + widthS
            }, 1000);
        }
    }
    if(goTo == "next"){
        if(parseInt($( ".container-slider" ).css( "marginLeft" )) > -(widthS)){
            $(".container-slider").animate({
                marginLeft : "-=" + widthS*2
            }, 1000);
        }
        else {
            $(".container-slider").animate({
                marginLeft : "+=" + widthS
            }, 1000);
        }
    }
}
$(document).ready(function() {
    sliderWidth();
});
$(window).resize(function(){
    sliderWidth();
});
$(document).on('click', '.prev', function(){
    changeSlide("prev");
});
$(document).on('click', '.next', function(){
    changeSlide("next");
});
function explode(){
    $(".prev").click();
    setTimeout(explode, 10000);
}
setTimeout(explode, 10000);

//The height of the form is the height of iframe

function ifarameH(){
    $("iframe").css('height',$("form").css('height'));
}
$(document).ready(function() {
    ifarameH();
});
$(window).resize(function(){
    ifarameH();
});

