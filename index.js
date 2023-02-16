//fetches from db.json 
fetch("http://localhost:3000/summer")
    .then(r => r.json())
    .then(summerArray => {
        summerArray.forEach(renderSummer)
    })

fetch("http://localhost:3000/fall")
    .then(r => r.json())
    .then(fallArray => {
        fallArray.forEach(renderFall)
    })

fetch("http://localhost:3000/winter")
    .then(r => r.json())
    .then(winterArray => {
        winterArray.forEach(renderWinter)
    })

fetch("http://localhost:3000/spring")
    .then(r => r.json())
    .then(springArray => {
        springArray.forEach(renderSpring)
    })

const summerDiv = document.getElementById('summer')
const fallDiv = document.getElementById('fall')
const winterDiv = document.getElementById('winter')
const springDiv = document.getElementById('spring')

//hide and seek form
let addProduce = false

const addBtn = document.getElementById('new-produce-btn')
const form = document.getElementById('produce-form')

addBtn.addEventListener('click', () => {
    addProduce = !addProduce;
    if (addProduce) {
        form.style.display = "flex";
        if (form.style.display = "flex") {
            addBtn.textContent = "Hide Form"
        }
    } else {
        form.style.display = "none";
        if (form.style.display = "none") {
            addBtn.textContent = "Add New Produce"
        }
    }
})

//submit new produce form
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let season = e.target.season.value
    let seasonOne = season.toLowerCase()
    const newProduce = {
        name: e.target.name.value,
        vitamins: e.target.vitamins.value,
        benefits: e.target.benefits.value,
        image: e.target.image.value
    }
    if (seasonOne == 'summer') {
        renderSummer(newProduce)
        postToSummer(newProduce)
    } else if (seasonOne == 'spring') {
        renderSpring(newProduce)
        postToSpring(newProduce)
    } else if (seasonOne == 'winter') {
        renderWinter(newProduce)
        postToWinter(newProduce)
    } else if (seasonOne == 'fall') {
        renderFall(newProduce)
        postToFall(newProduce)
    }

    e.target.reset()

})

//functions for rendering produce objects to page
function renderSummer(someProduce) {
    const produceDiv = document.createElement('div')
    produceDiv.className = "card"
    const produceName = document.createElement('h3')
    const produceImage = document.createElement('img')
    const produceVitamins = document.createElement('p')
    const produceBenefits = document.createElement('p')
    produceName.innerText = someProduce.name
    produceImage.src = someProduce.image
    produceImage.alt = someProduce.name + " image"
    produceVitamins.textContent = "Vitamins & Nutrients:   " + someProduce.vitamins
    produceBenefits.textContent = "Health Benefits:   " + someProduce.benefits

    produceDiv.append(produceName, produceImage, produceVitamins, produceBenefits)

    summerDiv.append(produceDiv)

}

function renderFall(someProduce) {
    const produceDiv = document.createElement('div')
    produceDiv.className = "card"
    const produceName = document.createElement('h3')
    const produceImage = document.createElement('img')
    const produceVitamins = document.createElement('p')
    const produceBenefits = document.createElement('p')
    produceName.innerText = someProduce.name
    produceImage.src = someProduce.image
    produceImage.alt = someProduce.name + " image"
    produceVitamins.innerText = "Vitamins & Nutrients:   " + someProduce.vitamins
    produceBenefits.innerText = "Health Benefits:   " + someProduce.benefits

    produceDiv.append(produceName, produceImage, produceVitamins, produceBenefits)

    fallDiv.append(produceDiv)
}

function renderWinter(someProduce) {
    const produceDiv = document.createElement('div')
    produceDiv.className = "card"
    const produceName = document.createElement('h3')
    const produceImage = document.createElement('img')
    const produceVitamins = document.createElement('p')
    const produceBenefits = document.createElement('p')
    produceName.innerText = someProduce.name
    produceImage.src = someProduce.image
    produceImage.alt = someProduce.name + " image"
    produceVitamins.innerText = "Vitamins & Nutrients:   " + someProduce.vitamins
    produceBenefits.innerText = "Health Benefits:   " + someProduce.benefits

    produceDiv.append(produceName, produceImage, produceVitamins, produceBenefits)

    winterDiv.append(produceDiv)
}

