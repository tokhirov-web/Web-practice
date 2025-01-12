function insert(index, oldStr, element) {
    let newString = oldStr.slice(0, index) + element + oldStr.slice(index)
    return newString
}


let picture = document.querySelector(".mac")
let colorName = document.querySelector(".color-name")
let price = document.querySelector(".price")



// btn 1
let white = document.querySelector(".white")

// btn 2
let gray = document.querySelector(".gray")

let one = document.getElementById("selected")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")



white.addEventListener('click', () => {
    white.classList.remove("inactiveButton")
    gray.classList.add("inactiveButton")

    picture.setAttribute("src", "pictures/silver.png")

})

gray.addEventListener("click", () => {
    gray.classList.remove("inactiveButton")
    white.classList.add("inactiveButton")

    picture.setAttribute("src", "pictures/gray.png")
})



let priceText = price.textContent

let numberedPrice = Number(priceText.replace(",", ""))
// let finalPrice = String(numberedPrice)


one.addEventListener('click', () => {
    price.textContent = "1,990"
    one.setAttribute("id", "selected")

    two.setAttribute("id", "two")
    three.setAttribute("id", "three")
    four.setAttribute("id", "four")
})

two.addEventListener('click', () => {
    numberedPrice = 1990
    numberedPrice += 200
    price.textContent = insert(1, String(numberedPrice), ",")
    two.setAttribute("id", "selected")

    one.setAttribute("id", "one")
    three.setAttribute("id", "three")
    four.setAttribute("id", "four")
})

three.addEventListener('click', () => {
    numberedPrice = 1990
    numberedPrice += 600
    price.textContent = insert(1, String(numberedPrice), ",")
    three.setAttribute("id", "selected")

    one.setAttribute("id", "one")
    two.setAttribute("id", "two")
    four.setAttribute("id", "four")
})

four.addEventListener('click', () => {
    numberedPrice = 1990
    numberedPrice += 1200
    price.textContent = insert(1, String(numberedPrice), ",")
    four.setAttribute("id", "selected")

    one.setAttribute("id", "one")
    two.setAttribute("id", "two")
    three.setAttribute("id", "three")
})