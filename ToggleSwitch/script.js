document.addEventListener("DOMContentLoaded",function(){
    const toggleSwitch=document.getElementById("toggleswitch");
    const container=document.getElementsByClassName("container");

    toggleSwitch.addEventListener("click",function(){
        toggleSwitch.classList.toggle("on");

        if(toggleSwitch.classList.contains("on")){
            container.style.backgroundColor="#4caf50;"
        }
        else{
            container.style.backgroundColor="#ccc";
        }

    });
});