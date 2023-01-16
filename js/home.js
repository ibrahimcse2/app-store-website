// showcase slider 
$(document).ready(function(){
    $('.showcase_slider').slick({
        infinite: true,
        arrows:false,
        speed: 500,
        dots:false,
        autoplay:true,
        autoplaySpeed : '700'
    });
});
// mobile screen slider 
$(document).ready(function(){
    $('.screen_mobile').slick({
        infinite:true,
        arrows:false,
        speed: 1000,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});
$(document).ready(function(){
    $('#gallerySlider').slick({
        infinite:true,
        arrows:true,
        speed: 1000,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            }
        ]
    });
});
// gallery slider 
// devloper slider 
$(document).ready(function(){
    $('#devloper_slide').slick({
        infinite:true,
        arrows:false,
        speed: 1000,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

function logOut(){
    window.location.href = '../logIn.html'
}

// berfiller 
$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller({ barColor: '#fc6' });
	$('#bar4').barfiller({ barColor: '#900', duration: 3000 });
	
});

// app freatures 
  $('#detailone').hide()
  $('#detailtwo').hide()
  $('#detailthree').hide()
  $('#detailfour').hide()

//   first button 
$("#detailoneBtn").click(function(){
    appQualityFunction($('#detailone'),$('#detailtwo'),$('#detailthree'),$('#detailfour'))
    appBtnQualityFunction($("#detailoneBtn"),$("#detailtwoBtn"),$("#detailthreeBtn"),$("#detailfourBtn"))
    appIconQualityFunction($('.crossone'),$('.crosstwo'),$('.crossthree'),$('.crossfour'))
});
//   second button 
$("#detailtwoBtn").click(function(){
    appQualityFunction($('#detailtwo'),$('#detailone'),$('#detailthree'),$('#detailfour'))
    appBtnQualityFunction($("#detailtwoBtn"),$("#detailoneBtn"),$("#detailthreeBtn"),$("#detailfourBtn"))
    appIconQualityFunction($('.crosstwo'),$('.crossthree'),$('.crossfour'),$('.crossone'))
});
// third button 
$("#detailthreeBtn").click(function(){
    appQualityFunction($('#detailthree'),$('#detailtwo'),$('#detailone'),$('#detailfour'))
    appBtnQualityFunction($("#detailthreeBtn"),$("#detailtwoBtn"),$("#detailoneBtn"),$("#detailfourBtn"))
    appIconQualityFunction($('.crossthree'),$('.crossone'),$('.crosstwo'),$('.crossfour'))
});
// fourth button 
$("#detailfourBtn").click(function(){
    appQualityFunction($('#detailfour'),$('#detailthree'),$('#detailtwo'),$('#detailone'))
    appBtnQualityFunction($("#detailfourBtn"),$("#detailthreeBtn"),$("#detailtwoBtn"),$("#detailoneBtn"))
    appIconQualityFunction($('.crossfour'),$('.crossone'),$('.crosstwo'),$('.crossthree'))
});
// app  quality function
function appQualityFunction(item1,item2,item3,item4){
    item1.show(300)
    item2.hide(300)
    item3.hide(300)
    item4.hide(300)
}
// button color function 
function appBtnQualityFunction(item1,item2,item3,item4) { 
    item1.css("color", "#C8385E");
    item2.css("color", "#3C3D3D");
    item3.css("color", "#3C3D3D");
    item4.css("color", "#3C3D3D");
}
// button rotate function 
function appIconQualityFunction(item1,item2,item3,item4){
    item1.css("transform", "rotate(90deg)");
    item2.css("transform", "rotate(45deg)");
    item3.css("transform", "rotate(45deg)");
    item4.css("transform", "rotate(45deg)");
}
// search popup button 
const navbar = document.getElementById('navbar')

function searchPopUpFun(){
    const searchPop = document.createElement('div')
    searchPop.classList.add('popUpSearch')
    searchPop.innerHTML = `
    <div class="container">
    <div class="main d-flex justify-content-center align-items-center w-100">
    <div class="icon" id="idIcon"><i class="fa-solid fa-xmark"></i></div>
    <form>
    <input type="search" placeholder="TYPE HERE AND HIT ENTER">
    </form>
    </div>
    </div>
    `
    navbar.appendChild(searchPop)
    document.getElementById('idIcon').addEventListener('click',() =>{
        navbar.removeChild(searchPop)
    })
}
// app profile slider 
document.getElementById('appProfileSlider').addEventListener('click',() =>{
    const popslider = document.createElement('div')
    popslider.classList.add('PopappProfileSlide')
    popslider.innerHTML=`
    <div class="container">
        <div class="position-relative">
        <div class="icon" id="idIcon"><i class="fa-solid fa-xmark"></i></div>
        <div id="appProfileSlideItems">
            <div class="item"><img src="../images/app-showcase-x-1.png" alt="app_profile"></div>
            <div class="item"><img src="../images/app-showcase-x-2.png" alt="app_profile"></div>
            <div class="item"><img src="../images/app-showcase-x-3.png" alt="app_profile"></div>
            <div class="item"><img src="../images/app-showcase-x-4.png" alt="app_profile"></div>
            <div class="item"><img src="../images/app-showcase-x-5.png" alt="app_profile"></div>
        </div>
        </div>
    </div>
    `
    navbar.appendChild(popslider)
    document.getElementById('idIcon').addEventListener('click',() =>{
        navbar.removeChild(popslider)
    })
    // app pop slider 
    $(document).ready(function(){
        $('#appProfileSlideItems').slick({
            infinite:false,
            arrows:true,
            speed: 1000,
            dots:true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });
})
// owner img event
$(document).ready(function() {
    $("#ownerOne").mouseenter(function() {
        $("#ownerOneImg").attr("src", "../images/hoverchange (1).jpg");
    });
    $("#ownerOne").mouseleave(function() {
        $("#ownerOneImg").attr("src", "../images/devloper (3).jpg");
    });
    $("#ownerTwo").mouseenter(function() {
        $("#ownerTwoImg").attr("src", "../images/hoverchange (2).jpg");
    });
    $("#ownerTwo").mouseleave(function() {
        $("#ownerTwoImg").attr("src", "../images/devloper (1).jpg");
    });
    $("#ownerThree").mouseenter(function() {
        $("#ownerThreeImg").attr("src", "../images/hoverchange (3).jpg");
    });
    $("#ownerThree").mouseleave(function() {
        $("#ownerThreeImg").attr("src", "../images/devloper (2).jpg");
    });
 });


