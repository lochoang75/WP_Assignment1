<?php
/* Response class */
class Response
{
	var $success;
	var $optionalData;

	function __construct ($success, $data)
	{
		$this->success = $success;
		$this->optionalData = $data;
	}
}

/* Database info*/
$host = "localhost";
$dbname = "admin";
$dbPassword = "";
$dbUsername = "root";

/* Connect to databbase */
$conn = mysqli_connect($host, $dbUsername, $dbPassword, $dbname);

/* Check db connection */
if (!$conn)
{
	die("Connection failed: ".mysqli_connect_error());
}

/* Find user in database */
/* List of login status of login
 * 0: not have data
 * 1: login success 
 * 2: incorrect password
 */

function isAdmin()
{
	global $conn;
	$sql = "SELECT username, password FROM admin";
	$result = mysqli_query($conn, $sql);

	/* Admin infomation */
	$username = trim($_POST['username']);
	$password = trim($_POST['password']);

	if ($result->num_rows > 0)
	{
		while($row = $result->fetch_assoc())
		{
			/* Compare with user database */
			if ($row["username"] === $username)
			{
				if ($row["password"] === $password)
				{
					/* is admin */
					return 1;
				}else {
					/* admin but wrong password */
					return 2;
				}
			}
		}
	}
	/* not a admin */
	return 0;
}

function isNormalUser()
{
	global $conn;
	$sql = "SELECT username, password FROM info_user";
	$result = mysqli_query($conn, $sql);

	/* Admin infomation */
	$username = trim($_POST['username']);
	$password = trim($_POST['password']);

	if ($result->num_rows > 0)
	{
		while($row = $result->fetch_assoc())
		{
			/* Compare with user database */
			if ($row["username"] === $username)
			{
				if ($row["password"] === $password)
				{
					return 1;
				}else {
					return 2;
				}
			}
		}
	}
	return 0;
}

/* Response for admin user */
function adminRes()
{
	/* get username for cookie and session */
	$username = trim($_POST['username']);

	/* setcookie*/
	$cookie_name = "admin";
	$cookie_value = "".$username."";
	setcookie($cookie_name, $cookie_value, time() + (86400 *30), "/");

	/* response for client */
	$result = "success";
	$res = new Response($result, "null"); 
	echo json_encode($res);
}

/* Response for normal user */
function normalRes()
{
	/* get username for cookie and session */
	$username = trim($_POST['username']);

	/* setcookie*/
	$cookie_name = "user";
	$cookie_value = "".$username."";
	setcookie($cookie_name, $cookie_value, time() + (86400 *30), "/");

	/* response for client */
	$result = "success";
	$res = new Response($result, "null"); 
	echo json_encode($res);
}

/* Response for incorrect password */
function incorrectRes()
{
	/* response for client */
	$result = "incorrect";
	$res = new Response($result, "null"); 
	echo json_encode($res);
}

/* Respone for invalid account */
function invalidRes()
{
	/* response for client */
	$result = "invalid";
	$res = new Response($result, "null"); 
	echo json_encode($res);
}

/* Response password */
$forgetPassword = "";
function responsePassword ()
{
	$result = "success";
	global $forgetPassword;

	/* forget password is shared variable
		will be set if found with user in database */
	$res = new Response($result, $forgetPassword);
	echo json_encode($res);
}

function loginHandler()
{
	switch (isAdmin())
	{
	case 1:
		adminRes();
		break;
	case 2:
		incorrectRes();
		break;
	default:
		switch (isNormalUser())
		{
		case 1:
			normalRes();
			break;
		case 2:
			incorrectRes();
			break;
		default:
			invalidRes();
			break;
		}
		break;
	}
}

function findPassword()
{
	global $conn;
	global $forgetPassword;
	$sql = "SELECT username, password, email FROM admin";
	$result = mysqli_query($conn, $sql);

	/* Account infomation */
	$username = trim($_POST['username']);
	$email = trim($_POST['email']);

	/* query to admin database */
	$result = mysqli_query($conn, $sql);

	if ($result->num_rows > 0)
	{
		while($row = $result->fetch_assoc())
		{
			/* Compare with user database */
			if ($row["username"] === $username)
			{
				if ($row["email"] === $email)
				{
					$forgetPassword = $row['password'];
					return 1;
				}else {
					return 2;
				}
			}
		}
	}

	$sql = "SELECT username, password, email FROM info_user";

	$result = mysqli_query($conn, $sql);
	
	/* query to admin database */
	$result = mysqli_query($conn, $sql);

	if ($result->num_rows > 0)
	{
		while($row = $result->fetch_assoc())
		{
			/* Compare with user database */
			if ($row["username"] === $username)
			{
				if ($row["email"] === $email)
				{
					$forgetPassword = $row['password'];
					return 1;
				}else {
					return 2;
				}
			}
		}
	}
	

	return 0;

}

$action;
if (isset ($_POST['action']) && !empty($_POST['action']))
{
	$action = $_POST['action'];
}

function forgetPasswordHandler()
{
	switch(findPassword())
	{
	case 1:
		responsePassword();
		break;
	case 2:
		incorrectRes();
		break;
	default:
		invalidRes();
		break;
	}

}

switch ($action)
{
case "login":
	loginHandler();
	break;
case "forgetPassword":
	forgetPasswordHandler();
	break;
default:
	break;
}
mysqli_close($conn);
?>
