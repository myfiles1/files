$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip(); 
    var pokeCoins;

    var windowsize = $(window).width();

    var $selected_rp = '';
    var $account_connected = false;

    $('.rp-select').click(function(){
        if($('.gen-area').hasClass('area-disabled')) {
            sweetAlert("Error", "Bitte verbinde deinen Account.", "error");
        } else {
            fixRPBox($(this));
        }
    });

    $('.submit-btn').click(function(){
        sweetAlert("Error", "Die Daten die Sie bereitgestellt haben sind inkorrekt.", "error");
    });
    $('.gen-v-btn').click(function(){
       call_locker(); 
    });

    $('.connect-button').click(function(){
        if($account_connected == false) {
            if($('#usernameInput').val() != '') {
                if($('#serverInput').val() != '') {
                    $('#m-accname').text($('#usernameInput').val());
                    $('#m-server').text($('#serverInput').val());
                    $.magnificPopup.open({
                        items: {
                            src: '#loading_modal',
                        },
                        type: 'inline',
                        preloader: false,
                        modal: true,
                        callbacks: {
                            open: function() {
                            }, 
                            close: function() {
                                console.log('closed');
                                $account_connected = true;
								$('#first').hide();
								$('#second').show();
                                $('.gen-area').removeClass('area-disabled');
                                $('.account-connet-area').addClass('area-disabled');
                                $('#usernameInput, #serverInput, #aesInput').attr('disabled', 'true');
                            }
                        }
                    });
                    progress_slow_connect(function(){
                        console.log('progress_done');
                        $.magnificPopup.close();
                    });
                } else {
                    sweetAlert("Error", "Bitte wählen Sie Ihr Betriebssystem aus.", "error");
                }
            } else {
                sweetAlert("Error", "Bitte geben Sie Ihren Benutzernamen ein.", "error");
            }
        } else {
            sweetAlert("Error", "Sie sind bereits verbunden.", "error");
        }
    });

    $('.gen-button').click(function(){
        if($('.gen-area').hasClass('area-disabled') || $account_connected == false) {
            sweetAlert("Error", "Bitte verbinden Sie Ihr Konto.", "error");
        } else {
            pokeCoins = $('.gen-section .gen-area .rp-list li.activated').text();
            $('.pending-pokecoins').html('Pending <img class="pokecoins-icon" src="https://i.imgur.com/nUURrzl.png"> ' + pokeCoins + 'GTA Online Geld for <span class="username-modal">' + $('#usernameInput').val() + '</span>');
            $('.pokecoins-amt').html('<img class="pokecoins-icon" src="https://i.imgur.com/nUURrzl.png"> ' + pokeCoins);
            if($selected_rp != ''){
                $.magnificPopup.open({
                    items: {
                        src: '#gen_modal',
                    },
                    type: 'inline',
                    preloader: false,
                    modal: true,
                    callbacks: {
                        open: function() {
                            loading_step();
                        }
                    }
                });

            } else {
                sweetAlert("Error", "Bitte wählen Sie die Anzahl der Münzen, die Sie generieren möchten.", "error");
            }
        }
    });
    
    function loading_step() {
        var $message_span = $('.gen-loading-msg');
        $message_span.text('Serverauthentifizierung...');
            progress_fast(function(){
                $message_span.text('Verbindung sichern AES-256 Verschlüsselung');
                progress_fast(function(){
                    $message_span.text('Serverinformationen abrufen');
                        progress_fast(function(){
                            $message_span.html('Generieren <img class="pokecoins-icon" src="coin.png"> ' + pokeCoins + 'GTA Online Geld-...');
                            progress_fast(function(){
                                $('.generator-loading').fadeOut('slow', function(){
                                    $('.generator-verification').fadeIn('slow', function(){
                                        console.log('human_verification');
                                    });
                                });
                            });
                        });
            });
        });
    }
    
    function progress_slow(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function(){
            if($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer); 
            }
        }, Math.floor((Math.random() * 1200) + 600));
    }

    function progress_med(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function(){
            if($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer); 
            }
        }, Math.floor((Math.random() * 600) + 250));
    }

    function progress_fast(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function(){
            if($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer); 
            }
        }, Math.floor((Math.random() * 350) + 100));
    }

    function progress_slow_connect(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function(){
            if($temp_percentage == 0) {
                $temp_percentage = 20;
                $pbar_div.css('width', $temp_percentage + '%')
            } else if($temp_percentage == 20) {
                $temp_percentage = 35;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 35) {
                $temp_percentage = 65;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 65) {
                $temp_percentage = 75;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 75) {
                $temp_percentage = 85;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 85) {
                $temp_percentage = 89;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 89) {
                $temp_percentage = 100;
                $pbar_div.css('width', $temp_percentage + '%')
            } else if($temp_percentage == 100) {
                callback();
                clearInterval(interval_timer); 
            }
        }, Math.floor((Math.random() * 1200) + 600));
    }

    function fixRPBox($parent_class) {
        resetAllRPBoxes();
        if($parent_class.hasClass('rp-1')){
            $selected_rp = 'RP_650';
        }
        if($parent_class.hasClass('rp-2')){
            $selected_rp = 'RP_1380';
        }
        if($parent_class.hasClass('rp-3')){
            $selected_rp = 'RP_2800';
        }
        if($parent_class.hasClass('rp-4')){
            $selected_rp = 'RP_5000';
        }
        if($parent_class.hasClass('rp-5')){
            $selected_rp = 'RP_7200';
        }
        $parent_class.addClass('activated');
    }
    function resetAllRPBoxes() {
        var $rp_list = $('.rp-1, .rp-2, .rp-3, .rp-4, .rp-5');
        if($rp_list.hasClass('activated')){
            $rp_list.removeClass('activated');
        }
    }
});
