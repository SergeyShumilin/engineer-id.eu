Shadowbox.init({
	modal: true,
	overlayColor: "#fff"
})

var slides_num = 0;
var slider_timeout = 0;

var complexity_1percent = 131/100;

function slide(slide_id) {
	try {
		clearTimeout(slider_timeout);
		
		if (slide_id == 1) {
			jQuery('#slider .content').fadeOut(function() {
				jQuery(this).css('left', '0px');
				jQuery(this).fadeIn();
			})
		}
		else {
			jQuery('#slider .content').animate({left: -1300*(slide_id-1)}, 'slow');
		}
		
		jQuery('.splash_panel .text').fadeOut(function () {
			jQuery(this).html(jQuery('#slider_text' + slide_id).html());			
			jQuery(this).fadeIn();
		});
		
		jQuery('.splash .navigation .item').removeClass('highlighted');
		jQuery('.splash .navigation #slide' + slide_id).addClass('highlighted');
		
		if ((slide_id - 0 + 1) > slides_num) var next_slide = 1;
		else next_slide = slide_id - 0 + 1;
		
		slider_timeout = setTimeout('slide(' + next_slide + ')', 8000);
	}
	catch(e) {alert(e.toString())}
}

var registration_errors = [];

function show_registration_error(field, error) {
	var rf = jQuery('#registration_form');
	
	registration_errors[field] = error;
	
	rf.find('#' + field + '_item').addClass('ri_error');
	rf.find('#' + field + '_item .field').removeClass('fok')
								.addClass('ferror');
								
	if (!jQuery('#error_tooltip_' + field).length) {
		rf.find('#' + field + '_item .field').append('<div id="error_tooltip_' + field + '" class="error_tooltip"></div>')
								.find('.error_tooltip').click(function() {
									if (!jQuery(this).hasClass('active')) {
										jQuery('#registration_form .error_tooltip.active').removeClass('active');
										
										var tooltip_button_top_offset = jQuery(this).offset().top;																		
										var tooltip_button_left_offset = jQuery(this).offset().left;
										
										if (!jQuery('.tooltip_container.error').length) jQuery('body').append('<div class="tooltip_container error"><img src="/imgs/close_error_tooltip.png" alt="close" class="close" onclick="close_error_tooltip()" /><div class="tooltip_text"></div><div class="tooltip_ledge"></div></div>');
										
										var tooltip_container = jQuery('.error.tooltip_container');
										
										if (tooltip_container.is(':visible')) tooltip_container.fadeOut(function() {
											tooltip_container.css('top', tooltip_button_top_offset - 30)
															.css('left', tooltip_button_left_offset + 50);
										
											
											tooltip_container.find('.tooltip_text').html(registration_errors[field]);
											
											tooltip_container.fadeIn();											
										})
										else {
											tooltip_container.css('top', tooltip_button_top_offset - 30)
															.css('left', tooltip_button_left_offset + 50);
										
											
											tooltip_container.find('.tooltip_text').html(registration_errors[field]);
											
											tooltip_container.fadeIn();											
										}
										
										jQuery(this).addClass('active');
									}						
								});	
	}
	else {
		if (jQuery('#error_tooltip_' + field).hasClass('active')) jQuery('.error.tooltip_container .tooltip_text').html(error);
		
		jQuery('#error_tooltip_' + field).show();
	} 
}

function hide_registration_error(field) {
	var rf = jQuery('#registration_form');
	
	registration_errors[field] = '';
	rf.find('#' + field + '_item').removeClass('ri_error');
	
	if (jQuery('#error_tooltip_' + field).hasClass('active')) {
		jQuery('#error_tooltip_' + field).removeClass('active');
		jQuery('.error.tooltip_container').hide();
	}
	
	jQuery('#error_tooltip_' + field).hide();
	
	rf.find('#' + field + '_item .field').removeClass('ferror')
								.addClass('fok');
}

function close_error_tooltip() {
	jQuery('.tooltip_container.error').fadeOut();
	jQuery('#registration_form .error_tooltip.active').removeClass('active');
}

function check_login() {
	try {
		var login = $("#registration_form #regid").val();
					
		if (login) {
			$.ajax({
				url: "/check_login",
				type: "POST",
				data: "login="+login,
				success: function(str) {
					if (str == "error") {
						show_registration_error('regid', login_exists_error);							
					}
					else if (registration_errors['regid'] == login_exists_error) {
						if (jQuery('#error_tooltip_regid').hasClass('active')) {
							jQuery('#error_tooltip_regid').removeClass('active');
							jQuery('.error.tooltip_container').hide();
						}						
						
						jQuery('#error_tooltip_regid').hide();
						
						jQuery("#registration_form #regid_item").removeClass("ri_error");	
						jQuery("#registration_form #regid_item .field").removeClass("ferror");
					}
				}
			});				
		}
		else if (registration_errors['regid'] == login_exists_error) {
			if (jQuery('#error_tooltip_regid').hasClass('active')) {
				jQuery('#error_tooltip_regid').removeClass('active');
				jQuery('.error.tooltip_container').hide();
			}						
			
			jQuery('#error_tooltip_regid').hide();
						
			jQuery("#registration_form #regid_item").removeClass("ri_error");	
			jQuery("#registration_form #regid_item .field").removeClass("ferror");
		}			
	}
	catch(e) {}
}

