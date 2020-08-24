<!DOCTYPE html>
<html>
<head>
	<title>Employees</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/employees.css">
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
</head>
<body>

	<div class="topbar">
		<button class="home"><i class="fa fa-home" title="Home"></i></button>
		<span id="header" class="header">Employees</span>
		<button class="logout"><i class="fa fa-sign-out" title="Logout"></i></button>
	</div>

	<div class="main-container">
		<div>
			<button class="addNew">Add New Employee</button>
			<div class="modal">  
				<form class="modal-content animate" onsubmit="return validateForm();" action="employees.php" method="post">

			    	<div class="topcontainer">
			      		<span class="close">&times;</span>
			      	</div>

			    	<div class="container">

			    		<span class="modal-title-1">Personal Information</span>

			      		<div id="val1" class="input-wrap-fn validate-input">
							<input id="fn" class="input" type="text" name="firstname" placeholder="First Name" onfocus="hideValidate1();">
							<span class="focus-input"></span>
						</div>

						<div class="input-wrap-mn">
							<input id="mn" class="input" type="text" name="middlename" placeholder="Middle Name">
							<span class="focus-input"></span>
						</div>

						<div id="val2" class="input-wrap-ln validate-input">
							<input id="ln" class="input" type="text" name="lastname" placeholder="Last Name" onfocus="hideValidate2();">
							<span class="focus-input"></span>
						</div>

						<div class="input-wrap-s">
							<input id="s" class="input" type="text" name="suffix" placeholder="Suffix">
							<span class="focus-input"></span>
						</div>

						<div id="val3" class="input-wrap-add validate-input">
							<input id="add" class="input" type="text" name="address" placeholder="Address" onfocus="hideValidate3();">
							<span class="focus-input"></span>
						</div>

						<div class="checkbox">
							<input class="input-checkbox" id="cb1" type="checkbox" name="male" value="Male">
							<label class="label-checkbox" for="cb1">
								Male
							</label>
						</div>

						<div class="checkbox">
							<input class="input-checkbox" id="cb2" type="checkbox" name="female" value="Female">
							<label class="label-checkbox" for="cb2">
								Female
							</label>
						</div>

						<div id="val4" class="input-wrap-bd validate-input">
							<input id="bd" class="input" type="text" name="birthdate" placeholder="Birthdate" onfocus="hideValidate4();">
							<span class="focus-input"></span>
						</div>

						<div id="val5" class="input-wrap-age validate-input">
							<input id="age" class="input" type="text" name="age" placeholder="Age" onfocus="hideValidate5();">
							<span class="focus-input"></span>
						</div>

						<span class="modal-title-2">Professional Information</span>

			      		<div id="val6" class="input-wrap-p validate-input">
							<input id="p" class="input" type="text" name="position" placeholder="Position" onfocus="hideValidate6();">
							<span class="focus-input"></span>
						</div>

						<div>
							<select id="opt" class="select-type" name="selecttype">
								<option value=""></option>
								<option value="">Allowance</option>
								<option value="">Salary</option>
							</select>
						</div>

						<div id="val7" class="input-wrap-am validate-input">
							<input id="am" class="input" type="text" name="amount" placeholder="Amount" onfocus="hideValidate7();">
							<span class="focus-input"></span>
						</div>

						<div id="val8" class="input-wrap-tin validate-input">
							<input id="tin" class="input" type="text" name="tin" placeholder="TIN" onfocus="hideValidate8();">
							<span class="focus-input"></span>
						</div>

						<div id="val9" class="input-wrap-sss validate-input">
							<input id="sss" class="input" type="text" name="sss" placeholder="SSS" onfocus="hideValidate9();">
							<span class="focus-input"></span>
						</div>

						<div id="val10" class="input-wrap-pag validate-input">
							<input id="pag" class="input" type="text" name="pagibig" placeholder="PAG-IBIG" onfocus="hideValidate10();">
							<span class="focus-input"></span>
						</div>

						<div id="val11" class="input-wrap-phi validate-input">
							<input id="phi" class="input" type="text" name="philhealth" placeholder="Philhealth" onfocus="hideValidate11();">
							<span class="focus-input"></span>
						</div>

			    	</div>

			    	<div>
			    		<span class="add-wrap-button">
							<button class="add-button">
								Add Employee
							</button>
						</span>
					</div>

				</form>
			</div>	
		</div>
	</div>

	<script type="text/javascript" src="js/employees.js"></script>

</body>
</html>