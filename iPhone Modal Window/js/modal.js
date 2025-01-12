const phoneImg = document.querySelector(".phone")

const modelOne = document.getElementById("model-one")
const modelTwo = document.getElementById("model-two")

const colorName = document.querySelector(".color-value")

const memoryOne = document.getElementById("memory-one")
const memoryTwo = document.getElementById("memory-two")
const memoryThree = document.getElementById("memory-three")



const blue = document.querySelector(".blue")
const midnight = document.querySelector(".midnight")
const purple = document.querySelector(".purple")
const red = document.querySelector(".red")
const yellow = document.querySelector('.yellow')



modelOne.addEventListener('click', () => {
    modelOne.setAttribute("id", "selected-item")
    modelTwo.setAttribute("id", "model-two")
})

modelTwo.addEventListener('click', () => {
    modelTwo.setAttribute("id", "selected-item")
    modelOne.setAttribute("id", "seleted-item")
})

memoryOne.addEventListener('click', () => {
    memoryTwo.setAttribute("id", "memory-two")
    memoryThree.setAttribute("id", "memory-three")
    memoryOne.setAttribute("id", "selected-item")
})

memoryTwo.addEventListener('click', () => {
    memoryOne.setAttribute("id", "memory-one")
    memoryThree.setAttribute("id", "memory-three")
    memoryTwo.setAttribute("id", "selected-item")
})

memoryThree.addEventListener('click', () => {
    memoryTwo.setAttribute("id", "memory-two")
    memoryThree.setAttribute("id", "selected-item")
    memoryOne.setAttribute("id", "memory-one")
})



blue.addEventListener('click', () => {
    colorName.textContent = "Blue"
    phoneImg.setAttribute("src", "pictures/phones/blue.png")
})

midnight.addEventListener('click', () => {
    colorName.textContent = "Midnight"
    phoneImg.setAttribute("src", "pictures/phones/midnight.png")
})

purple.addEventListener('click', () => {
    colorName.textContent = "Purple"
    phoneImg.setAttribute("src", "pictures/phones/purple.png")
})

red.addEventListener('click', () => {
    colorName.textContent = "Red"
    phoneImg.setAttribute("src", "pictures/phones/red.png")
})

yellow.addEventListener('click', () => {
    colorName.textContent = "Yellow"
    phoneImg.setAttribute("src", "pictures/phones/yellow.png")
})








const open = document.getElementById("opn")
const close = document.querySelector(".modal-close")


const modal = document.getElementById("mod")
const overlay = document.getElementById("over")


const arrowOne = document.getElementById("firstArrow")
const arrowTwo = document.getElementById('secondArrow')

const windowOne = document.getElementById("firstWindow")
const windowTwo = document.getElementById("secondWindow")



open.addEventListener('click', () => {

    console.log("CLICK")
    modal.style.display = "block"
    overlay.style.display = "block"

    setTimeout(() => {
        console.log("TIME")
        modal.style.opacity = "1"
        overlay.style.opacity = "0.5"
    }, 200);

})

close.addEventListener('click', () => {

    console.log("close")
    modal.style.display = "none"
    overlay.style.display = "none"

    setTimeout(() => {
        console.log("TIME2")
        modal.style.opacity = "0"
        overlay.style.opacity = "0"
    }, 200);

})

overlay.onclick = () => {
    console.log("close")
    modal.style.display = "none"
    overlay.style.display = "none"

    setTimeout(() => {
        console.log("TIME2")
        modal.style.opacity = "0"
        overlay.style.opacity = "0"
    }, 200);
}


arrowOne.addEventListener('click', () => {

    if (arrowOne.style.transform === "rotate(180deg)"
        && windowOne.style.height === "1134.5px") {
        arrowOne.style.transform = "rotate(0deg)"
        windowOne.style.height = "120px"
    }
    else {
        windowOne.style.height = "1134.5px"
        arrowOne.style.transform = "rotate(180deg)"
    }
})


arrowTwo.addEventListener('click', () => {

    if (arrowTwo.style.transform === "rotate(180deg)"
        && windowTwo.style.height === "1137.5px") {
        arrowTwo.style.transform = "rotate(0deg)"
        windowTwo.style.height = "120px"
    }
    else {
        windowTwo.style.height = "1137.5px"
        arrowTwo.style.transform = "rotate(180deg)"
    }
})