const navHome=document.getElementById("nav-home");
const navAbout=document.getElementById("nav-about");
const navSkills=document.getElementById("nav-skills");
const navWork=document.getElementById("nav-work");
const profileImage=document.querySelectorAll(".img,.pic,.skill-image")
const connections=document.querySelectorAll(".insta,.linkdein,.twitter,.cont-1,.cont-2,.cont-3,.cont-4,.cont-5,.cont-6");

/* observer for sclale effect */
const observer=new IntersectionObserver((enteries)=>{

    enteries.forEach((entry)=>{
        
       if(entry.isIntersecting) {
        entry.target.classList.add('show')
       
       }
       else{
        entry.target.classList.remove('show');
       }

    })
},{ threshold: 0 })
profileImage.forEach((el)=>observer.observe(el));

/* observer for fadein effect */
const observer2=new IntersectionObserver((enteries)=>{

    enteries.forEach((entry)=>{
        console.log(entry.target)
       if(entry.isIntersecting) {
        entry.target.classList.add('fadein')
       
       }
       else{
        entry.target.classList.remove('fadein');
       }

    })
},{ threshold: 0 })
connections.forEach((el)=>observer2.observe(el));