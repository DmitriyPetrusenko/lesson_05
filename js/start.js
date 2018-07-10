elem.onclick = function () {	
var picture = document.body.appendChild ( document.createElement ( 'img' ) )
picture.style.transition = "all 2s"
picture.style.width = "200px"
picture.src = "http://easyscienceforkids.com/wp-content/uploads/2013/04/Giraffe-Couple.jpg"
picture.onclick = function ( event ) {
        this.src = ""
        window.open ("index.html")
}
picture.onmouseenter = function ( event ) {
        this.style.width = "400px"
}
picture.onmouseleave = function ( event ) {
        this.style.width = "100px"
}
}
