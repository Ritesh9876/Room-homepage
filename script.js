var RoomModule=(function(){
    
    function slideRight(){
        let index;
        const Allimg=document.querySelectorAll(".slide");
        const details=document.querySelectorAll(".intro-hero");
         if(Allimg[Allimg.length-1].classList.contains("active")){
            Allimg[Allimg.length-1].classList.remove("active");
            details[details.length-1].classList.remove("active");
            Allimg[0].classList.add("active");
           details[0].classList.add("active");
         }
        else{
             for(let i=0;i<Allimg.length;i++){
                 if(Allimg[i].classList.contains("active")){
                    Allimg[i].classList.remove("active");
                    details[i].classList.remove("active");
                    index=i;
                 }
             }
             Allimg[index+1].classList.add("active");
             details[index+1].classList.add("active");
        }

    }

    function slideLeft(){
        let index;
        const Allimg=document.querySelectorAll(".slide");
        const details=document.querySelectorAll(".intro-hero");
        if(Allimg[0].classList.contains("active")){
            Allimg[0].classList.remove("active");
            Allimg[Allimg.length-1].classList.add("active"); 
            details[0].classList.remove("active");
            details[Allimg.length-1].classList.add("active"); 

        }else{
            for(let i=0;i<Allimg.length;i++){
                if(Allimg[i].classList.contains("active")){
                   Allimg[i].classList.remove("active");
                   details[i].classList.remove("active");
                   index=i;
                }
            }
            Allimg[index-1].classList.add("active");
           details[index-1].classList.add("active");
       
        }

    }
    function toggleMenu(e){
const menubar=document.querySelector(".toggleMenu a");
const items=document.querySelectorAll(".itm");
const logo=document.querySelector(".logo")

if(items[3].style.display===""||items[3].style.display==="none"){
items.forEach((item)=>{
    item.style.display="block";
});
logo.style.display="none";
menubar.innerHTML='<i class="fas fa-times"></i>';
}else{
    items.forEach((item)=>{
        item.style.display="none";
    });
    logo.style.display="block";
menubar.innerHTML='<i class="fas fa-bars"></i>';
}
    }
    return {slideRight,slideLeft,toggleMenu}
}());




const rightArrow=document.querySelector(".right-arrow");
rightArrow.addEventListener("click",RoomModule.slideRight);

const leftArrow=document.querySelector(".left-arrow");
leftArrow.addEventListener("click",RoomModule.slideLeft);


const toggle=document.querySelector(".toggleMenu a");4

toggle.addEventListener("click",RoomModule.toggleMenu);