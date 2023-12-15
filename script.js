let c = 0
let pbtn = document.querySelector('.history')
let active = pbtn.classList.add('active')
let phover  = pbtn
    
    phover.classList.add('nohover')

let myobject = [
    {img:'his',para:'    Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team    '},
    {img:'vis',para:'According to Millard et al1, controlling the ball on the ground requires accurate motor and visual skills in order to keep opposing players away from the ball; and advance it from one end of the pitch to the other. Football requires various explosive activities, such as jumping, kicking, positioning,'},
    {img:'goals',para:'He also has the most international goals by a South American male (106). Messi has scored over 800 senior career goals for club and country, and has the most goals by a player for a single club (672).'}
]

function change(btn){

    pbtn.classList.remove('active')
   
    phover.classList.remove('nohover');

    pbtn = btn
    phover = btn

   if( btn.className == 'history'){
    c= 0
   }else if( btn.className == 'vision'){
    c = 1
   }else{
    c = 2
   }
  
     btn.classList.add('active')
     phover.classList.add('nohover')
     
   let pic =  document.getElementById('img')
       pic.src = myobject[c].img+'.jpg'

    let p = document.getElementById('p')
        p.innerHTML = myobject[c].para
  
    

}


