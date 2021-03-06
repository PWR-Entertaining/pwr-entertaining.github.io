var partList = {
    1: "playstation_part",
    2: "xbox_part",
    3: "nintendo_part",
    4: "pc_part"
}

var openCard = function () {
    var parentEl = this.parentNode;
    for(var i = 1; i<=4; i++){
        for(var j = 5; j<=15; j += 5){
            parentEl.children[i].classList.remove(`game_card_move_left_${j}px`)//
        }
    }
    changeCard.call(this);
    this.setAttribute("style", "margin-left:0px; z-index: 11;");
    this.setAttribute("onclick", 'openGamePage.call(this)'); //назначает onclick переход на страницу с игрой
}

var changeCard = function (){
    var parentEl = this.parentNode;
    parentEl.children[0].classList.add('game_link_logo_only_display_none');

    var countMove = 5;
    for(var i = 1; i<=4; i++){
        parentEl.children[i].classList.remove(`${partList[i]}_hover`);
        parentEl.children[i].removeAttribute("style");
        if(parentEl.children[i] != this){ //просматриваем все карточки кроме нажатой
            parentEl.children[i].classList.add(`game_card_move_left_${countMove}px`) //добавляем им новые классы
            parentEl.children[i].setAttribute("onclick", 'openCard.call(this)');//возвращает нажатие на div "part" ссылка на метод
            countMove += 5;
        }
    }
}

var mouseLeave = function (){
    this.children[0].classList.remove('game_link_logo_only_display_none');
    removeCertainAttributes.call(this)
}

var openGamePage = function(){
    var parentEl = this.parentNode;
    parentEl.children[0].classList.remove('game_link_logo_only_display_none');
    removeCertainAttributes.call(parentEl)
    location.href = "page_game.html";
}

 var removeCertainAttributes = function(){
    for(var i = 1; i<=4; i++){
        this.children[i].removeAttribute("style");
        this.children[i].removeAttribute("onmouseup");
        this.children[i].setAttribute("onclick", 'openCard.call(this)');
        this.children[i].classList.add(`${partList[i]}_hover`);
        this.children[i].classList.remove(`game_card_move_left_5px`, `game_card_move_left_10px`, `game_card_move_left_15px`);
    }
 }