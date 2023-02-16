const toggle = document.querySelector(".toggle-item"),
      body=document.querySelector('body'),
      content=document.getElementById('context');


      toggle.addEventListener("click", function(){
        this.classList.toggle("active");
        body.classList.toggle("active");

        // function to change content from light -- dark

        if(toggle.classList.contains("active")){
            content.innerHTML="Dark Mode";
        }else{
            content.innerHTML="Light Mode";
        }
      });