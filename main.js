const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const navigation = document.getElementById('navigation');
const items = document.querySelectorAll('.item')
const subItems = document.querySelectorAll('.subItem')

openMenu.addEventListener('click', () => {
    navigation.classList.add('openMenu');
    navigation.classList.remove('closeMenu');
})

closeMenu.addEventListener('click', () => {
    navigation.classList.add('closeMenu');
    navigation.classList.remove('openMenu');

})

items.forEach(item => {

    item.addEventListener('click', () => {
        removeClassActive();
        if (!item.classList.contains('active')) {
            item.classList.add('active');
            if (item.classList.contains('sub__menu')) {
                item.childNodes[3].classList.toggle('activeSubMenu');
                // console.log(item.childNodes)
                // if (item.childNodes[3]) {

                //     console.log(item.childNodes[3])
                // }
            }
        }
    })
})

const removeClassActive = () => {
    items.forEach(item => {
        item.classList.remove('active');
    })
}