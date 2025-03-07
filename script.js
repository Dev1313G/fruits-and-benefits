const fruitData = {
    apple: {
        image: "images/benaple.jpg"
    },
    banana: {
        image: "images/benbana.jpg"
    },
    orange: {
        image: "images/benornge.webp"
    },
    strawberry: {
        image: "images/benstraw.jpg"
    },
    grapes: {
        image: "images/bengrap.jpg"
    },
    pineapple: {
        image: "images/benipine.jpg"
    },
    mango: {
        image: "images/beniimango.jpg"
    },
    watermelon: {
        image: "images/beniwater.jpg"
    },
    pomegranate: {
        image: " images/benefitpomegran.jpg"
    },
    guava:{
        image: "images/benefitguava.jpg "
    },
    papaya: {
        image: "images/benepapaya.jpg"
    },
    jackfruit:{
        image: "images/beneJack.png"
    },
};

function showPopup(fruit) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupText = document.getElementById('popup-text');

    popupImg.src = fruitData[fruit].image;
    popupText.textContent = fruitData[fruit].benefit;

    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = "none";
}