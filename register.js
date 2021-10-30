var btnSubmit = document.getElementById("btnSubmit");


btnSubmit.onclick = function()
{
	var name = document.getElementById("txtName").value.trim();
	var email = document.getElementById("txtEmail").value.trim();
	var phone = document.getElementById("txtNumber").value.trim();
	var address = document.getElementById("txtAddress").value.trim();
	var maleRadio = document.getElementById("maleRadio").checked;
	var femaleRadio = document.getElementById("femaleRadio").checked;
	var pass = document.getElementById("txtpass").value.trim();
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


	//req validasi
	//email harus diisi
	if(name == "")
	{
		alert("Name must be filled!!");
	}
	else if(name.length < 3)
	{
		alert("Name must be more than 3 character!!");
	}

	else if(email == "")
	{
		alert("Email must be filled!!");
	}
	else if(!validateEmail(email) 
		|| !email.endsWith(".com") 
		|| email.indexOf('@') < 3 
		|| email.indexOf('@') > email.indexOf('.') + 3 
		|| email.endsWith(".") )
	{
		alert("Email is not valid!!");
	}
	else if(phone == "")
	{
		alert("Phone number must be filled!!");
	}
	else if(isNaN(phone))
	{
		alert("Phone number must be numeric!!");
	}
	else if(address == "")
	{
		alert("Address must be filled!!");
	}
	else if(maleRadio == false && femaleRadio == false)
	{
		alert("Gender must be choosed!!");
	}

	//pass harus diisi
	else if(pass == "")
	{
		alert("Password must be filled!!");
	}
	//pass harus 5-20 char
	else if(pass.length < 8)
	{
		alert("Password must more than 8 character!!");
	}else 
	{
		window.location.href="home.html";
		
	}
	

}

function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
  return re.test(email);
}

