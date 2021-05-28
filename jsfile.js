var myNav = document.getElementById(`mynav`);

window.addEventListener('scroll', (event)=>{
    if(this.scrollY > 300){
       myNav.style = `background-color:black; -webkit-backdrop-filter: blur(1spx);backdrop-filter: blur(30px);`;
    }else{
        myNav.style = `-webkit-backdrop-filter: blur(8px);backdrop-filter: blur(5px);`;
    } 
});