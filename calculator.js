/*js for task-1*/
function dis(value){
document.querySelector("#result").value+=value;
return "dis";
}
function solve(){
	var x=document.querySelector("#result").value;
	var nu=x.split("");
	if(x[0]=="a" && x[1]=="b" && x[2]=="s"){
			var r="";
			if(x[4]=="-"){
				for(var i=5;i<x.length;i++){
					r+=nu[i];
				}
			document.querySelector("#result").value=r;
			return "r"+"solve";
			}
			else{
				var r="";
				for(var i=4;i<x.length;i++){
					r+=nu[i];
				}
	        document.querySelector("#result").value=r;
	        return "r"+"solve";	
		}
}else if(x[0]=="s" && x[1]=="q" && x[2]=="r"){
			if(x[5]=="-")
			document.querySelector("#result").value="invalid input";
			else{
	        	var r="";
				for(var i=5;i<x.length;i++){
					r+=x[i];	
				}
				var square_root=Number(r)**(0.5)
				document.querySelector("#result").value=square_root;
				return "square_root"+"solve";
		}
	}
	else{
		var y=eval(x);
		document.querySelector("#result").value=y;
		return "y"+"solve";
	}
	
}
function clr(){
	document.querySelector("#result").value="";
	return "true"+"clr";
}

/*js for task-2*/

function checkname(){
	var user=document.querySelector("#username");
	var name=user.value;
	if(!isNaN(name[0])){
		document.querySelector("#error_name").innerHTML="<b style='color:red'>(*Name cannot start with a number)</b>";
		return "false"+"checkname";
	}else{
		document.querySelector("#error_name").innerHTML="";
	}
	return "true"+"checkname";
}
function checknumber(){
	    var phone=document.querySelector("#phone_num");
	    var pho=phone.value;
	    if(pho.length<10){
		document.querySelector("#error_num").innerHTML="<b style='color:red'>(*should contain 10 digits)</b>";
		return "false"+"checknumber";
		}
		for(var i=0 ;i<pho.length;i++){
			if(isNaN(pho[i])){
				document.querySelector("#error_num").innerHTML="<b style='color:red'>(*Phone number cannot contain alphabets or symbols)</b>";
				return "false"+"checknumber";
			}
		}
		document.querySelector("#error_num").innerHTML="";
		return "true"+"checknumber";
}
function checkemail(){
	 var mail=document.querySelector("#email");
	 var mail1=mail.value;
	 var flag=0;
	 for(var i=0 ;i<mail1.length;i++){
		if(mail1[i]=="."){
				flag=1;
				break;
		}
	}
	if(flag==0){	
		document.querySelector("#gmail").innerHTML="<b style='color:red'>(*should contain one . character)</b>";
		return "false"+"checkemail";
	}
	document.querySelector("#gmail").innerHTML="";
	return "true"+"checkemail";
}

function submit1(){
	if(checkemail() && checkname() && checknumber()) {
	document.querySelector("#form_submit").removeAttribute("disabled");
	document.querySelector("#warning").innerHTML="";
	return "true"+"submit";
	}
	else{
		document.querySelector("#warning").innerHTML="<b style='color:red'>please fill all of the above details correctly</b>"
	}
}
 
 /*js for task3*/

function checkPallindrome(){
	var pln=document.querySelector("#pallin").value;
	var rev;
	rev=pln.split("").reverse().join("");
	if(pln==rev){
		alert("string is a pallindrome");
		return "true"+"checkPallindrome";
	}
	alert("string is not a pallindrome");
	return "false"+"checkPallindrome";
}
function checkAnagram(){
	var str1=document.querySelector("#string").value;
	var str2=document.querySelector("#word").value;
	
	 var string1 = str1.toLowerCase().split('').sort().join('').trim();
     var string2 = str2.toLowerCase().split('').sort().join('').trim();

	if(string1 == string2){
		alert("word is an anagram of given string");
		return "true"+"checkAnagram";
	}alert("word is an not an anagram of given string");
	return "false"+"checkAnagram";
}

/*js for task4*/
function whoSurvives(){
	var obj1=document.querySelector("#Object-1").value;
	var obj2=document.querySelector("#Object-2").value;
	var obj1_u=obj1%3;
	var obj2_u=obj2%3;
	var dict={0: "Human", 1: "Cockroach" , 2: "Nuclear Bomb"};
	if(obj1=="" || obj2=="") {
		alert("provide inputs");
	}

	else if(obj1<0 || obj1>1000 || obj2<0 || obj2>1000){
		alert("invalid input, given numbers should range from [0,1000]");
		}
	else if((obj1_u ==0 && obj2_u==1) || (obj1_u ==1 && obj2_u==0)){
		alert("Human survives");
		return "Human"+"whoSurvives";
	}else if((obj1_u==1 && obj2_u==2) || (obj1_u==2 && obj2_u==1)){
		alert("Cockroach survives");
		return "Cockroach"+"whoSurvives";
	}else if((obj1_u==0 && obj2_u==2) || (obj1_u==2 && obj2_u==0)){
		alert("Human dies");
		return "Nuclear bomb"+"whoSurvives";
	}
	else{
		alert("tie");
		return "TIE"+"whoSurvives";
	}
}
