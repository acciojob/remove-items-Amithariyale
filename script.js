//your JS code here. If required.

const btn=document.querySelector(`form>input`);
const select=document.getElementById('colorSelect');
const options=document.getElementsByTagName('option');

btn.addEventListener('click',()=>{
	let value=select.value;
	for(let i=0;i<options.length;i++){
		console.log(value);
		console.log(options[i].value)
		if(options[i].value===value){
			options[i].remove();
			break;
		}
	}
})

