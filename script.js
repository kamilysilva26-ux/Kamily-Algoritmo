const avanca = document.querySelectorAll (".btn proximo");
avanca.forEach(button =>{
 button.addEventListener("click",function(){
    const atual=document.querySelector(".ativo");
    const proximoPasso="passo-"+this.getAtrttibute("data-proximo");
    document.getElementById(proximoPasso).classList.add("ativo");
 })

})