/* User object */
var user = { 
	firstName: "", lastName:"", birthDay:"", idNum:"", gender:"", foreign:"", userName:"", password:"", retype:"", phone:"", requirement:"false", email:""
}; 

/* Set data to user */
function CollectForm()
{
	/* Get form data */
	user.firstName = $("#firstname").val();
	user.lastName  = $("#lastname").val();
	user.birthDay  = $("#birthday").val();
	user.idNum     = $("#idnum").val();
	user.gender    = $("#gender").val();
	user.foreign   = $("#foreign").val();
	user.userName  = $("#username").val();
	user.password  = $("#password").val();
	user.retype    = $("#retype-password").val();
	user.phone     = $("#phone").val();
	user.requirement = $("#requirement").is(":checked");
	user.email     = $("#email").val();
}

/* Check form data
 * firstname: <50 character, text only
 * lastname: <50 character, text only
 */
function ValidateName(name) 
{
	let exception = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?1234567890]/);
	if (exception.test(name)) 
	{
		console.log("[E] Contain special charater");
		return false;
	}

	if (name.length > 50 || name.length == 0)
	{
		console.log("[E] Lenght out of range");
		return false;
	}

	return true;
};

/*
 * birthday: valid;
 */
function ValidateDate(dateString)
{
	    // First check for the pattern
	    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
		{
			console.log("[E] Date error ");
			return false;
		}

		// Parse the date parts to integers
		var parts = dateString.split("/");
		var day = parseInt(parts[0], 10);
		var month = parseInt(parts[1], 10);
		var year = parseInt(parts[2], 10);

		// Check the ranges of month and year
		if(year < 1000 || year > 3000 || month == 0 || month > 12)
			return false;

		var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

		// Adjust for leap years
		if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
		{
			monthLength[1] = 29;
		}

		// Check the range of the day
		return day > 0 && day <= monthLength[month - 1];
};

/*
 * username: 1 - 50 character, ASCII only, not special character  
 * password: 1 - 50 character, ASCII only, not special character
 */
function ValidateAccount(password)
{
	var success = 1;
	let set = /^[a-zA-Z0-9]+$/;
	if (!password.match(set))
	{
		success = 0;
	}
	
	if (password.length > 50 || password.length == 0)
	{
		console.log("[E] password length");
		success = 0;
	}
		
	return success;
}

/*
 * re-type password: same as password
 */
function ValidateRetype(password, retyepassword)
{
	// Compare two string return true if equal
	return !(password.localeCompare(retyepassword));
}

/*
 * phone: number only
 * idNum: number only
 */
function ValidateNum(num)
{
	let set = /^[0-9]+$/;
	var success = true;

	// if any character not in set
	if (!num.match(set))
	{
		success = false;
	}

	if (num.length > 50 || num.length == 0)
	{
		success = false;
	}

	return success;
}

/*
 * Email just simple like /\S+@\S+\.\S+/
 */
function ValidateEmail(email)
{
	let set = /\S+@\S+\.\S+/;
	var success = true;
	
	if (!set.test(email))
	{
		success = false;
	}
	
	if (email.length > 50 || email.length == 0 )
	{
		success = false;
	}
	
	return success;
}

/*
 * check: must be check
 */
function EulerConfirm(check)
{
	return check;
}

