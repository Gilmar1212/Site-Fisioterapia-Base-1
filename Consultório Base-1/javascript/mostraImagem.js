const btnAnimate1 =document.querySelector("#btn-1");
const btnAnimate2 =document.querySelector("#btn-2");
const btnAnimate3 =document.querySelector("#btn-3");
const btnAnimate4 =document.querySelector("#btn-4");
const imagem1 =document.querySelector("#img1");	
const imagem2 =document.querySelector("#img2");
const imagem3 =document.querySelector("#img3");	
const imagem4 =document.querySelector("#img4");		

	//faz animação da imagem suave
	function animaImagem(imagem,botao){
		botao.addEventListener("mouseover",function(){
			mostraImagem(imagem);

			});	
		}
	
	//retira animação da imagem suave
		function retornaImagem(imagem,botao){
		botao.addEventListener("mouseleave",function(){
			retiraImagem(imagem);	
			
			});			
		}
	//retorna a opacidade e animação da imagem
 		function mostraImagem(imagem){
 			imagem.style.opacity="1";
 			imagem.style.transition='0.5s';
 		
 	}
 	//retira a opacidade e animação da imagem	
 		function retiraImagem(imagem){
 			imagem.style.transition='0.5s';
 			imagem.style.transitionDelay="0.5s";	
 			imagem.style.opacity="0"					
 		}
 		
 		function botaoFadeIn(botao){
 		botao.addEventListener('mouseover',function(){
  			botao.style.transition="0.5s";
 			botao.style.opacity="0";
 		});			
 	}
 		
 		function botaoFadeOut(botao){
 		botao.addEventListener('mouseleave',function(){	
 			botao.style.transition="0.8s";
 			botao.style.opacity="1";		
 		});
			
 		}
 		//condicional da execução das funções.
 			if(btnAnimate1){
 				animaImagem(imagem1,btnAnimate1);
				retornaImagem(imagem1,btnAnimate1);
				botaoFadeIn(btnAnimate1);
 				botaoFadeOut(btnAnimate1);
 			}if(btnAnimate2){
 				animaImagem(imagem2,btnAnimate2);
				retornaImagem(imagem2,btnAnimate2);
				botaoFadeIn(btnAnimate2);
 				botaoFadeOut(btnAnimate2);
 			}
 			if(btnAnimate3){
 				animaImagem(imagem3,btnAnimate3);
				retornaImagem(imagem3,btnAnimate3);
				botaoFadeIn(btnAnimate3);
 				botaoFadeOut(btnAnimate3);
 			}
 			if(btnAnimate4){
 				animaImagem(imagem4,btnAnimate4);
				retornaImagem(imagem4,btnAnimate4);
				botaoFadeIn(btnAnimate4);
 				botaoFadeOut(btnAnimate4);
 			}

 
