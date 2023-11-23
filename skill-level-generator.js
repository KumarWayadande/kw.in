window.addEventListener('scroll', setSkill);
window.addEventListener('scroll', reveal); 



function changeColor(thisElemenet, flag){
    thisElemenet.childNodes[1].childNodes[1].style.color = (flag === 1 ? "#8b865c" : "white");
}



// Distance when line should start to fill : 615

function setSkill(){

        let currentDistance = document.getElementsByClassName('section-4-container')[0].getBoundingClientRect().top;
        let levelNumber = document.getElementsByClassName('skill-level');
        let levelWidth =  document.getElementsByClassName('skills-inner-progress-bar');
        if(currentDistance <= 653){
            

            for(let i = 1; i <= 100; i++){
                if(i <= 87){
                    levelNumber[0].innerHTML = i+"%";
                    levelWidth[0].style.width=i+"%";
                }

                if(i <= 92){
                    levelNumber[1].innerHTML=i+"%";
                    levelWidth[1].style.width=i+"%";
                }

                if(i <= 72){
                    levelNumber[2].innerHTML=i+"%";
                    levelWidth[2].style.width=i+"%";
                }

                if(i <= 45){
                    levelNumber[3].innerHTML=i+"%";
                    levelWidth[3].style.width=i+"%";
                }

                if(i <= 77){
                    levelNumber[4].innerHTML=i+"%";
                    levelWidth[4].style.width=i+"%";
                }
            }
           
            }
            else{
                for(let i = 0; i < levelNumber.length; i++){
                    levelNumber[i].innerHTML = "0%";
                    levelWidth[i].style.width = "0%";
                }
            }
 
}





                         // Registering a scroll event
function reveal(){
    var reveals = document.querySelectorAll('.reveal');             // List of sections with reveal class
    // alert(reveals[0].getBoundingClientRect().top)        
    for(var i = 0; i < reveals.length; i++){        
        var windowHeight = window.innerHeight;                      // Current Window height except navbar
        var revealTop = reveals[i].getBoundingClientRect().top;     // Distance of sections from top side
        var revealpoint=150; // pixels by which a section is pushed below

        if(revealTop < windowHeight - revealpoint){                 // if distance to the section is less 
            reveals[i].classList.add('active');                     // than 360 then attach active class
        }
        else
            reveals[i].classList.remove('active');                  // When distance is too much remove the active class
    }
}

// 915 < 565
// window height - 715 common
// reveal point 150px 
// starting point is 901px
// 306px for first animation
// 915 < 710 - 306