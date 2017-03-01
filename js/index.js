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
    $(".regular").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnFocus: false,
      pauseOnHover:false,
       arrows: false
    });

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



    tl = new TimelineMax();

    // clears the stage
    tl.set(logotext, {opacity:0});
    tl.set(rightlink, {x:32.5, y:16, rotation:0});
    tl.set(leftlink, {x:-32.5, y:-16});

    tl.to(rightlink, 0.5, {x: 0, y: 0,  ease:Power4.easeOut}, 2)
      .to(leftlink, 0.5, {x: 0, y: 0,  ease:Power4.easeOut}, 2)
      .to(logotext, 1.5, {opacity:1, ease:Power4.easeOut}, 3);

    $btnPlay.click(
        function(){
          tl.timeScale(1).seek(0);
        }
        );





  });
