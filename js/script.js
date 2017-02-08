nav = document.getElementsByTagName('nav')[0];
links = nav.getElementsByTagName('a');

for (var i=0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        document.getElementsByClassName('selected')[0].className = "";
        this.className = 'selected';
    })
}
