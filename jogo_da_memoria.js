const front = "front_card"
const back = "back_card"
const card_cartas = "card"
const ICON = "icon"


startgamer();

function startgamer() {
    
    html_cartas(game.criando_cartas())
  
    
   

}
function html_cartas(cards){
    let tabuleiro = document.getElementById("tabuleiro")
    tabuleiro.innerHTML =  ' '
    
    game.cards.forEach(card =>{
        let cardelement = document.createElement('div')
        cardelement.id = card.id;
        cardelement.classList.add(card_cartas)
        back_front(card, cardelement)
        cardelement.dataset.icon = card.icon
        cardelement.addEventListener("click", flip)
        tabuleiro.appendChild(cardelement)

        
    });
}
function back_front(card, cardelement){
    createcacardface(front, card, cardelement)
    createcacardface(back, card, cardelement)
    
}
function createcacardface(face, card, element){
       let cardelementFace = document.createElement("div")
       cardelementFace.classList.add(face)
       if (face === front){
           let iconelement = document.createElement('img')
           iconelement.classList.add(ICON)
           
           iconelement.src = "./imagens/" + card.icon +".png"
           
           cardelementFace.appendChild(iconelement)
           
       }else{
           cardelementFace.innerHTML = " &lt/&gt"
        
    
       }
    
       element.appendChild(cardelementFace)
}





function flip () {
     if(game.setCard(this.id)){
    this.classList.add("flip")
    if(game.secondCard){
   if(game.checkMath()){
       game.clearCard()
       if (game.checkGameOver()){
           let game_over = document.getElementById("game_over")
           game_over.style.display = "flex"
       }
   }else{
       setTimeout( () => {
           let firstCardView = document.getElementById(game.firstCard.id)
           let secondCardView = document.getElementById(game.secondCard.id)
           firstCardView.classList.remove('flip')
           secondCardView.classList.remove('flip')
           game.unflipCard()
              
       }, 1000);
    }
}
       
     }
}
function restart(){
        game.clearCard()
        startgamer()
        let game_over = document.getElementById("game_over")
        game_over.style.display = "none"
}