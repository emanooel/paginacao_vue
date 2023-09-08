const cursos = new Vue({
    el: '#cursos',
    data: {
        por_pagina:4,
        pagina_atual:1,
        num_paginas:0,
        cursos: [],
        cursos_paginados: []
    },
    methods: {
        getCursos() {
            fetch("https://dev11senaces.arcohosting05.com.br/backend/cursos.php")
            .then(res => res.json())
            .then(data => {
                this.cursos = data
                this.num_paginas = Math.ceil(this.cursos.length / this.por_pagina)
            })
            .then(()=>{
                this.cursos_paginados = this.cursos.slice(0, this.por_pagina)
            })
        },
        mudaPagina(e){
            let de = (e.target.value - 1) * this.por_pagina;
            let ate = de + this.por_pagina;
            this.cursos_paginados = this.cursos.slice(de, ate)
            console.log("De:",de, "Até", ate)
        },
        toFirst(){
            this.pagina_atual = 1
            this.mudaPagina({target:{value:1}})
        },
        toLast(){
            this.pagina_atual = this.num_paginas
            this.mudaPagina({target:{value:this.num_paginas}})
        }
    },
    created(){
        this.getCursos()
    }
})