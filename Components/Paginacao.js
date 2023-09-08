export default{
    props:[
        "items",
        "por_pagina"
    ],
    name:"paginacao",
    template:``,
    data(){
        return{
            pagina_atual:1,
            num_paginas:0,
        }
    },
    methods: {
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
}