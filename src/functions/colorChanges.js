
const buttonToOrange = () =>{
    let button = document.getElementById('Bookingbtn')
    button.style.transition = '0s'
    button.style.color = 'var(--bg-grey)'
    button.style.backgroundColor = 'var(--tsb-orange)'
    button.style.border = 'none'
    
}

const buttonToNavy = () =>{
    let button = document.getElementById('Bookingbtn')
    button.style.transition = '0s'
    button.style.color = 'var(--bg-grey)'
    button.style.backgroundColor = 'var(--tsb-navy)'
    button.style.border = 'none'
    
}

const sideBarGrey = () =>{

    let app = document.getElementById('App')
    app.style.backgroundColor = 'var(--bg-grey)'

    let sideBar = document.getElementById('side-bar')
    sideBar.style.backgroundColor = 'var(--bg-grey)'

    let sideContent = document.getElementById('side-content')
    sideContent.style.color = 'var(--tsb-navy)'
}

const sideBarNavy = () =>{

    let app = document.getElementById('App')
    app.style.backgroundColor = 'var(--tsb-navy)'

    let sideBar = document.getElementById('side-bar')
    sideBar.style.backgroundColor = 'var(--tsb-navy)'

    let sideContent = document.getElementById('side-content')
    sideContent.style.color = 'var(--bg-grey)'

}

const logoSRC = (src) =>{

    let logo = document.getElementById('logo')
    logo.src= src
}

const menuSRC = (src) =>{

    let menuSRC = document.getElementById('menuBtn')
    menuSRC.src= src
}

const navySide = () =>{
    const hideElements = document.getElementsByClassName('side-grey')
    for(let element of hideElements){
        element.style.display = 'none'
    }

    const revealElements = document.getElementsByClassName('side-navy')
    for(let element of revealElements){
        element.style.display = null
    }
}

const greySide = () =>{
    const hideElements = document.getElementsByClassName('side-navy')
    for(let element of hideElements){
        element.style.display = 'none'
    }

    const revealElements = document.getElementsByClassName('side-grey')
    for(let element of revealElements){
        element.style.display = null
    }
}

const mobileMenu = (menuToggle) =>{

    const sideBar = document.getElementById('side-bar')
    const topBar = document.getElementById('top-bar')
    const sideContent = document.getElementById('side-content')
    const main = document.getElementById('main')
      if(menuToggle){
          sideBar.style.borderColor = null
          sideContent.style.borderColor = null
          topBar.style.backgroundColor = null
          main.style.position = null
      }
      else{
          sideBar.style.borderColor = '#fefefe'
          sideContent.style.borderColor = '#fefefe'
          topBar.style.backgroundColor = 'var(--tsb-blue)'
        //   main.style.position = 'fixed'
      }
}


// mobileMenu function imported in 'App' component as it uses menuToggle

// the other functions are imported into each page component as needed (including menuSRC)

export {buttonToOrange, buttonToNavy, sideBarNavy, sideBarGrey, logoSRC, greySide, navySide, menuSRC, mobileMenu}

