// Mobile Menu
const mobileMenu = () => {
    const menu = document.querySelector('.header ul');
    const button = document.querySelector('.header button');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        button.innerText = 'MENU';
    } else {
        menu.style.display = 'flex';
        button.innerText = 'CLOSE';
    }
};

// Slider
let imgNum = 0;
const pictures = document.querySelectorAll('.slider-images img');
const displayNone = () => pictures.forEach((img) => (img.style.display = 'none'));

const moveRight = () => {
    displayNone();
    imgNum = (imgNum + 1) % pictures.length;
    pictures[imgNum].style.display = 'block';
};

const moveLeft = () => {
    displayNone();
    imgNum = (imgNum - 1 + pictures.length) % pictures.length;
    pictures[imgNum].style.display = 'block';
};

document.getElementById('right-btn').addEventListener('click', moveRight);
document.getElementById('left-btn').addEventListener('click', moveLeft);

// Portfolio Filtering
const portfolioSort = (button) => {
    const category = button.getAttribute('data-category');
    const items = document.querySelectorAll('.portfolio-single-item');
    items.forEach((item) => {
        item.style.display = category === 'sve' || item.dataset.category.includes(category) ? 'block' : 'none';
    });
};

document.querySelectorAll('.portfolio-categories button').forEach((btn) => {
    btn.addEventListener('click', () => portfolioSort(btn));
});

// Modal 1
const openModal = () => {
    document.getElementById('modal1').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
};

const closeModal = () => {
    document.getElementById('modal1').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
};

// Modal 2
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Zatvaranje oba modala klikom na overlay
document.querySelector('.overlay').addEventListener('click', () => {
    closeModal();
    closeModal2();
});

