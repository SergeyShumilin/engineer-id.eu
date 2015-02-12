<!DOCTYPE html>
<html lang="en">
<head>
	<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8">
	<title>ENGINEER ID - The professional network for engineers by engineers</title>
	<link rel="icon" href="/imgs/favicon.ico" type="image/x-icon" />
	<link rel='stylesheet' type='text/css' href='/css/einloggen_registration.css' />
	<link rel='stylesheet' type='text/css' href='/js/shadowbox/shadowbox.css' />
	<link rel='stylesheet' type='text/css' href='/css/tooltips.css' />
	<link rel='stylesheet' type='text/css' href='/css/mainpage_english.css' />
	<script type='text/javascript' src='/js/jquery.js'></script>
	<script type='text/javascript' src='/js/shadowbox/shadowbox.js?revision=1'></script>
	<script type='text/javascript' src='/js/jquery.complexify.js'></script>
	<script type='text/javascript'>
		var login_exists_error = '<?=$this->translate->line(120);?>';
	</script>
	<script type='text/javascript' src='/js/mainpage_english.js'></script>
	<!--[if IE 8]>
		<style type='text/css'>
			.login_form .input-text, #registration_form input[type='text'], #registration_form input[type='password'] {
				line-height: 2;
			}
			#registration_form {
				filter:progid:DXImageTransform.Microsoft.Alpha(opacity=90);
			}
			.tooltip_container.error .tooltip_ledge {
				filter:progid:DXImageTransform.Microsoft.Alpha(opacity=84);
			}
			.main_search .search {
				line-height: 3;
			}
			.main_search .search_submit, .features.main .navigation {
				behavior:url('/css/ieshadows/PIE.htc');
			}
		</style>
	<![endif]-->
	<!--[if IE 7]>
		<style type='text/css'>
			.splash_panel .navigation .item, .footer.main .sub_info_container, .features.main .item, #slider .content .item, #registration_form .password_complexity {
				display: inline;				
			}
			.login_form .input-text, #registration_form input[type='text'], #registration_form input[type='password'] {
				line-height: 2;
			}
			#registration_form {
				filter:progid:DXImageTransform.Microsoft.Alpha(opacity=90);
			}
			.tooltip_container.error .tooltip_ledge {
				filter:progid:DXImageTransform.Microsoft.Alpha(opacity=84);
			}
			#registration_form ul {
				margin-left: 0;
			}
			.main_search .search_submit, .features.main .navigation {
				behavior:url('/css/ieshadows/PIE.htc');
			}
			.main_search .search {
				line-height: 3;
			}
			#registration_form .field {
				margin-bottom: 5px;
			}
			#registration_form #regcode_item{
				padding-top: 5px;				
			}
			#registration_form .ri_error {
				padding-bottom:10px;						
			}
		</style>
	<![endif]-->
