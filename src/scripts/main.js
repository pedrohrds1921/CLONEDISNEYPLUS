document.addEventListener('DOMContentLoaded',function(){
    const buttons=document.querySelectorAll('[data-tab-button]')
    const questions=document.querySelectorAll('[data-faq-question]')
    const heroSection=document.querySelector('.hero')
   

    const heightHero=heroSection.clientHeight


    window.addEventListener('scroll',function(){
       const windowScrollPosition=  window.scrollY

       if(windowScrollPosition<heightHero){
        hiddenElementHeader()

       }else{
        openElementHeader()
       }
    })

    function hiddenElementHeader(){
        const header=document.querySelector('.header')
        header.classList.add('header--is-hidden')
    }

    function openElementHeader(){
        const header=document.querySelector('.header')
        header.classList.remove('header--is-hidden')
    }


    buttons.forEach(button=> button.addEventListener("click",
    function(e){
        const tabTarget=e.target.dataset.tabButton
        const tab=document.querySelector(`[data-tab-id=${tabTarget}]`)
        hideAllTabs()
        tab.classList.add('shows__list--is-active')
        removeActiveButton()
        e.target.classList.add('shows__tabs__button--is-active')
        }
    )
    )


    questions.forEach(question=> question.addEventListener("click",
    function(e){
        const className='faq__questions__item--is-open'
        const fatherElment=e.target.parentNode
        fatherElment.classList.toggle(className)
    }
    ))
})

function removeActiveButton(){
    const buttons=document.querySelectorAll('[data-tab-button]')
    buttons.forEach(button=> button.classList.remove('shows__tabs__button--is-active'))
}
function hideAllTabs(){
    const tabsContainer=document.querySelectorAll('[data-tab-id]')
    tabsContainer.forEach(tab=> tab.classList.remove('shows__list--is-active'))
}
