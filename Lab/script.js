function message(){
    event.preventDefault();
    alert("Hello")
	var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;

    alert(name+" , thank you for your details. We will be in touch via "+email+" shortly.")
    hide();
}

function hide(){

    document.getElementById("form").style.display="none";

}