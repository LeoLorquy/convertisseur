function number(){
    let number = nameInput.value
    alert ("vous voulez convertir:" + " " + number + " " + "?")

    let nb_secondes = number;
    let nb_heures = Math.floor(nb_secondes / 3600);
    let res_heures = nb_secondes % 3600;
    let nb_minutes = Math.floor(res_heures / 60);
    let res_minutes = res_heures % 60;

    document.getElementById('p').innerHTML = "secondes:" + nb_secondes;
    document.getElementById('p1').innerHTML = nb_heures + ":" + "heures" + "  " + nb_minutes + ":" + "minutes" + "  " + res_minutes + ":" + "secondes";
    document.getElementById('p2').innerHTML = nb_heures + ":" + nb_minutes + ":" + res_minutes;
    document.getElementById('title').innerHTML = nb_heures + ":" + nb_minutes + ":" + res_minutes;

    document.getElementsByClassName("form")[0].style = "display: none;";
    document.getElementsByClassName("form2")[0].style = "display: none;";
    document.getElementsByClassName("cheh")[0].style = "display: none;";
}
number();

function jour(){
    let jour = nameInput2.value
    alert ("vous voulez savoir combien de h, m, s fait" + " " + jour + " " + "jour" + " " + "?")

    let nb_j = jour;
    let heures = nb_j * 24;
    let minutes = nb_j * 1440;
    let secondes = nb_j * 86400;

    document.getElementById('j').innerHTML = nb_j + " " + "jour" + " " + "=" + " " + heures + " " + "heures";
    document.getElementById('j1').innerHTML = nb_j + " " + "jour" + " " + "=" + " " + minutes + " " + "minutes";
    document.getElementById('j2').innerHTML = nb_j + " " + "jour" + " " + "=" + " " + secondes + " " + "secondes";
    document.getElementById('title').innerHTML = "j" + nb_j +"h" + heures + "m" + minutes + "s" + secondes;

    document.getElementsByClassName("form")[0].style = "display: none;";
    document.getElementsByClassName("form2")[0].style = "display: none;";
    document.getElementsByClassName("cheh")[0].style = "display: none;";
}
jour();

function chehbut(){
    document.getElementsByClassName('cheh')[0].innerHTML = "Cheh !" + " " + "<img height='25px' src='cursor.png'/>";
    document.getElementsByClassName('chehb')[0].style = "cursor: none;";
    document.getElementsByClassName('cheh')[0].style = "cursor: none;";
    document.getElementsByClassName('button-c')[0].style = "cursor: none;";
    document.getElementsByClassName('button-c2')[0].style = "cursor: none;";
}
chehbut();