	

var n1=document.querySelector("#n1")
var n2=document.querySelector("#n2")


var n3=document.querySelector("span1")
var n4=document.querySelector("span2")

function total(){

return	n3.innerHTML=Number(n1.value*0.5*n2.value)  /  Number(n2.value) + parseFloat(n1.value)
}



function mensal(){
 	n4.innerHTML=total()/ n2.value

}











	 	function abrirTab(evt,nomeTab){
	 		const conteudoTab=document.getElementsByClassName("conteudoTab");
	 		for(var i=0;i<conteudoTab.length;i++){
	 			conteudoTab[i].style.display="none";
	 		} 

	 		const btnTabs=document.querySelectorAll('[data-btnTabs]');

	 		for(var i=0;i<btnTabs.length;i++){
	 			btnTabs[i].classList.remove('block');	 		}
	 			document.getElementById(nomeTab).style.display="block"
	 			evt.currentTarget.classList.add("ativo");
	 		}

	 			document.getElementById("primeiro").onmouseenter();
