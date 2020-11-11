function personality(){
	const name=document.getElementById("nameid").value;
	document.getElementById("imgcharge").src = "https://joeschmoe.io/api/v1/"+name;
}

function reset(){
    document.getElementById("nameid").value="";
    document.getElementById("imgcharge").src= "img.gif";
}