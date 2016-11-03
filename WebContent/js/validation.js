function Validation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var mobileNo= document.getElementById("mobileNo").value;
	var location=document.getElementById("location").value;
	
	if((name=="")||(/^\s*$/.test(name))){
	alert(" Name can't blank");
	}
		else if(name.match(/^[a-zA-Z0-9]*$/)){

			}
	else
		{
			alert("Enter  Name here");
		}
	if((mobileNo=="")||(/^\s*$/.test(mobileNo)))
	{
	alert("Enter mobileNo here");
		}
	else if(mobileNo.length>10){
	alert("minimum ten characters")
		}
	else{alert("mobileNo here");}
if((email=="")||(/^\s*$/.test(email)))
	{
	alert("enter email here");
	}
	else if(email.match(/^[a-zA-Z0-9]*$/)){
	}
	else{alert("enetr correct format");}
if((location=="")||(/^\s*$/.test(location))){
	alert("enter location here");
	}
	else if(location.match(/^[a-zA-Z0-9]*$/)){
	}
	else
	{
	alert("enetr correct location");

	}

}