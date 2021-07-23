/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

/*SEARCH BAR*/

/*function searchFunction() {
    let input, submit, filter, h1, a, i, txtValue;
    input = document.querySelector('.header__input');
    filter = input.value.toUpperCase();
    h1 = document.querySelectorAll('h1');
    submit = document.querySelector('.header__icon');
    
        for(i = 0; i < h1.length; i++) {
            a = h1[i].getElementsByTagName('a')[0];
            txtValue = a.textContent || a.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                h1[i].style.display = "";
            }else {
                h1[i].style.display = "grid";
            }
        }
    
    
    
}*/

/*function activeSearch() {
    const input = document.querySelector('.header__input');
    const sugestoes = document.querySelector('.sugestoes');
    const h2 = document.querySelectorAll('h1');
    const sections = document.querySelectorAll('.js-tabContent section');
    const h2Array = Array.from(h2);
    const h2Text = h2Array.map((item) => {
        return item.innerText;
    })

    if(h2Text.length && sections.length) {
        sections[0].classList.add('ativo');

        function autoComplete(titulo) {
            return h2Text.filter((valor) => {
                const valorMinusculo = valor.toLowerCase();
                const tituloMinusculo = titulo.toLowerCase();

                return valorMinusculo.includes(tituloMinusculo);
            });
        }

        input.addEventListener('input', ({target}) => {
            const dadosDoCampo = target.value;
            if(dadosDoCampo.length) {
                const autoCompleteValores = autoComplete(dadosDoCampo);
                sugestoes.innerHTML = `
                    ${autoCompleteValores.map((value) => {
                        return (
                            `<a href="#" class="nav__dropdown-item js-tabMenu2">${value}</a>`
                                )
                    }).join('')}
                `           
            }
        });

        const tabMenu = document.querySelectorAll('.js-tabMenu2');
        console.log(tabMenu);

        function activeTab(index) {
            sections.forEach((section) => {
                section.classList.remove('ativo');
            });
            sections[index].classList.add('ativo');
        };

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', function() {
                activeTab(index);
            });
        });
    }
}
activeSearch();*/

/*=================== Navegação por TAB ================*/
function activeTab() {
    const tabMenu = document.querySelectorAll('.js-tabMenu');
    const tabContent = document.querySelectorAll('.js-tabContent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        };

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', function() {
                activeTab(index);
            });
        });
    }
}
activeTab();

function activePopUp() {
    function iniciaModal(modalID) {
        if(localStorage.fechaModal !== modalID) {
            const modal = document.getElementById(modalID)
            if(modal) {
                modal.classList.add('mostrar');
                modal.addEventListener('click', (e) => {
                    if(e.target.id == modalID || e.target.className == 'fechar'){
                        modal.classList.remove('mostrar')
                        localStorage.fechaModal = modalID
                    }
                })
            }
        }
    }
    
    const produtos = document.querySelector('.selectModal')
    /*produtos.addEventListener('click', () => iniciaModal(''))*/
    
    document.addEventListener('scroll', () => {
        if(window.pageYOffset > 50) {
            iniciaModal('modal-promocao')
        }
    })
}
activePopUp();