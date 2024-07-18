function menuSubMenu() {
   //selecionar a lista de itens principais do menu
    const menuItem = document.querySelectorAll('.menuItem');
    console.log(menuItem)
  
    // separar cada item com o forEach e assim adicionar o evento de click
    menuItem.forEach(item => { // <li>
      console.log(item)
  //:scope obter um descendente direto de um arquivo Element.
      const itemClick = item.querySelector(':scope > a'); // <a>
      console.log(itemClick ) 

      // adicionando o evento de click
      itemClick.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('verificando classList')
        console.log(item.classList.contains('active'))
  //repassando por cada item novamente e dando sua função para remover a  class Active
  //quando as classe são irmãs elas tem que estar coladas.
  //quando é filho ai pode ter o espaço.
        // document.querySelectorAll('.menuItem.active')[0]?.classList.remove('active');
    
        if(item.classList.contains('active')){
          item.classList.remove('active');
          console.log(item)
        }
        else{
          document.querySelectorAll('.menuItem.active')[0]?.classList.remove('active');
          item.classList.add('active');
        }
        // menuItem.forEach(item => item.classList.remove('active'))
        //e adicionando a class active para que ela possa ser removida depois
        
  
      })
    })
  }

  menuSubMenu();

function modal(){
  //selecionar toda a tag dialog
  const modal = document.querySelector('dialog');
  //selecionar somente o botão da dentro da tag dialog 
  const closeModal = document.querySelector('dialog button')
  console.log(closeModal)
 // Função que será executada após 10 segundos
 function popUp() {
  //interface exibe a caixa de diálogo como modal, acima de quaisquer outras caixas de diálogo que possam estar presentes. Ele é exibido na camada superior , junto com um ::backdroppseudoelemento. A interação fora da caixa de diálogo é bloqueada e o conteúdo fora dela fica inerte.
  modal.showModal()
}
// SetTimeout define um cronômetro que executa uma função ou trecho de código especificado quando o cronômetro expira.
// Definindo o atraso de 10 segundos (10000 milissegundos) e com isso a função popUp será executada
setTimeout(popUp, 10000);
  
//adicionando um evento de clique ao botão fechar do popUp
closeModal.addEventListener('click', function (){
// adicionando a função de fechar após o clique
modal.close()
  })
}

modal()

function Tab() {
  //Selecionar a lista dos principais itens da tab
  const tabButton = document.querySelectorAll('.buttonTab');
  //selecionar a lista dos principais conteudos da tab
  const tabContents = document.querySelectorAll('.tabContent');
  // Separar cada elemento da lista pelo forEach 
  tabButton.forEach(item => { // <li>
    console.log(item, 'li')
//adiconar o evento de click a cada elemento
    const linkClick = item.querySelector(':scope > a'); // <a>
    console.log(linkClick, 'selecionou o a') 

// adicionando o evento de click
  linkClick.addEventListener('click', (e) => {
    e.preventDefault();

// identificando qual item foi clicado
// salvando na variavel o atributo data
      const itemTabClick = linkClick.getAttribute('data-tabbutton');
      console.log(itemTabClick)
      const itemTabContent = document.querySelector(`.tabContent[data-tabContent="${itemTabClick}"]`);

// manipulação dos eventos de ativo nos botões
/*
   Na primeira linha passamos por todos os botões da tab
   removendo a classe ativa

  Na segunda linha, adicionamos a classe ativa, somente na tab clicada
*/
  tabButton.forEach(item => item.classList.remove('active'))
  item.classList.add('active')

// manipulação dos eventos de ativo nos conteudos
/*
  Na primeira linha passamos por todos os conteudos da tab
  removendo a classe ativa

  Na segunda linha, adicionamos a classe ativa, somente na tab clicada
*/
  tabContents.forEach(item => item.classList.remove('active'))
  itemTabContent.classList.add('active')

    })
  })
}

Tab();

