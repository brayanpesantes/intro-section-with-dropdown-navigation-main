const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const navigation = document.getElementById('navigation');

openMenu.addEventListener('click', () => {
    navigation.classList.add('openMenu');
    navigation.classList.remove('closeMenu');
})

closeMenu.addEventListener('click', () => {
    navigation.classList.add('closeMenu');
    navigation.classList.remove('openMenu');
})