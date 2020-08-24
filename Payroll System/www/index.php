<?php
	session_start();
	$username = "";
	$password = "";

	class MyDB extends SQLite3 {
    	function __construct() {
        	$this->open('database.db');
        }
    }

    if (isset($_POST['login'])) {
    	$username = ($_POST['username']);
		$password = ($_POST['password']);

		if (!empty($username) and !empty($password)) {
			$records = $db->prepare("SELECT * FROM Users WHERE USERNAME = '$username' AND PASSWORD = '$password'");
			$records->bindParam('$username', $_POST['username']);
			$records->bindParam('$password', $_POST['password']);
			$stmt_result = $records->execute();

			$result = $stmt_result->fetchArray();

			if (count($result) >> 1) {
				$records = $db->prepare("SELECT FullName FROM Users WHERE USERNAME = '$username'");
				$stmt_result = $records->execute();
				while ($row = $stmt_result->fetchArray(SQLITE3_ASSOC)) {
					$_SESSION['username'] = $row['username'];
					$_SESSION['login'] = "Login Successful";
					echo
						"<script type=\"text/javascript\">".
        					"window.alert('Login Successful');".
        					"window.location.href='home.php';".
        				"</script>";
					//header('location: home.php');
				}
			}
			else {
				echo
						"<script type=\"text/javascript\">".
        					"window.alert('Error PHP');".
        					"window.location.href='login.php';".
        				"</script>";
			}
		}
    }

    if (isset($_GET['logout'])) {
    	session_destroy();
    	unset($_SESSION['username']);
    	header('location: login.php');
    }
    
?>