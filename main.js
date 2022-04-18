const links = document.querySelectorAll('.menu>.menu__item>.menu__link');
const sublinks = document.querySelectorAll('.sub__menu-btn');
const subMenus = document.querySelectorAll('.submenu')
const responsiveMenu = window.innerWidth;

links.forEach(link => {
    link.addEventListener('click', function() {
        removeAllIcon()
        clearActiveMenu(links, 'active')
        clearActiveMenu(subMenus, 'activeSubmenu')
        link.classList.add('active');
        const subMebnu = this.nextElementSibling;
        if (link.classList.contains('sub__menu-btn')) {
            const iconActive = link.childNodes[1];
            iconActive.classList.remove('bx-chevron-down')
            iconActive.classList.add('bx-chevron-up')
            subMebnu.classList.add('activeSubmenu')
        }
    });
})

const removeAllIcon = () => {
    sublinks.forEach(item => {
        item.childNodes[1].classList.remove('bx-chevron-up')
        item.childNodes[1].classList.add('bx-chevron-down')
    })
}

const clearActiveMenu = (element, classItem) => {
    element.forEach(item => {
        item.classList.remove(classItem)
    })
}

//? BUTTON OPEN MENU
const menu = document.getElementById('nav-bar');
const openMenu = document.getElementById('open-menu');
openMenu.addEventListener('click', () => {
        const menu = document.getElementById('nav-bar');
        menu.classList.add('activeMenu');
    })
    //! BUTTON CLOSE MENU

const closeMenu = document.getElementById('navbar-close');

closeMenu.addEventListener('click', () => {
    menu.classList.remove('activeMenu');
})