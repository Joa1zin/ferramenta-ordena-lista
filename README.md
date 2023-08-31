
# 📝 Ordena-Lista

Este é um projeto desenvolvido em Node.js que fornece uma ferramenta de ordenação de propriedades CSS em ordem alfabética.

O projeto foi desenvolvido num monorepo (um único repositório) contento a implementação do back-end, possui um caráter avaliativo com a intenção de aplicar os conceitos aprendidos durante as aulas do Módulo 04 do curso Formação Web Dev Fullstack - Resilia.



## Sumário
- [Instruções de uso](https://github.com/Joa1zin/projetoIndividual4#instruções-de-uso)
- [Tratamento de erros](https://github.com/Joa1zin/projetoIndividual4#tratamento-de-erros)
- [Referências](https://github.com/Joa1zin/projetoIndividual4#referências)


## Instruções de uso

Para utilizar essa ferramenta é necessário possuir os seguintes pré-requisitos.

### Pré-requisitos

- Ter o [Node.js](https://nodejs.org/en/) (versão utilizada: v18.17.1) instalado em sua máquina
- Clonar este repositório
- Instalar as dependências do projeto ([readline-sync](https://www.npmjs.com/package/readline-sync) e [chalk](https://www.npmjs.com/package/chalk))

Após instalar o [Node.js](https://nodejs.org/en/), siga o passo-a-passo de como clonar este repositório:

**Para clonar o projeto com HTTPS:**

```bash
  git clone https://github.com/Joa1zin/projetoIndividual4.git
```
**Com a chave SSH:**

```bash
  git clone git@github.com:Joa1zin/projetoIndividual4.git
```

**Entre no diretório do projeto:**

```bash
  cd projetoIndividual4
```

**Instale as dependências**


*Utilizando o node package manager (npm):*
```bash
  npm install
```

*Utilizando o yarn (opcional):*
```bash
  yarn install
```

**Inicie a aplicação**

*Através do  npm:*
```bash
  npm run start
```

*Através do yarn (opcional):*
```bash
  yarn start
```

### 🎉 A partir daqui,  o projeto está pronto para uso!!! 🎉

*Aqui segue um exemplo de como utilizar a ferramenta:*

- Insira a propriedade desejada e em seguida pressione a tecla Enter.

- Digite SAIR e pressione Enter para encerrar a aplicação.

➡️ **Entrada:**

```javascript
Insira as propriedades desejadas (ou SAIR para encerrar): text-align
Insira as propriedades desejadas (ou SAIR para encerrar): letter-spacing
Insira as propriedades desejadas (ou SAIR para encerrar): background-color
Insira as propriedades desejadas (ou SAIR para encerrar): sair

```

⬅️ **Saída:**
```javascript
Propriedades ordenadas de A-Z: 
---
background-color
letter-spacing
text-align
---
```
## Tratamento de erros

#### Finalizar o programa sem inserir nenhuma propriedade:
Ao digitar SAIR no programa sem ter inserido qualquer propriedade e pressionar Enter, ele retorna a frase "Lista vazia" e encerra o programa.

➡️ **Entrada:**

```javascript
Insira as propriedades desejadas (ou SAIR para encerrar): sair
```

⬅️ **Saída:**

```javascript
Lista vazia
```
#### Inserir uma entrada vazia no programa:
Ao pressionar Enter sem ter digitado qualquer caractere, o programa trata o acontecimento retornando a frase "Entrada vazia, por favor insira uma propriedade válida!" e então realiza novamente a solicitação inicial.

➡️ **Entrada:**

```javascript
Insira as propriedades desejadas (ou SAIR para encerrar): 
```

⬅️ **Saída:**

```javascript
Entrada vazia, por favor insira uma propriedade válida!
```
```javascript
Insira as propriedades desejadas (ou SAIR para encerrar): 
```


## Referências

 - [Documentação Node.js](https://nodejs.org/pt-br/docs)
 - [Readme readline-sync](https://www.npmjs.com/package/readline-sync?activeTab=readme)
 - [Readme chalk](https://www.npmjs.com/package/chalk?activeTab=readme)
 - [Getting started Yarn](https://classic.yarnpkg.com/en/docs/getting-started)

## Licença

[MIT](https://github.com/Joa1zin/projetoIndividual4/blob/main/LICENSE)





####  Feito com veemência por João Mota ⚡