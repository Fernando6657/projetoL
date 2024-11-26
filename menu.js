// Arquivo das automações do menu hamburguer

// Selecionando o botão menu pelo seu id utilizando 'cost' para não 
// modificar posteriormente
const btMobile = document.getElementById('btn-mobile');

// Função que alterna o estado do menu (aberto/fechado)
//@param (Event) - evento que dispara a Função, como 'click' ou 'touchstart'
function toggleMenu(event) {
    //evita o comportamanto padrão do evento 'toucstart', evitando bug em dispositivos moveis
    if (event.type === 'toucstart') event.preveDefault();

    //seleciona um elemento de navegação pelo seu id
    const nav = document.getElementById('nav');

    //adiciona ou remove a classe 'active' no elemento de navegação, ativando ou desativandoo menu
    nav.classList.toggle('active');

    //verifica se o menu esta aberto ou nao 
    const isActive = nav.classList.contains('active');

    //atualiza o atributo 'aria-expanded' para melhorar a acessibilidade
    event.currentTarget.setAtribute ('arte-expanded', isActive);
    
    //define o texto do atributo 'aria-label' dependeno do estado do menu (aberto/fechado)
    if (isActive){

    event.currentTarget.setAtribute('aria-label','fechar menu');
    } else {
        event.currentTarget.setAtribute('aria-label','fechar menu')
    }
}

//adiciona eventos de click e touchstart para ativar a função togglrmenu ao interagir com o botão
btnMobile.addEventLister('click', toggleMenu);
btnMobile.addEventLister('touchstart', toggleMenu);
