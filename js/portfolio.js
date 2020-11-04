function resetports() {
    document.getElementById("skills").style.removeProperty('position', 'top', 'paddingBottom', 'zIndex');

    portlinks = document.getElementsByClassName("portoption");
    for (i = 0; i < portlinks.length; i++) {
        portlinks[i].className = portlinks[i].className.replace(" portactive", "");
    }

    portlinks = document.getElementsByClassName("portoption-two");
    for (i = 0; i < portlinks.length; i++) {
        portlinks[i].className = portlinks[i].className.replace(" portactive", "");
    }

    portxt = document.getElementsByClassName("portext");
    for (i = 0; i < portxt.length; i++) {
        portxt[i].style.display = "block";
    }

    document.getElementById("portone").style.display = "flex";
    document.getElementById("porttwo").style.display = "none";

    let z = document.getElementById("portcontext");
    z.innerHTML = ``;
}

function webdesign(evt) {
    
    allports(evt);

    let z = document.getElementById("portcontext");
    z.innerHTML = `
    <div class="portflex-container">
        <div class="portflex-item-left">
            <div class="port-thumb" onclick="showMain(1)">
                <img class="active-thumb" src="/img/webdesign/gbweb_a.jpg" width="160" height="115">
            </div>
            <div class="port-thumb" onclick="showMain(2)">
                <img class="active-thumb" src="/img/webdesign/mog_a.jpg" width="160" height="115">
            </div>
            <div class="port-thumb" onclick="showMain(3)">
                <img class="active-thumb" src="/img/webdesign/sagaweb_a.jpg" width="160" height="115">
            </div>
            <div class="port-thumb" onclick="showMain(4)">
                <img class="active-thumb" src="/img/webdesign/trio_a.jpg" width="160" height="115">
            </div>
        </div>
        <div class="portflex-item-right">
            <div class="port-main">
                <img class="main-image" src="/img/webdesign/gbweb_b.jpg">
            </div>
            <div class="port-main">
                <img class="main-image" src="/img/webdesign/mog_b.jpg">
            </div>
            <div class="port-main">
                <img class="main-image" src="/img/webdesign/sagaweb_b.jpg">
            </div>
            <div class="port-main">
                <img class="main-image" src="/img/webdesign/trio_b.jpg">
            </div>
        </div>
    </div>
    `;

    let bigone = document.getElementsByClassName("port-main");
    let thumb = document.getElementsByClassName("port-thumb");
    bigone[0].style.display = "block";
    thumb[0].className += " active";
}

function javascript(evt) {
    
    allports(evt);

    let z = document.getElementById("portcontext");
    z.innerHTML = `
    <div class="snakemod">
        <p>Dois joguinhos, muito comuns em cursos de Javascript, mas que servem
        muito bem para se treinar a lógica da linguagem, criação de funções, 
        criação de efeitos e também "brincar" com o Javascript, modificando, 
        personalizando e, principalmente, experimentando métodos e funções novas, 
        que serão utilizadas, posteriormente, em aplicações profissionais.</p><br>
        <div class="port-js-img">
            <div>
                <img src="/img/javascript/snake_thumb.jpg" alt="snake" id="snakeBtn" width="100%" height="auto" onclick="opensnakemodal()">
            </div>
            <div>
                <img src="/img/javascript/memory_thumb.jpg" alt="memory" id="memBtn" width="100%" height="auto" onclick="openmemodal()">
            </div>
        </div    
    </div>
    `;
}

