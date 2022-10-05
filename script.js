let btn = document.querySelector('.btn');
btn.onclick = () => {
    btn.classList.toggle('active');
    let menu = document.querySelector('ul');
    menu.classList.toggle('active');
}