function ClientValidate(user) 
{
	var success = true;
	/* First name, last name , foreign*/
	if (!ValidateName(user.firstName))
	{
		// Red border
		$("#firstname").addClass("error");

		if (user.firstName == "")
		{
			// No fill error
			$("#firstname_err").html("* Đây là trường bắt buộc");
		}
		else 
		{
			// wrong format error
			$("#firstname_err").html("* Tên phải dưới 50 kí tự chữ");
		}
		success = false;
	}
	else
	{
		// Set as normal
		$("#firstname_err").html("");
		$("#firstname").removeClass("error");
	}

	if (!ValidateName(user.lastName))
	{
		// Red border
		$("#lastname").addClass("error");

		if (user.lastName == "")
		{
			// No fill error
			$("#lastname_err").html("* Đây là trường bắt buộc");
		}
		else 
		{
			// wrong format error
			$("#lastname_err").html("* Họ phải dưới 50 kí tự chữ");
		}

		success = false;
	}
	else
	{
		// Set as normal
		$("#lastname_err").html("");
		$("#lastname").removeClass("error");
	}

	if (!ValidateName(user.foreign))
	{
		// Red border
		$("#foreign").addClass("error");

		if (user.foreign == "")
		{
			// No fill error
			$("#foreign_err").html("* Đây là trường bắt buộc");
		}
		else 
		{
			// wrong format error
			$("#foreign_err").html("* Quốc tịch dưới 50 kí tự chữ");
		}

		success = false;
	}
	else
	{
		// Set as normal
		$("#foreign_err").html("");
		$("#foreign").removeClass("error");
	}

	/* IDnum, phonenumber*/
	if (!ValidateNum(user.idNum))
	{
		// Red border
		$("#idnum").addClass("error");
		
		if (user.idNum == "")
		{
			// Empty field
			$("#idnum_err").html("* Đây là trường bắt buộc");
		}
		else 
		{
			// Wrong format
			$("#idnum_err").html("* Số CMND tối đa 50 kí tự số");
		}
		
		success = false;
	}
	else 
	{
		// Set as normal
		$("#idnum").removeClass("error");
		$("#idnum_err").html("");
	}

	if (!ValidateNum(user.phone))
	{
		// Red border
		$("#phone").addClass("error");
		
		if (user.phone == "")
		{
			// Empty input
			$("#phone_err").html("* Đây là trường bắt buộc");
		}
		else 
		{
			// Wrong format
			$("#phone_err").html("* Số điện thoại tối đa 50 kí tự số");
		}

		success = false;
	}
	else 
	{
		// Set as normal
		$("#phone").removeClass("error");
		$("#phone_err").html("");
	}

	/* Date */
	if (!ValidateDate(user.birthDay))
	{
		// Red border
		$("#birthday").addClass("error");
		
		if (user.birthDay == "")
		{
			// Empty
			$("#birthday_err").html("* Đây là trường bắt buộc");
		}
		else 
		{
			// Not valid
			$("#birthday_err").html("* Ngày không đúng");
		}

		success = false;
	}
	else 
	{
		// Set as normal
		$("#birthday").removeClass("error");
		$("#birthday_err").html("");
	}

	/*Validate account*/
	if (!ValidateAccount(user.userName))
	{
		// Red border
		$("#username").addClass("error");

		if (user.userName == "")
		{
			// Empty
			$("#username_err").html("* Đây là trường bắt buộc");
		}
		else
		{
			// Set as normal
			$("#username_err").html("* Tên đăng nhập chỉ bao gồm u 0-9 a-z A-Z");
		}

		success = false;
	}
	else 
	{
		// Set as normal
		$("#username").removeClass("error");
		$("#username_err").html("");
	}

	if (!ValidateAccount(user.password))
	{
		// Red border
		$("#password").addClass("error");

		if (user.password == "")
		{
			// Empty
			$("#password_err").html("* Đây là trường bắt buộc");
		}
		else 
		{
			// Set as normal
			$("#password_err").html("* Mật khẩu chỉ bao gồm tu 0-9 a-z A-Z");
		}

		success = false;
	}
	else 
	{
		// Set as normal
		$("#password").removeClass("error");
		$("#password_err").html("");
	}

	if (!ValidateRetype(user.password,user.retype))
	{
		// Red border
		$("#retype-password").addClass("error");

		// Empty
		$("#retype_err").html("* Không khớp với mật khẩu");

		success = false;
	}
	else 
	{
		// Set as normal
		$("#retype-password").removeClass("error");
		$("#retype_err").html("");
	}

	/* Email */
	if (!ValidateEmail(user.email))
	{
		// Red border
		$("#email").addClass("error");
		
		if (user.email == "")
		{
			// Empty
			$("#email_err").html("* Đây là trường bắt buộc");
		}
		else 
		{
			$("#email_err").html("* Email có dạng ex@ex.ex");
		}
		success = false;

	}
	else 
	{
		// Set as normal
		$("#email").removeClass("error");
		$("#email_err").html("");
	}
	
	if (!EulerConfirm())
	{
		$("#label_checkbox").addClass("error");
		success = false;
	}
	else 
	{
		$("#label_checkbox").removeClass("error");
	}

	return success;
}



function SendToServer () 
{
	/* Collect data */
	CollectForm();

	/* Client side validate */
	let result = ClientValidate(user);

	if (result == true) 
	{
		console.log("Validate successful");
		// Send data to server
	}
	
}
