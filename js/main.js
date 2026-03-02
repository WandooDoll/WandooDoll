// 获取语言切换按钮
const langZh = document.getElementById('langZh');
const langEn = document.getElementById('langEn');
const body = document.body;

// 中文切换
langZh.addEventListener('click', () => {
    body.classList.remove('en');
});

// 英文切换
langEn.addEventListener('click', () => {
    body.classList.add('en');
});

// 移动端汉堡菜单（简单实现，点击显示/隐藏菜单）
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    navMenu.style.flexDirection = 'column';
    navMenu.style.position = 'absolute';
    navMenu.style.top = '80px';
    navMenu.style.right = '20px';
    navMenu.style.background = 'white';
    navMenu.style.padding = '20px';
    navMenu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    navMenu.style.borderRadius = '5px';
});