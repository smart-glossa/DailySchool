$(window).on('load',function() {
	$(document).on('click','#send',function(){

		// Getting input from TextBox (from the add project)
		var name =$('#name').val();
	   var  email=$('#email').val();
		var mobileNo=$('#mobileNo').val();
		var location =$('#location').val();
		var inst=$('#inst').val();
		var role=$('#role').val();
		var website=$('#website').val();
		var message=$('#message').val();
		var url="/DailySchool/register?operation=register&name="+ name +"&email="+ email +"&mobileNo="+ mobileNo +"&location="+ location +"&inst=" + inst +"&role=" + role +"&website="+ website +"&message="+ message;
		$("input[type=text],textarea").val("");
		$.ajax(url)
		.done(function(result) {  // result is the response from Server
			//console.log(result); 

			alert(result);
		})
		.fail(function(result) {  
		alert(result);
		});

	});
});