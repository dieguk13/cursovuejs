var app = new Vue ({
el: ".vue",
data: {
    mensaje: "Aprende vue.js fácilmente",
    src:"https://es.vuejs.org/images/logo.png"
},
methods: {
    mostrarMensaje: function () {
        //return "Aprende vue.js facilmente versión 2"
        return this.mensaje;
    }
}
})