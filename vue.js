var app = new Vue ({
el: ".vue",
data: {
    mensaje: "Aprende vue.js fácilmente"
},
methods: {
    mostrarMensaje: function () {
        //return "Aprende vue.js facilmente versión 2"
        return this.mensaje;
    }
}
})