let game = {
    
     lockModel: false,
     firstCard: null,
     secondCard: null,

     setCard: function(id){
       let card = this.cards.filter( card => card.id === id)[0]
       if(card.flipped || this.lockModel) {
           return false
       }
       if(!this.firstCard){
           this.firstCard = card
           this.firstCard.flipped = true
           return true 
       }else{
           this.secondCard = card
           this.lockModel =true
           this.secondCard.flipped = true
           return true
       }
     },
     checkMath: function(){
         if(!this.firstCard || !this.secondCard){
             return false
         }
         return this.firstCard.icon === this.secondCard.icon
     },
     clearCard: function(){
        this.firstCard = null
        this.secondCard = null
        this.lockModel = false
     },
     unflipCard: function(){
            this.firstCard.flipped = false
            this.secondCard.flipped = false
            this.clearCard()
     },
     checkGameOver: function(){
        return this.cards.filter(card=>!card.flipped).length == 0
     },

    techs: [
        "bootstrap",
        "css",
        "electron",
        "html",
        "jquery",
        "mongo",
        "node",
        "react",
        "firebase",
        "javascript"],
    cards: null,

    criando_cartas: function () {
        this.cards = [];
        this.techs.forEach((tech) => {
            this.cards.push(this.criandoopar(tech))

        });
        this.cards = this.cards.flatMap(pair => pair)
        this.enbaralhar()
        return this.cards
    },


    criandoopar: function (tech) {
        return [{
            id: this.criadordeid(tech),
            icon: tech,
            flipped: false,

        }, {
            id: this.criadordeid(tech),
            icon: tech,
            flipped: false
        }]
    },
    criadordeid: function (tech) {
        return tech + parseInt(Math.random() * 1000)
    },

    enbaralhar: function (cards) {
        let lista = this.cards.length
        let aleatorio = 0;

        while (lista !== 0) {

            aleatorio = Math.floor(Math.random() * lista)
            lista--

            [this.cards[aleatorio], this.cards[lista]] = [this.cards[lista], this.cards[aleatorio]]
            console.log(cards)
        }


    }

}