jQuery(document).ready(function() {
	slides_num = jQuery('.splash_panel .navigation .item').length;
	if (slides_num > 1) slider_timeout = setTimeout('slide(2)', 9000);
	else jQuery('.splash_panel .navigation').css('visibility', 'hidden');
	
	jQuery('.features.main .navigation.right').click(function() {
		if ((parseInt(jQuery('.features.main .content .wrap').css('left')) - 301) > -(jQuery('.features.main .content .item').length - 2)*301) {
			if ((parseInt(jQuery('.features.main .content .wrap').css('left')) - 301) == -(jQuery('.features.main .content .item').length - 3)*301) jQuery(this).addClass('inactive');
			jQuery('.features.main .content .wrap').animate({left: parseInt(jQuery('.features.main .content .wrap').css('left')) - 301 + 'px'}, 'slow');
			if (jQuery('.features.main .navigation.left').hasClass('inactive')) jQuery('.features.main .navigation.left').removeClass('inactive');
		}				
	})
	
	jQuery('.features.main .navigation.left').click(function() {
		if ((parseInt(jQuery('.features.main .content .wrap').css('left')) + 301) == 0) jQuery(this).addClass('inactive');
		if (parseInt(jQuery('.features.main .content .wrap').css('left')) < 0) jQuery('.features.main .content .wrap').animate({left: parseInt(jQuery('.features.main .content .wrap').css('left')) + 301 + 'px'}, 'slow');
		if (jQuery('.features.main .navigation.right').hasClass('inactive')) jQuery('.features.main .navigation.right').removeClass('inactive');
	})

	jQuery('.splash .navigation .item').click(function() {
		if (!jQuery(this).hasClass('highlighted')) {
			var slide_id = jQuery(this).attr('id').replace('slide', '');
			slide(slide_id);
		}
	})
	
	jQuery(".login_form .input-text").keydown(function(event) {
		if (event.keyCode == 13) jQuery(".login_form .login_submit").click();
	});
	
	jQuery('.login_form .login_submit').click(function() {
		var login = jQuery('.login_form input[name="login"]').val();
		var password = jQuery('.login_form input[name="password"]').val();
		
		if (!login || !password) {
			jQuery('.login_form').addClass('error');
			jQuery('#login_error').show();
		}
		else {
			jQuery.ajax({
				url: '/ajax/login',
				type: 'POST',
				data: {login: login, password: password},
				success: function(response) {
					if (response == 'error') {
						jQuery('.login_form').addClass('error');
						jQuery('#login_error').show();
					}
					else if (response == 'success') window.location = '/arbeitszimmer';
					else if (response == 'first_login') window.location = '/registerkarte';
					else if (response == 'blocked') {
						Shadowbox.open({
							content:   '/blockmessage',
							player:     "iframe",
							height:320,
							width:570
						});
					}
				}
			})
		}
	})
	
	//registration form
	jQuery('#registration_form .checkbox').click(function() {
		jQuery(this).toggleClass('checked');
		
		if (jQuery(this).hasClass('checked')) jQuery('#registration_form #reg_button').removeAttr('disabled');
		else jQuery('#registration_form #reg_button').attr('disabled', 'disabled');
	})
	
	if (!jQuery('#registration_form .checkbox').hasClass('checked')) jQuery('#registration_form #reg_button').attr('disabled', 'disabled');
	
	jQuery('#registration_form #reg_button').click(function() {
		var rf = jQuery('#registration_form');
		
		jQuery.ajax({
			url: '/ajax/registration',
			dataType: 'json',
			data: {
				regid: rf.find('input[name="regid"]').val(),
				regvorname: rf.find('input[name="regvorname"]').val(),
				regname: rf.find('input[name="regname"]').val(),
				regmail1: rf.find('input[name="regmail1"]').val(),
				regpass1: rf.find('input[name="regpass1"]').val(),
				regpass2: rf.find('input[name="regpass2"]').val(),
				regcode: rf.find('input[name="regcode"]').val()
			},
			type: 'POST',
			success: function(response) {
				try {
					if (response != null) {
						if (response.status == 'error') {
							//login error
							if (response.errors.regid_error) show_registration_error('regid', response.errors.regid_error);
							else hide_registration_error('regid');
							
							//vorname error
							if (response.errors.regvorname_error) show_registration_error('regvorname', response.errors.regvorname_error);
							else hide_registration_error('regvorname');
							
							//nachname error
							if (response.errors.regname_error) show_registration_error('regname', response.errors.regname_error);
							else hide_registration_error('regname');
							
							//mail error
							if (response.errors.regmail1_error) show_registration_error('regmail1', response.errors.regmail1_error);
							else hide_registration_error('regmail1');
							
							//password error
							if (response.errors.regpass1_error) show_registration_error('regpass1', response.errors.regpass1_error);
							else hide_registration_error('regpass1');
							
							//password-repeat error
							if (response.errors.regpass2_error) show_registration_error('regpass2', response.errors.regpass2_error);
							else hide_registration_error('regpass2');
							
							//registration code error
							if (response.errors.regcode_error) show_registration_error('regcode', response.errors.regcode_error);
							else hide_registration_error('regcode');
							
							check_login();
						}
						else if (response.status == 'success') {
							//show registration success window
							Shadowbox.open({
								content:   '/anmeldung',
								player:     "iframe",
								height:320,
								width:680
							});
							
							//clean registration form
							rf.find('input[type="text"], input[type="password"]').val('');
							rf.find('.field').removeClass('fok')
											.removeClass('ferror');
							rf.find('.checkbox').removeClass('checked');
							rf.find('#reg_button').attr('disabled', 'disabled');
							rf.find('.error').html('');
							rf.find('.reg_item').removeClass('ri_error');
							rf.find('#complexity_percent').html(0);
							rf.find('#complexity_indicator').css('left', '-8px');
							
							rf.find('#kaptcha img').attr('src', '/imgs/mcaptcha_small/index.php?' + Math.random());
						}
					}
				}
				catch(e) {alert(e.toString())}
			}
		})
	})
	
	//get new security code image
	jQuery('#registration_form #kaptcha img').click(function() {
		jQuery(this).attr('src', '/imgs/mcaptcha_small/index.php?' + Math.random());
	})
	
	//check if login already exists
	jQuery('#registration_form #regid').keyup(function() {
		check_login();
	})
	
	//password complexity
	jQuery('#registration_form input[name="regpass1"]').complexify({
		minimumChars: 6,
		strengthScaleFactor: 0.6			
	}, function(valid, complexity) {
		if (complexity != '-Infinity') {
			jQuery('#complexity_percent').html(Math.round(complexity));
			jQuery('#complexity_indicator').css('left', Math.round(complexity_1percent * complexity) - 8 + 'px');
		}
	})
	
	jQuery('#registration_form input[name="regpass1"]').focus(function() {
		if (jQuery('#registration_form .password_complexity_row').is(':hidden')) jQuery('#registration_form .password_complexity_row').show();
	})
})