function renderSpring(someProduce) {
    const produceDiv = document.createElement('div')
    produceDiv.className = "card"
    const produceName = document.createElement('h3')
    const produceImage = document.createElement('img')
    const produceVitamins = document.createElement('p')
    const produceBenefits = document.createElement('p')
    produceName.innerText = someProduce.name
    produceImage.src = someProduce.image
    produceImage.alt = someProduce.name + " image"
    produceVitamins.innerText = "Vitamins & Nutrients:   " + someProduce.vitamins
    produceBenefits.innerText = "Health Benefits:   " + someProduce.benefits

    produceDiv.append(produceName, produceImage, produceVitamins, produceBenefits)

    springDiv.append(produceDiv)
}


// Mouseover Event

const summerProduce = document.getElementById("summerproduce")
const winterProduce = document.getElementById("winterproduce")
const fallProduce = document.getElementById("fallproduce")
const springProduce = document.getElementById("springproduce")

summerProduce.addEventListener('mouseover', () => {
    summerProduce.style.backgroundImage = "url(https://images.unsplash.com/photo-1441981974669-8f9bc0978b64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
})

summerProduce.addEventListener('mouseout', () => {
    summerProduce.style.backgroundImage = ""

})


winterProduce.addEventListener('mouseover', () => {
    winterProduce.style.backgroundImage = "url(https://www.wilsonpeakproperties.com/custimages/Big_Sky_Resort_Winter.jpeg)"
})

winterProduce.addEventListener('mouseout', () => {
    winterProduce.style.backgroundImage = ""

})


fallProduce.addEventListener('mouseover', () => {
    fallProduce.style.backgroundImage = "url(https://images.unsplash.com/photo-1509224863479-ab583ee78692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)"
})

fallProduce.addEventListener('mouseout', () => {
    fallProduce.style.backgroundImage = ""

})


springProduce.addEventListener('mouseover', () => {
    springProduce.style.backgroundImage = "url(https://images.unsplash.com/photo-1587570575321-050120f1bb4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"

})

springProduce.addEventListener('mouseout', () => {
    springProduce.style.backgroundImage = ""

})


// show cards on click
let addSummerCard = false
let addFallCard = false
let addSpringCard = false
let addWinterCard = false

summerProduce.addEventListener('click', () => {
    addSummerCard = !addSummerCard;
    if (addSummerCard) {
        summerDiv.style.display = "block";
    } else {
        summerDiv.style.display = "none";
    }
})

fallProduce.addEventListener('click', () => {
    addFallCard = !addFallCard;
    if (addFallCard) {
        fallDiv.style.display = "block";
    } else {
        fallDiv.style.display = "none";
    }
})

springProduce.addEventListener('click', () => {
    addSpringCard = !addSpringCard;
    if (addSpringCard) {
        springDiv.style.display = "block";
    } else {
        springDiv.style.display = "none";
    }
})

winterProduce.addEventListener('click', () => {
    addWinterCard = !addWinterCard;
    if (addWinterCard) {
        winterDiv.style.display = "block";
    } else {
        winterDiv.style.display = "none";
    }
})

//post request functions defined
function postToSummer(e) {
    fetch("http://localhost:3000/summer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(e),
    })
        .then(r => r.json())
        .then(e => console.log("success", e))
}

function postToWinter(e) {
    fetch("http://localhost:3000/winter", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(e),
    })
        .then(r => r.json())
        .then(e => console.log("success", e))
}

function postToFall(e) {
    fetch("http://localhost:3000/fall", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(e),
    })
        .then(r => r.json())
        .then(e => console.log("success", e))
}

function postToSpring(e) {
    fetch("http://localhost:3000/spring", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(e),
    })
        .then(r => r.json())
        .then(e => console.log("success", e))
}


// const cards = document.querySelectorAll('.card')
// console.log(cards)

