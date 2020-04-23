     document.addEventListener('DOMContentLoaded',()=>{
     const squares=document.querySelectorAll('.grid div')
     const resultDisplay=document.querySelector('#result')

    //Initialize Game
     let width = 15
     let currentShooterIndex = 202
     let currentInvaderIndex = 0
     let alienInvadersTakeDown = []
        
     let result = 0
     let direction = 1
     let invaderId

    //Define the ALien Invaders
        const alienInvaders=[
            0,1,2,3,4,5,6,7,8,9,
            15,16,17,18,19,20,
            21,22,23,24,30,31,32,
            33,34,35,36,37,38,39
        ]

    //Draw the alien invaders
        alienInvaders.forEach(invaders=> squares[currentInvaderIndex+invaders].classList.add('invader'))
    
    //Draw the shooter
        squares[currentShooterIndex].classList.add('shooter')
    
    //move the shooter along the line
        function moveShooter(e){
            squares[currentShooterIndex].classList.remove('shooter')
            switch(e.keyCode){
                case 37:
                    if(currentShooterIndex % width !==0) currentShooterIndex -=1 //move left
                    break;
                case 39:
                    if(currentShooterIndex % width < width-1)currentShooterIndex +=1 //move right
                    break;
            }
            squares[currentShooterIndex].classList.add('shooter')
            
        }

    //add event listener for moving shooter
        document.addEventListener('keydown',moveShooter)
 })