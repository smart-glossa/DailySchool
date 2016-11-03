function register()
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
		li5.setAttribute("id","active");
	var text5=document.createTextNode("TryFreeDemo");
	li5.appendChild(text5);
	li5.setAttribute("class","list1");

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


	// body div
	var bodydiv=document.createElement("div");
	bodydiv.setAttribute("class","con");
	div.appendChild(bodydiv);

	var padiv=document.createElement("div");
	padiv.setAttribute("class","p1");

	var pa=document.createElement("p");
	var texx=document.createTextNode("Try Fedena School ERP Software free for 14 days");
	pa.appendChild(texx);
	padiv.appendChild(pa);
	bodydiv.appendChild(padiv);

	var imgdiv=document.createElement("div");
	imgdiv.setAttribute("class","imgs");

	var im=document.createElement("img");
	im.setAttribute("src","../images/2.png");
	imgdiv.appendChild(im);
	bodydiv.appendChild(imgdiv);

	var line=document.createElement("p");
	var tx=document.createTextNode("Get started with Fedena School ERP");
	line.setAttribute("class","line");
	line.appendChild(tx);
	imgdiv.appendChild(line);

	var line1=document.createElement("p");
	var tx1=document.createTextNode("1.  Watch a recorded demo.");
	line1.appendChild(tx1);
	line1.setAttribute("class","line1");
	imgdiv.appendChild(line1);

	var line2=document.createElement("p");
	var tx3=document.createTextNode("2.  Read articles on our Support portal.");
	line2.appendChild(tx3);
	line2.setAttribute("class","line1");
	imgdiv.appendChild(line2);


	//input div//

	var maindiv=document.createElement("div");
	maindiv.setAttribute("class","hole");
	bodydiv.appendChild(maindiv);

var inputdiv=document.createElement("div");
inputdiv.setAttribute("class","reg");
maindiv.appendChild(inputdiv);


//table//

var table=document.createElement("table");
inputdiv.appendChild(table);
var tr=document.createElement("tr");
table.appendChild(tr);
var td=document.createElement("td");
var t=document.createTextNode("Name");
td.appendChild(t);
tr.appendChild(td);

var tr1=document.createElement("tr");
table.appendChild(tr1);
var td1=document.createElement("td");
tr1.appendChild(td1);
var inps=document.createElement("input");
inps.setAttribute("placeholder","firstname");
td1.appendChild(inps);
inps.setAttribute("class","inpt");
inps.setAttribute("id","name");
inputdiv.appendChild(table);

var tr3=document.createElement("tr");
var td3=document.createElement("td3");
tr3.appendChild(td3);
table.appendChild(tr3);
var t1=document.createTextNode("Email");
td3.appendChild(t1);


var tr2=document.createElement("tr");
var td2=document.createElement("td");
tr2.appendChild(td2);

var email=document.createElement("input");
email.setAttribute("class","inpt");
email.setAttribute("placeholder","Email");
email.setAttribute("id","email");
td2.appendChild(email);
table.appendChild(tr2);


var trs=document.createElement("tr");
var tds=document.createElement("td");
trs.appendChild(tds);
table.appendChild(trs);
var t2=document.createTextNode("MobileNo");
tds.appendChild(t2);

var trs1=document.createElement("tr");
var tds1=document.createElement("td");
trs1.appendChild(tds1);
table.appendChild(trs1);
var mob=document.createElement("input");
mob.setAttribute("class","inpt");
mob.setAttribute("placeholder","MobileNo");
mob.setAttribute("id","mobileNo");
tds1.appendChild(mob);


var trss=document.createElement("tr");
var tdss=document.createElement("td");
trss.appendChild(tdss);
table.appendChild(trss);
var t3=document.createTextNode("Location");
tdss.appendChild(t3);

var trss1=document.createElement("tr");
var tdss1=document.createElement("tdss1");
trss1.appendChild(tdss1);
var loc=document.createElement("input");
loc.setAttribute("class","inpt");
loc.setAttribute("placeholder","city name");
loc.setAttribute("id","location")
tdss1.appendChild(loc);
table.appendChild(trss1);

var trr1=document.createElement("tr");
var tdd=document.createElement("td");
trr1.appendChild(tdd);
table.appendChild(trr1);
var te=document.createTextNode("Name of institution");
tdd.appendChild(te);

var trr2=document.createElement("tr");
var tdd2=document.createElement("td");
trr2.appendChild(tdd2);
table.appendChild(trr2);
var ins=document.createElement("input");
ins.setAttribute("class","inpt");
ins.setAttribute("placeholder","name of institution");
ins.setAttribute("id","inst")
tdd2.appendChild(ins);


var trr3=document.createElement("tr");
var tdd3=document.createElement("td");
trr3.appendChild(tdd3);
table.appendChild(trr3);
var te=document.createTextNode("Your role in the Institution");
tdd3.appendChild(te);

var trr4=document.createElement("tr");
var tdd4=document.createElement("td");
trr4.appendChild(tdd4);
table.appendChild(trr4);
var role=document.createElement("input");
role.setAttribute("class","inpt");
role.setAttribute("placeholder","eg. IT director,Hod");
role.setAttribute("id","role");

tdd4.appendChild(role);


var trr5=document.createElement("tr");
var tdd5=document.createElement("td");
trr5.appendChild(tdd5);
table.appendChild(trr5);
var te=document.createTextNode("Website");
tdd5.appendChild(te);

var trr6=document.createElement("tr");
var tdd6=document.createElement("td");
trr6.appendChild(tdd6);
table.appendChild(trr6);
var web=document.createElement("input");
web.setAttribute("class","inpt");
web.setAttribute("placeholder","Website link");
web.setAttribute("id","website");
tdd6.appendChild(web);


var trr7=document.createElement("tr");
var tdd7=document.createElement("td");
trr7.appendChild(tdd7);
table.appendChild(trr7);
var te=document.createTextNode("Message");
tdd7.appendChild(te);

var trr8=document.createElement("tr");
var tdd8=document.createElement("td");
trr8.appendChild(tdd8);
table.appendChild(trr8);
var mes=document.createElement("textarea");
mes.setAttribute("class","inpt");
mes.setAttribute("placeholder","if u have any queries about fedena");
mes.setAttribute("id","message");
tdd8.appendChild(mes);

var trr9=document.createElement("tr");
var tdd9=document.createElement("td");
trr9.appendChild(tdd9);
table.appendChild(trr9);
var submit=document.createElement("button");
var tec=document.createTextNode("SEND");
submit.appendChild(tec);
submit.setAttribute("id","send");
submit.setAttribute("onClick","Validation()");
tdd9.appendChild(submit);

}