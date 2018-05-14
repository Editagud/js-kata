`use script`

const pop = document.querySelector(`#popup`);
const butonnn = document.querySelector(`#cookieAcceptBarConfirm`)
window.addEventListener('load', function() {
    pop.style.transform = `translateY(-30vh) `;
});

butonnn.addEventListener('click', function() {
    pop.style.transform = `translateY(30vh) `;
});