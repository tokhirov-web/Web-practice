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
    modelOne.setAttribute("id","seleted-item")
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

