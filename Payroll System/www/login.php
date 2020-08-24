<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/login.css">
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
</head>
<body>
	
	<div class="limiter">
		<div class="login-container">
			<div class="login-wrap">
				<form class="login-form flex-sb flex-w" onsubmit="return validateForm();" action="home.php" method="post">
					<span class="login-form-title p-b-50">
						Login
					</span>

					
					<div id="toggler1" class="input-wrap m-b-15 validate-input" data-validate = "Username is required" error = "Username does not exist">
						<input id="un" class="input" type="text" name="username" placeholder="Username" onfocus="hideValidate1();">
						<span class="focus-input"></span>
					</div>
					
					
					<div id="toggler2" class="input-wrap m-b-15 validate-input" data-validate = "Password is required" error = "Incorrect Password">
						<input id="pw" class="input" type="password" name="password" placeholder="Password" onfocus="hideValidate2();">
						<span class="focus-input"></span>
					</div>
					
					<div class="login-wrap-button m-t-50">
						<button class="login-form-button">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="js/login.js"></script>

</body>
</html>