document.body.addEventListener('keydown', myFunction); 
document.body.addEventListener('keyup', removeStyling); 
function myFunction(e) {
	console.log(e);
	console.log(e.key);
	var id = e.key;
	var element = document.getElementById(id);
	console.log(element);
	element.classList.add('active');
}
function removeStyling(e){
	console.log("Remove Styling");
	console.log(e);
	var id = e.key;
	var element = document.getElementById(id);
	console.log(element);
	element.classList.remove('active');
}