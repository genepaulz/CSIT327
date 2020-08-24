<!DOCTYPE html>
<html>
<head>
	<title>Payroll</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/payroll.css">
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
</head>
<body>

	<div class="topbar">
		<button class="home"><i class="fa fa-home" title="Home"></i></button>
		<span id="header" class="header">Payroll</span>
		<button class="logout"><i class="fa fa-sign-out" title="Logout"></i></button>
	</div>

		<div class="main-container">
		<div>
			    	<form class="container">

			    		<span class="title">Select Employee</span>

			      		<div>
							<select id="select-employee" class="select-type" name="selectemployee">
								<option value=""></option>
							</select>
						</div>

			      		<div id="val6" class="input-wrap-p validate-input">
							<input id="p" class="input" type="text" name="position" placeholder="Position" onfocus="hideValidate6();">
							<span class="focus-input"></span>
						</div>

						<span class="title">Contributions</span>

						<div id="val8" class="input-wrap-tax validate-input">
							<label for="tax" class="labels">TAX</label>
							<input id="tax" class="input" type="text" name="tax" onfocus="hideValidate8();">
							<span class="focus-input"></span>
						</div>

						<div id="val9" class="input-wrap-sss validate-input">
							<label for="tax" class="labels">SSS</label>
							<input id="sss" class="input" type="text" name="sss" onfocus="hideValidate9();">
							<span class="focus-input"></span>
						</div>

						<div id="val10" class="input-wrap-pag validate-input">
							<label for="tax" class="labels">HDMF</label>
							<input id="pag" class="input" type="text" name="pagibig" onfocus="hideValidate10();">
							<span class="focus-input"></span>
						</div>

						<div id="val11" class="input-wrap-phi validate-input">
							<label for="tax" class="labels">Philhealth</label>							
							<input id="phi" class="input" type="text" name="philhealth" onfocus="hideValidate11();">
							<span class="focus-input"></span>
						</div>

			    	</form>

			    	<div>
			    		<span class="add-wrap-button">
							<button class="add-button">
								Calculate
							</button>
						</span>
					</div>
		</div>
	</div>

	<script type="text/javascript" src="js/payroll.js"></script>

</body>
</html>