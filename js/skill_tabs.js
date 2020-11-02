function openSkill(evt, skillName) {

    var i, tabcontent, tablinks;

    // Esconde todos os conteúdos
    tabcontent = document.getElementsByClassName("skill-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Tira o "active" de todos os links
    tablinks = document.getElementsByClassName("skill-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra o conteúdo do skill, e deixa o link como "active"
    document.getElementById(skillName).style.display = "block";
    //document.getElementById("dropdown-content").style.display = "block";
    evt.currentTarget.className += " active";

}

function skillslStick() {
    document.getElementById("skills").style.position = "sticky";
    document.getElementById("skills").style.top = "5px";
    document.getElementById("skills").style.paddingBottom = "80px";
    document.getElementById("skills").style.zIndex = "10";
}

function skillsNoSticky() {
    document.getElementById("skills").style.removeProperty('position', 'top', 'paddingBottom', 'zIndex');
}

document.getElementById("HtmlCss").style.display = "block";