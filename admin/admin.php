<?php	
	/* Database info */
	$host = "localhost";
	$dbname = "admin";
	$password = "";
	$username = "root";

	/* User class */
	class User
	{
		var $username;
		var $firstname;
		var $lastname;
		var $email;

		/* Constructer */
		function __construct($username, $firstname, $lastname, $email)
		{
			$this->username = $username;
			$this->firstname = $firstname;
			$this->lastname = $lastname;
			$this->email = $email;
		}

	}

	/* Response class */
	class Response
	{
		var $result;
		var $userdata;

		/* Constructer */
		function __construct($result, $data)
		{
			$this->result = $result;
			$this->userdata = $data;
		}
	}

	/* Connect to database */
	$conn = mysqli_connect($host, $username, $password, $dbname);

	/* Check connection */	
	if (!$conn)
	{
		die("Connection failed: ". mysqli_connect_errori());
	}

	function dataToClient()
	{
		global $conn;
		/* Select data from database */
		$sql = "SELECT username, firstname, lastname, email FROM info_user";
   		$result = mysqli_query($conn, $sql);
		$response ;
		$userdata = [];
		$state = "empty";

		if ($result-> num_rows > 0)
		{
			while ($row = $result-> fetch_assoc())
			{
				/* Check userstatus */
				if (!isset($_COOKIE[$row["username"]]))
				{
					$_SESSION[$row["username"]] = false;
				}

				/* Get online status */
				$user = new User($row['username'], $row['firstname'], $row['lastname'], $row['email']);
				array_push($userdata,$user);
			}
			/* respone to server */
			$state = "success";
			$response = new Response($state, $userdata);
			echo json_encode($response);
		}else
		{
			/* if empty respone empty*/
			
			$response = new Response($state, $userdata);

		}
		
	}

	/* remove user from  database */
	function removeUser($username) 
	{
	
		global $conn;
		$state = "success";
		$sql = "DELETE FROM info_user WHERE username='" . $username. "'";
		
		$result = mysqli_query($conn, $sql);

		if (!$result)
		{
			/* return failled if cant delete */
			$state = "Failed";
			echo mysqli_error($conn);
		}

		$response = new Response($state, $username);
		echo json_encode($response);
	}

	/* reset user password */
	function resetPassword($username)
	{
		global $conn;
		$state = "success";
		$sql = "UPDATE info_user SET password='abcd' WHERE username='" . $username. "'";
		
		$result = mysqli_query($conn, $sql);

		if (!$result)
		{
			/* return failled if cant delete */
			$state = "Failed";
			echo mysqli_error($conn);
		}

		$response = new Response($state, $username);
		echo json_encode($response);
	}

	/* Request handler */
	switch ($_POST['action'])
	{
	case "requestData":
		dataToClient();
		break;
	case "remove":
		removeUser($_POST['data']);
		break;
	case "reset":
		resetPassword($_POST['data']);
		break;
	default:
		echo "false";
		break;
	}

	mysqli_close($conn);
?>