</head>
<body<?php if (isset($action) && $action) echo " onload='".$action."_message()'";?>>
	<div class='top main'><div class='inner'><div class='center'><table class='login_form right'><tr><td><label class='big'>ACCESS:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>ENGINEER-ID</label>&nbsp;&nbsp;<input type='text' name='login' class='input-text' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>PASSWORD</label>&nbsp;&nbsp;<input type='password' name='password' class='input-text' /><input class='login_submit' type='submit' value='LOG IN' onfocus='this.blur()' /></td></tr></table>
		<a href='/' id='logo'><span class='first'>engineer-ID</span><span class='second'>.eu</span></a>
		<br /><br /><a href='/pass' class='forgotpswd right' data-shadowbox='shadowbox;width=500;height=190;'>Forgotten your password?</a><div id='login_error' class='right'>Incorrect Engineer-ID or Password. Please try again.</div>
	</div></div></div>
	<div class='splash'>
		<div class='background'></div>
		<div class='center'>
			<div id='slider'><div class='inner'><div class='content'><div class='item' style='background: url("/imgs/splash_big.png") no-repeat center -60px;'></div><div class='item' style='background: url("/imgs/splash3.png") no-repeat center -60px;'></div></div></div></div>
			<ul id='slider_texts'>
				<li id='slider_text1'>Present your <span style='color: #3e4148;'>ENGINEER-ID</span>entity on <span style='color: #2fa1dd;'>ENGINEER-ID</span>.EU<div style='font-style: italic; text-align: right;'>... be passionate about your Profession!</div></li>
				<li id='slider_text2'><div style='text-align: right;'>Join the <span style='color: #3e4148;'>NETWORK</span> - <span style='color: #2fa1dd;'>ENGINEER-ID</span>.EU</div><div style='font-style: italic; text-align: right;'>The best way to make contact with Engineers!</div></li>
			</ul>
			<div class='splash_panel'><div class='text'>Present your <span style='color: #3e4148;'>ENGINEER-ID</span>entity on <span style='color: #2fa1dd;'>ENGINEER-ID</span>.EU<div style='font-style: italic; text-align: right;'>... be passionate about your Profession!</div></div><div class='navigation'><div id='slide1' class='item highlighted'></div><div id='slide2' class='item'></div></div></div>
		</div>
	</div>
	<div class='main_search'>
		<div class='center'>
			<div id='registration_form' class='left'>
				<h1>NOT A MEMBER YET? - JOIN NOW!</h1>
				<ul>
					<li>Sign up now for Free!</li>
					<li>No hidden costs!</li>
				</ul>
				<div id='regvorname_item' class='reg_item'><div class='field'><input type='text' name='regvorname' size='40' maxlength='100' autocomplete='off' /></div><label>First name:</label></div>
				<div id='regname_item' class='reg_item'><div class='field'><input type='text' name='regname' size='40' maxlength='20' autocomplete='off' /></div><label>Surname:</label></div>
				<div id='regmail1_item' class='reg_item'><div class='field'><input type='text' name='regmail1' size='40' maxlength='50' autocomplete='off' /></div><label>Email:</label></div>
				<div id='regid_item' class='reg_item'><div class='field'><input type='text' name='regid' id='regid' size='40' maxlength='20' autocomplete='off' /></div><label>Engineer-ID:</label></div>
				<div id='regpass1_item' class='reg_item'><div class='field'><input type='password' name='regpass1' id='regpassword' size='40' maxlength='50' /></div><label>Password:</label></div>
				<div id='regpass2_item' class='reg_item'><div class='field'><input type='password' name='regpass2' size='40' maxlength='50' /></div><label>Repeat password:</label></div>
				<div class='reg_item password_complexity_row'><div class='field password_complexity_container'><div class='password_complexity'><div id='complexity_indicator'></div></div><span class='percent_container'><label id='complexity_percent'>0</label>&nbsp;%</span></div><label>Password security:</label></div>
				<div id='regcode_item' class='reg_item'><div class='field'><input type='text' id='regcode' name='regcode' size='6' maxlength='6' autocomplete='off' /></div><div id='kaptcha'><img src='/imgs/mcaptcha_small/index.php' alt='Security code' /></div><label>Security code:</label></div>
				<div class='agreement'><div class='checkbox'>&nbsp;</div>I certify that I have read and agree to the <a href='/general-terms-and-conditions' target='_blank'>General Terms and Conditions</a> and <a href='/privacy-policy' target='_blank'>Privacy Policy</a>.</div>
				<div class='aligncenter'><input type='submit' id='reg_button' onfocus='this.blur()' value='SIGN UP FOR FREE' /></div>
			</div>
			<div class='main_search_form right aligncenter'><h2>Find An Engineer or Company</h2><br /><form action='/suche' method='POST'><input type='text' name='sstr' class='search' /><input type='hidden' name='smode' value='alle' /><input class='search_submit' type='submit' value='' /></form></div>
		</div>
	</div>
	<div class='footer main'>
		<div class='center'>
			<h2>Engineer-ID is a Network for Engineers, Scientists, Specialists and Experts in the fields of</h2>
			<div class='sub_info_container ele'><h3>Electrotechnology</h3>Energy Technology, Electronics, Signal processing, Microelectronics, Telecommunications, High Frequency Technology, Drive Engineering, Automation and Control Technology, etc.</div>
			<div class='sub_info_container verk'><h3>Traffic & Transport</h3>Road and Rail Construction, Aerospace Engineering, Marine Engineering, Automotive Engineering, Materials Handling, Logistics, Material Engineering, etc.</div>
			<div class='sub_info_container verf'><h3>Chemistry & Process</h3>Chemical Engineering, Nanotechnology, Bioprocess Engineering, Material Engineering, Pharma Systems, Waste Management Industry, Industrial Process and Control, etc.</div>
			<div class='sub_info_container inf'><h3>Computer Science</h3>Software Engineering, Telecommunications, Computervisualistics, Cryptology, Integrated Hardware and Software, Civil Engineering Informatics, etc.</div>
			<div class='sub_info_container bau'><h3>Building & Construction</h3>Architecture, Construction and Civil Engineering, Geophysics, Environmental Engineering, Surveying, Structural Analysis, Mining Technology, Water Resources Engineering, etc.</div>
			<div class='sub_info_container mas'><h3>Machinery & Equipments</h3>Mechatronics and Robotics, Fluid Dynamics, Welding Technology, Terotechnology, Thermodynamics, Packaging Technology, Design, Drafting and Construction, etc. </div>
		</div>		
	</div>
	<div class='features main'><div class='center aligncenter'><h2>What Engineer-ID.eu Has To Offer</h2>
		<div class='navigation left inactive'></div><div class='navigation right'></div>
		<div class='content'><div class='wrap'>
			<div class='item' id='main_feature1'><span>Create your Profile,<br />present yourself in a professional environment</span></div><div class='item' id='main_feature2'><span>Communicate with your Colleagues</span></div><div class='item' id='main_feature3'><span>Make new<br />professional contacts</span></div><div class='item' id='main_feature4'><span>Discuss specific issues<br />in the Forum.</span></div><div class='item' id='main_feature5'><span>Share your Profile for<br />job applications.</span></div><div class='item' id='main_feature6'><span>Create your own Business Card,<br />exchange Business Cards.</span></div><div class='item' id='main_feature7'><span>Use your NoticeBlog<br />to publish information and news.</span></div>
		</div></div>
	</div></div>
	<div class='footer main last'>
		<div class='center aligncenter bottom'><a href='/' id='logo_footer'><span class='first'>engineer-ID</span><span class='second'>.eu</span></a>
			<!--bottom menu-->
			<? if ($bottom_menu = $this->menu->bottom()):?>
				<div class="urls">
					<? foreach ($bottom_menu as $item):?>
						<a href='<?=$item['url'];?>'><?=htmlSpecialChars($item['name']);?></a>
					<? endforeach;?>
				</div>
			<? endif;?>
			<!--/bottom menu-->
			<div class='copyright'>Copyright &copy; 2011 &ndash; <?=date("Y");?> engineer-ID.eu</div>
		</div>
		<div class='bottom_line'></div>
	</div>
</body>
</html>