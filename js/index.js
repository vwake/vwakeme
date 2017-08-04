  $(function () { // wait for document ready
    var controller = new ScrollMagic.Controller({loglevel: 3});
    //
    // var scene2 = new ScrollMagic.Scene({
  	// 						triggerElement: "#trigger2"
    //
  	// 					})
  	// 					.setTween(".cloud1", 0.5, {backgroundColor: "green", right:0}) // trigger a TweenMax.to tween
  	// 					.addIndicators({name: "Trigger 2"}) // add indicators (requires plugin)
  	// 					.addTo(controller);

$("#submit").hover(over, out);

function over(){
TweenMax.to($("#erocket"), 0.5, {right:"0"})
}

function out(){
TweenMax.to($("#erocket"), 0.5, {right: "-230px"})

}

var er = new TimelineLite({paused:true})

er.to("#erocket", 1, {x:-$(window).width()-300});

$("#submit").on("click", function() {
  er.play();
})



  var flightpath = {
    entry : {
      curviness: 1.25,
      autoRotate: true,
      scaleY:10,
      values: [
          {x: 300,	y: 10},
          {x: 400,	y: 20},
          {x: $(window).width()+300,	y: 25},

        ]
    },
    looping : {
      curviness: 1.25,
      autoRotate: true,
      values: [
          {x: 650,	y: 10},
          {x: 620,	y: -60},
          {x: 500,	y: -100},
          {x: 380,	y: 20},
          {x: 500,	y: 60},
          {x: 580,	y: 20},
          {x: 620,	y: 15}
        ]
    },
    leave : {
      curviness: 1.25,
      autoRotate: true,
      values: [
          {x: 660,	y: 20},
          {x: 800,	y: 130},
          {x: $(window).width() + 300,	y: 100},
        ]
    }
  };
  // init controller


  // create tween
  var tween = new TimelineMax()
    .add(TweenMax.to($("#rocket"), 2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
    .add(TweenMax.to($("#rocket"), 3, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
    .add(TweenMax.to($("#rocket"), 2, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

  // build scene
  var scene = new ScrollMagic.Scene({ triggerHook:1, duration: $(window).height()*3, offset: 0, loglevel: 3})

          .setPin("#rocket")
          .setTween(tween)
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
})

$(document).mousemove(function(e){
   var x = e.pageX-50,
       y = e.pageY-50,
       a = Math.PI - Math.atan2(x,y),
       p = Math.sqrt(x*x + y*y),
       m = Math.sqrt(($(window).width()-50)*($(window).width()-50) + ($(window).height()-50)*($(window).height()-50));
			   $(".stem").css("transform", `translate(-50%,-50%) rotate(${a}rad)`);
   $(".stem").css("height", `${(p*35)/m}px`);
   $(".pupil").css("height", `${12.5-(p*3)/m}px`).css("width", `${12.5-(p*3)/m}px`);
}).mouseleave(function(e) {
   $(".stem").css("height", `0px`);
   $(".pupil").css("height", `12.5px`).css("width", `12.5px`);
});



	$(document).ready(function(){

    window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();

var c = document.getElementById('c');
var ctx = c.getContext('2d');
var cw = c.width = window.innerWidth-60;
var ch = c.height = window.innerHeight;
var rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);}

updateAll = function(a){
  var i = a.length;
  while(i--){
    a[i].update(i);
  }
}

renderAll = function(a){
  var i = a.length;
  while(i--){
    a[i].render(i);
  }
}

var stars = [];

Star = function(x, y, radius, speed){
  this.x = x;
  this.y = y;
  this.speed = (speed/25);
  this.radius = radius;
  this.saturation = (20+(this.radius)*5);
  this.lightness = (10+this.radius*5);
}

Star.prototype = {
  update: function(i){
    this.x += this.speed;
    if(this.x - this.radius >= cw){
      this.x = rand(0, ch-this.radius)
      this.x = -this.radius;
    }
},
render: function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, (this.radius < 0) ? 0 : this.radius, 0, Math.PI *2, false);
  var flickerAdd = (rand(0, 140) === 0) ? rand(5, 20) : 0;
  ctx.fillStyle = 'hsl(0, 5%, 55%)';
  ctx.fill();
  }
}

makeStarfield = function(){
  var base = .75;
  var inc = .2;
  var count = 140;
  var per = 6;
  while(count--){
    var radius = base + inc;
    var perTime = per;
    while(perTime--){
    	radius += inc;
    	stars.push(new Star(rand(0, cw-radius), rand(0, ch-radius), radius, radius*3));
    }
  }
}

var loop = function(){
  window.requestAnimFrame(loop);
  updateAll(stars);
  ctx.clearRect(0, 0, cw, ch);
  renderAll(stars);
}

makeStarfield();
loop();

    $(".element").typed({
        strings: ["Beautiful", "Innovative", "Minimlistic", "Clean", "Inspiring", "Unique"],
        typeSpeed: 0,
         loop: true,
         showCursor: true
      });




    var leftlink = $("#leftlink"),
        rightlink = $("#rightlink"),
        $btnPlay = $("#btnPlay"),
        logotext = $(".text"),
        $menu = $("nav"),
        tl;
    var submit = $("#submit");
    var name = $("#form-name").val();



        $menu.on("click","a.menulinks", function(){

            var $this = $(this),
                href = $this.attr("href"),
                topY = $(href).offset().top;

            TweenMax.to($(window), 2, {
                scrollTo:{
                    y: topY,
                    autoKill: true
                },
                ease:Power3.easeOut
             });

          return false;
        });


        $('#menuToggle').click(function(e){
        	var $parent = $(this).parent('nav');
          $parent.toggleClass("open");
          var navState = $parent.hasClass('open') ? "hide" : "show";
          $(this).attr("title", navState + " navigation");
    			// Set the timeout to the animation length in the CSS.
    			setTimeout(function(){
    				console.log("timeout set");
    				$('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
    			}, 200);
        	e.preventDefault();
      	});



    submit.click(function() {
            console.log( "submit was clicked" );

            var formData = {
                'name'              : $('input[name=Name]').val(),
                'email'             : $('input[name=Email]').val(),
                'message'           : $('textarea[name=Message]').val()
            };
        console.log(formData);

         $.ajax({
                type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url         : 'process.php', // the url where we want to POST
                data        : formData, // our data object
                dataType    : 'json', // what type of data do we expect back from the server
                encode          : true
            })
         .done(function(data) {

                $('.help-block').remove(); // remove the error text
                $('.alert').remove(); // remove the error text


                // log data to the console so we can see
                console.log(data);

             if ( ! data.success) {

                // handle errors for name ---------------
                if (data.errors.name) {
                    $('#console').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
										$('#form-name').attr("placeholder", data.errors.name);
										$('#name-input').addClass('formerror');
                }

                // handle errors for email ---------------
                if (data.errors.email) {
                    $('#console').append('<div class="help-block">' + data.errors.email + '</div>');
										$('#form-email').attr("placeholder", data.errors.email);
										$('#email-input').addClass('formerror');
                }

                // handle errors for superhero alias ---------------
                if (data.errors.message) {
                    $('#console').append('<div class="help-block">' + data.errors.message + '</div>');
										$('#subject').attr("placeholder", data.errors.message);
										$('#message-input').addClass('formerror');
                }

            } else {
                $('.form').hide();

                // ALL GOOD! just show the success message!
                $('#console').append('<div class="success"><h1>' + data.message + '</h1></div>');

                // usually after form submission, you'll want to redirect
                // window.location = '/thank-you'; // redirect a user to another page
                console.log('success'); // for now we'll just alert the user

            }

                    // here we will handle errors and validation messages
                });



           event.preventDefault();

    });

// // Logo Animation
//
//     tl = new TimelineMax();
//
//     // clears the stage
//     tl.set(logotext, {opacity:0});
//     tl.set(rightlink, {x:32.5, y:16, rotation:0});
//     tl.set(leftlink, {x:-32.5, y:-16});
//
//     tl.to(rightlink, 0.5, {x: 0, y: 0,  ease:Power4.easeOut}, 2)
//       .to(leftlink, 0.5, {x: 0, y: 0,  ease:Power4.easeOut}, 2)
//       .to(logotext, 1.5, {opacity:1, ease:Power4.easeOut}, 3);
//
//     $btnPlay.click(
//         function(){
//           tl.timeScale(1).seek(0);
//         }
//         );
// // end of Logo Animation


        var item_length = 3;
        var slider = $(".regular").slick({
          // infinite: true,
          autoplay: false,
          autoplaySpeed: 2500,
          pauseOnFocus: false,
          pauseOnHover:false,
           arrows: false
        });

        slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        //check the length of total items in .slide container
      //if that number is the same with the number of the last slider
      //Then pause the slider
      if( item_length === slider.slick('slickCurrentSlide') ){
        //this should do the same thing -> slider.slickPause();
         slider.slick("setOption", "autoplay", false, 0 )


      };
      //console.log(slider.slick('slickCurrentSlide'));
    });



  });