function graphdesign(evt) {
    
    allports(evt);

    let z = document.getElementById("portcontext")
    z.innerHTML = `
    <div class="portflex-container">
        <div class="portflex-item-left">
            <div class="port-thumb" onclick="showMain(1)">
                <img class="active-thumb" src="/img/graphdesign/remark_a.jpg" width="160" height="115">
            </div>
            <div class="port-thumb" onclick="showMain(2)">
                <img class="active-thumb" src="/img/graphdesign/logos_a.jpg" width="160" height="115">
            </div>
            <div class="port-thumb" onclick="showMain(3)">
                <img class="active-thumb" src="/img/graphdesign/foldergb_a.jpg" width="160" height="115">
            </div>
            <div class="port-thumb" onclick="showMain(4)">
                <img class="active-thumb" src="/img/graphdesign/posters_a.jpg" width="160" height="115">
            </div>
        </div>
        <div class="portflex-item-right">
            <div class="port-main">
                <img class="main-image" src="/img/graphdesign/remark_b.jpg">
            </div>
            <div class="port-main">
                <img class="main-image" src="/img/graphdesign/logos_b.jpg">
            </div>
            <div class="port-main">
                <img class="main-image" src="/img/graphdesign/foldergb_b.jpg">
            </div>
            <div class="port-main">
                <img class="main-image" src="/img/graphdesign/posters_b.jpg">
            </div>
        </div>
    </div>
    `;

    let bigone = document.getElementsByClassName("port-main");
    let thumb = document.getElementsByClassName("port-thumb");
    bigone[0].style.display = "block";
    thumb[0].className += " active";
}

function boardgames(evt) {
    
    allports(evt);

    let z = document.getElementById("portcontext");
    z.innerHTML = `
    <div class="portflex-container">
        <div class="portflex-item-left">
            <div class="port-thumb" onclick="showMain(1)">
                <img class="active-thumb" src="/img/boardgames/vineta_a.jpg" width="160" height="115">
            </div>
            <div class="port-thumb" onclick="showMain(2)">
                <img class="active-thumb" src="/img/boardgames/bob_a.jpg" width="160" height="115">
            </div>
            <div class="port-thumb" onclick="showMain(3)">
                <img class="active-thumb" src="/img/boardgames/marvel_a.jpg" width="160" height="115">
            </div>
            <div class="port-thumb" onclick="showMain(4)">
                <img class="active-thumb" src="/img/boardgames/war_cardgame_a.jpg" width="160" height="115">
            </div>
        </div>
        <div class="portflex-item-right">
            <div class="port-main">
                <img class="main-image" src="/img/boardgames/vineta_b.jpg">
            </div>
            <div class="port-main">
                <img class="main-image" src="/img/boardgames/bob_b.jpg">
            </div>
            <div class="port-main">
                <img class="main-image" src="/img/boardgames/marvel_b.jpg">
            </div>
            <div class="port-main">
                <img class="main-image" src="/img/boardgames/war_cardgame_b.jpg">
            </div>
        </div>
    </div>
    `;
    
    let bigone = document.getElementsByClassName("port-main");
    let thumb = document.getElementsByClassName("port-thumb");
    bigone[0].style.display = "block";
    thumb[0].className += " active";
}

// functions para trocar as imagens

function showMain(n) {
    changeMain(imageIndex = n);
}

function changeMain(imageIndex) {
    let i;
    let bigone = document.getElementsByClassName("port-main");
    let thumb = document.getElementsByClassName("port-thumb");

    // 'reset' das imagens e dos thumbnails
    for (i = 0; i < bigone.length; i++) {
        bigone[i].style.display = "none";
    }
    for (i = 0; i < thumb.length; i++) {
        thumb[i].className = thumb[i].className.replace(" active", "");
    }

    // ativação das imagens e dos thumbnails
    bigone[imageIndex-1].style.display = "block";
    thumb[imageIndex-1].className += " active";
}

function allports(evt) {
    window.location = "#portpanel";
    
    portlinks = document.getElementsByClassName("portoption");
    for (i = 0; i < portlinks.length; i++) {
        portlinks[i].className = portlinks[i].className.replace(" portactive", "");
    }

    portlinks = document.getElementsByClassName("portoption-two");
    for (i = 0; i < portlinks.length; i++) {
        portlinks[i].className = portlinks[i].className.replace(" portactive", "");
    }

    document.getElementById("portone").style.display = "none";
    document.getElementById("porttwo").style.display = "flex";

    evt.currentTarget.className += " portactive";
}