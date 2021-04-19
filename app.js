const app = new Vue({
    el: "#app",
    data: {
        tituloPagina: 'Lista de Twwets con VueJS',
        titulo: '',
        tarea: '',
        importancia: '',
        estado: false,
        arrayTareas: [],
        alerta: false
    },
    methods: {
        agregarTarea(){
            if(this.titulo.length == 0 || this.tarea.length == 0 || this.importancia.length == 0){
                this.alerta = true
                setTimeout(() => {
                    this.alerta = false
                }, 2000);
                return;
            }
            let objTarea;
            objTarea = {
                titulo: this.titulo,
                tarea: this.tarea,
                importancia: this.importancia,
                estado: this.estado
            }
            this.arrayTareas.push(objTarea);
            this.titulo = '';
            this.tarea = '';
        },
        eliminarTarea(index){
            this.arrayTareas.splice(index,1);
        },
    },
    computed: {
        color(){
            return {
                'border': true
            }
        },
        totalTareas(){
            return this.arrayTareas.length;            
        },
        completas(){
            let completas = 0;
            for(item of this.arrayTareas){
                if(item.estado == true){
                    completas++
                }
            }
            return completas;
        },
        incompletas(){
            let incompletas = 0;
            for(item of this.arrayTareas){
                if(item.estado == false){
                    incompletas++
                }
            }
            return incompletas;
        },
       
    }
})