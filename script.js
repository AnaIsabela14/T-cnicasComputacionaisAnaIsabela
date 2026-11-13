const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: [
          "No início ficou com medo do que essa tecnologia pode fazer. ",
          "Achou assustador pensar na velocidade na qual a tecnologia está avançando.",
        ],
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: [
          "Quis saber como usar IA no seu dia a dia.",
          "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia.",
        ],
      },
    ],
  },
];

function respostaSelecionada(opcaoSelecionada) {
 const afirmacoes = aleatorio(opcaoSelecionada.afirmacao)
 mostraPergunta();
}
export function aleatorio (lista){
    const posicao = Math.floot(Math.random()* lista.length);
    return lista[posicao];}
    const botaoJogarNovamente = document.querySelector(novamente-btn);
    function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
botaoJogarNovamente.addEventListener("click", jogaNovamente());

}
const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda","Gustavo", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
import {aleatorio, nome} from './aleatorio.js';
caixaPerguntas.textContent = "Em 2049, …";
caixaPerguntas.textContent = `Em 2049, ${nome}`;
function substituiNome(){
for(const pergunta of perguntas){
pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
const escola = "Alura Start";

console.log(`Eu estudo na ${escola}`);

alternativas: [ 

  { 

    texto: "Isso é assustador!", 

    afirmacao: [ 

      "No início ficou com medo do que essa tecnologia pode fazer.", 

      "Achou assustador pensar na velocidade na qual a tecnologia está avançando.", 

    ], 

    proxima: 1, 

  }, 

  // código omitido 

]; 

function respostaSelecionada(opcaoSelecionada) { 

  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao); 

  historiaFinal += afirmacoes + " "; 

 

  mostraPergunta(); 

} 

function respostaSelecionada(opcaoSelecionada) { 

  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao); 

  historiaFinal += afirmacoes + " "; 

  if (opcaoSelecionada.proxima !== undefined) { 

    atual = opcaoSelecionada.proxima; 

  } else { 

    mostraResultado(); 

    return; 

  } 

  mostraPergunta(); 

} 
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
botaoIniciar.addEventListener('click', iniciaJogo);
function iniciaJogo() {
atual = 0;
historiaFinal = "";
telaInicial.style.display = 'none';
caixaPerguntas.classList.remove("mostrar");
caixaAlternativas.classList.remove("mostrar");
caixaResultado.classList.remove("mostrar");
mostraPergunta();
}
substituiNome();