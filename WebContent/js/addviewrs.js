function view()
{
	//main div
	var div=document.createElement("div");
	div.setAttribute("id","");
	document.body.appendChild(div);


	// header div
	var div1=document.createElement("div");
	div1.setAttribute("class","head");
	div.appendChild(div1);

	//create list

var ul=document.createElement("ul");
	div1.appendChild(ul);
	var li1=document.createElement("li");
	var text1=document.createTextNode("fedena");
	li1.appendChild(text1);
	li1.setAttribute("class","fedena");
	ul.appendChild(li1);


var li6=document.createElement("li");
	var image=document.createElement("img");
	image.setAttribute("src","../images/1.jpg");
	li6.setAttribute("class","list");
	image.setAttribute("height","50px");
	image.setAttribute("width","50px");
	li6.appendChild(image);
	ul.appendChild(li6);

	var li5=document.createElement("li");
	var a=document.createElement("a");
	a.setAttribute("href","register.html");
	li5.appendChild(a);	
	var text5=document.createTextNode("TryFreeDemo");
	a.appendChild(text5);
	li5.setAttribute("class","list1");
	a.setAttribute("id","active");

	ul.appendChild(li5);

	var li4=document.createElement("li");
	var text4=document.createTextNode("Company");
	li4.appendChild(text4);
	li4.setAttribute("class","list");
	ul.appendChild(li4);

	var li3=document.createElement("li");
	var text3=document.createTextNode("Pricing");
	li3.appendChild(text3);
	li3.setAttribute("class","list");
	ul.appendChild(li3);

	var li2=document.createElement("li");

	var text2=document.createTextNode("Product");
	li2.appendChild(text2);
	li2.setAttribute("class","list");
	ul.appendChild(li2);

	//body div
	var divb=document.createElement("div");
	divb.setAttribute("class","content");
	div.appendChild(divb);


	var p1=document.createElement("p");
	var te=document.createTextNode("All-in-One College and School Management Software");
	p1.appendChild(te);
	p1.setAttribute("class","pp");
	divb.appendChild(p1);

	var p2=document.createElement("p");
	var tex=document.createTextNode("Automate Everything,Generate insightful reports,Make better and faster decisions");
	p2.appendChild(tex);
	p2.setAttribute("class","ppp");
	divb.appendChild(p2);

var inputdiv=document.createElement("div");
inputdiv.setAttribute("class","inp");
	var textbox=document.createElement("input");
	
	textbox.setAttribute("class","box");
	inputdiv.appendChild(textbox);
	divb.appendChild(inputdiv);

	var but=document.createElement("button");
	var tt=document.createTextNode("Get your free Demo");
	but.appendChild(tt);
	but.setAttribute("class","butt");
	inputdiv.appendChild(but);




}