//popup messages
function auth_message() {
	Shadowbox.open({
		content:   '/act',
		player:     "iframe",
		height:200,
		width:500
	});
}

function profil_release_message() {
	Shadowbox.open({
		content:   '/profile_release/' + window.location.href.split('/')[5],
		player:     "iframe",
		width:600,
		height:500
	});
}

function passrestore_message() {
	Shadowbox.open({
		content:   '/prmessage',
		player:     "iframe",
		height:190,
		width:500
	});
}

function block_message() {
	Shadowbox.open({
		content:   '/blockmessage',
		player:     "iframe",
		height:320,
		width:570
	});
}

function loschen_message() {
	Shadowbox.open({
		content:   '/loschenmessage',
		player:     "iframe",
		height:200,
		width:570
	});
}

function saveinfo_message() {
	var text = "Ihre Änderungen wurden erfolgreich vorgenommen.";
	var height = 150;
	
	if (jQuery(".regkarte input#new_mail").val() != "") {
		text = "Ihre Änderungen wurden erfolgreich vorgenommen.<br /><br />An die neue E-Mail-Adresse wurde soeben eine Bestätigungsmail gesendet. Die Änderung wird erst aktiv, wenn Sie den Bestätigungslink benutzen."
		height = 220;
	}	
	
	Shadowbox.open({
		content: "<div class='pu_window'><div class='message green'>"+ text +"</div><button class='ok' onfocus='this.blur()' onclick='parent.window.Shadowbox.close()'>OK</button></div>",
		player: "html",
		width:440,
		height: height
	});
}

function saveinfo_error_message() {
	Shadowbox.open({
		content: "<div class='pu_window'><div class='message red'>Es ist ein Fehler aufgetreten.<br />Bitte überprüfen Sie Ihre Eingaben.</div><button class='ok' onfocus='this.blur()' onclick='parent.window.Shadowbox.close()'>Schließen</button></div>",
		player: "html",
		width:440,
		height:190
	});
}

function kontakt_send_message() {
	Shadowbox.open({
		content: "<div class='pu_window'><div class='message green'>Ihre Nachricht wurde erfolgreich gesendet.</div><button class='ok' onfocus='this.blur()' onclick='parent.window.Shadowbox.close()'>Danke</button></div>",
		player: "html",
		width:440,
		height:190
	});
}

function change_email_message() {
	Shadowbox.open({
		content: "<div class='pu_window'><div class='message green'>Ihre E-Mail-Adresse wurde erfolgreich geändert.</div><button class='ok' onfocus='this.blur()' onclick='parent.window.Shadowbox.close()'>OK</button></div>",
		player: "html",
		width:440,
		height:190
	});
}