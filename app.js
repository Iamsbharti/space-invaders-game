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
    const alienInvaders = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39
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
    
    //move the alien invaders
    function moveInvaders() {
        //get extreme edges
        const leftEdge = alienInvaders[0] % width === 0
        const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1

        //compute new directions
          if((leftEdge && direction === -1) || (rightEdge && direction === 1)){
            direction = width
          } else if (direction === width) {
          if (leftEdge) direction = 1
          else direction = -1
          }
          //remove invader class
          for (let i = 0; i <= alienInvaders.length - 1; i++) {
            squares[alienInvaders[i]].classList.remove('invader')
          }
          //add new directions to th alien invaders
          for (let i = 0; i <= alienInvaders.length - 1; i++) {
            alienInvaders[i] += direction
          }
          //add invader class to new invaders array
          for (let i = 0; i <= alienInvaders.length - 1; i++) {
            squares[alienInvaders[i]].classList.add('invader')
          }
          //Game over condition 1
            if(squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
                resultDisplay.textContent = 'Game Over'
                squares[currentShooterIndex].classList.add('boom')
            clearInterval(invaderId)
            }
          //Game over condition 2
            for (let i = 0; i <= alienInvaders.length - 1; i++){
                if(alienInvaders[i] > (squares.length - (width -1))){
                    resultDisplay.textContent = 'Game Over'
                    clearInterval(invaderId)
                }
            }
      }
      //Add interval for moving invaders
      invaderId = setInterval(moveInvaders, 500)



 })