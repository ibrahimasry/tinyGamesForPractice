const start = document.querySelector('#start')
const playerTurn = document.querySelector('#turn')
const topleft = document.querySelector('#topleft')
const topright = document.querySelector('#topright')
const bottomright = document.querySelector('#bottomright')
const bottomleft = document.querySelector('#bottomleft')
const colorsToBeClicked = document.querySelector('#colors')



let count = 0
let randomValues
let playerClickedColor =[]
let pc = true
let loser
let win
let startGame= false


function changeColor(e){
  if(e ===1) {
      topleft.style.background = "lightgreen"
      setTimeout(()=>topleft.style.background="darkgreen", 500)
  }
  if(e ===2) {
    topright.style.background = "red"
    setTimeout(()=>topright.style.background="darkred", 500)

    
}
if(e ===3) {
    bottomright.style.background = "blue"
    setTimeout(()=>bottomright.style.background="darkblue", 500)


}
if(e ===4) {
    bottomleft.style.background = "white"
    setTimeout(()=>bottomleft.style.background="grey", 500)


}





}
start.addEventListener('click', (e)=> {
    randomValues = Array.from({length:4}, ()=>Math.ceil(Math.random() *4))

   count =1
   playerTurn.textContent = ""
   loser = win = false
   startGame = true

    for (let i = 0; i < count; i++) {        
        setTimeout(() => {
            changeColor(randomValues[i])   
           }, (i+1)*2000);   
    }
   pc =false
    
}
)


colorsToBeClicked.addEventListener('click', (e)=>{
    let color = parseInt(e.target.classList[0], 10)    
    if(!pc && !loser && !win && startGame){
        playerClickedColor.push(color) 
        changeColor(color)
        check()
    }

})
       
function check(){
    if(playerClickedColor.length === count){
         for (const [i, v] of playerClickedColor.entries()) {
              if(randomValues[i] !== v){                  
                   return loserMode()
              }
             
            }
            if(playerClickedColor.length === randomValues.length){
                win = true
                playerTurn.textContent = "win"
                return

            }
            nextRound()

}
}

function reset(){
    playerTurn.style.background = 'white'
    startGame = false
    count =1
    playerClickedColor =[]
}

function colorFlashing (){
    pc = true
    for (let i = 0; i < count; i++) {        
        setTimeout(() => {
         changeColor(randomValues[i])   
        },(i+1)*2000);   
     }
     pc = false

}

function loserMode(){
    playerTurn.textContent = "loser"
    reset()
    loser= true
}

function nextRound(){
    playerClickedColor=[]
    count++
    colorFlashing()

}
