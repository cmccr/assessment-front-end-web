console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}

let img = document.querySelector('img').addEventListener('mouseover', () => {
	alert("You're Smart")
})



let form = document.querySelector('form#contact');

form.addEventListener('submit', alert('submitted sucessfully'));
