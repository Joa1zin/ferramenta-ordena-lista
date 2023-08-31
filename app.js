import rl from "readline-sync";
import chalk from "chalk";

class PropriedadesLista {
    constructor(){
        this.lista = [];
    };
    adicionarElemento(item){
        this.lista.push(item);
    };
    ordernarElementos(){
        this.lista.sort();
    };
    mostrarElementos(){
        return this.lista;
    };
};

const listaPropriedades = new PropriedadesLista();

function recebeOrdenaPropriedade (){
    while(true){
        const entradaUsuario = rl.question(chalk.green("Insira as propriedades desejadas (ou SAIR para encerrar): "));
        
        if(entradaUsuario.trim() === ''){
            console.log(chalk.redBright("\nEntrada vazia, por favor insira uma propriedade válida!\n"));        
        } else if (entradaUsuario.toUpperCase() != "SAIR"){
            listaPropriedades.adicionarElemento(entradaUsuario.toLowerCase());
        } else {
            break
        };
    };
    try{
        listaPropriedades.ordernarElementos();
        
        if(listaPropriedades.mostrarElementos().length == 0){
            console.log(chalk.yellowBright("Lista vazia"))
        }else {
            console.log(chalk.magenta("Propriedades ordenadas de A-Z: \n---"));
            listaPropriedades.mostrarElementos().forEach(elemento => {
            console.log(chalk.blueBright(elemento));
        });
            console.log(chalk.magenta("---"));
        }
    }catch(error){
        console.error("Ocorreu um erro ao executar a função: ", error.message);
    };
};

recebeOrdenaPropriedade();
