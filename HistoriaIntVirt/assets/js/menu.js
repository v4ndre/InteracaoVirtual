function openMenu() {
    document.getElementById('navbar').classList.add('show');
    document.getElementById('menu_open').classList.add('hide');
    document.getElementById('menu_close').classList.add('show');
}
function closeMenu() {
    document.getElementById('navbar').classList.remove('show');
    document.getElementById('menu_open').classList.remove('hide');
    document.getElementById('menu_close').classList.remove('show');
}