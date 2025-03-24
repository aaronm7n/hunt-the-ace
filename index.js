
const cardObjectDefinitions = [
    {id:1, imagePath: './assets/images/card-KingHearts.png'},
    {id:2, imagePath: './assets/images/card-JackClubs.png'},
    {id:3, imagePath: './assets/images/card-QueenDiamonds.png'},
    {id:4, imagePath: './assets/images/card-AceSpades.png'},
]

const cardBackImgPath = './assets/images/card-back-Blue.png'

const cardContainerElem = document.querySelector('.card-container')

/*  This function will create our card div elements dynamically
<div class="card">
    <div class="card-inner">
        <div class="card-front">
            <img src="./images/card-JackClubs.png" alt="" class="card-img">
        <div>
        <div class="card-back">
            <img src="./images/card-back-Blue.png" alt="" class="card-img">
        <div>
    </div>
</div>
*/
function createCard(cardItem) {
    // Create div elements that make up a card
    const cardElem = document.createElement('div')
    const cardInnerElem = document.createElement('div')
    const cardFrontElem = document.createElement('div')
    const cardBackElem = document.createElement('div')

    // Create front and back image elements for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    // Add class and id to card element
    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    // Add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    // Add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    // Add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    // Add src attribute and appropriate value to img element - back of card
    addSrcToImageElem(cardBackElem, cardBackImgPath)

    // Add src attribute and appropriate value to img element - front of card
    addSrcToImageElem(cardFrontElem, cardItem.imagePath)

    // Assign class to back image element of back of card
    addClassToElement(cardBackImg, 'card-img')

    // Assign class to front image element of front of card
    addClassToElement(cardFrontImg, 'card-img')

    // Add front image element as child element to front card element
    addChildElement(cardFrontElem, cardFrontImg)

    // Add back image element as child element to back card element
    addChildElement(cardBackElem, cardBackImg)

    // Add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    // Add back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)

    // Add inner card element as child element to card element
    addChildElement(cardElem, cardInnerElem)
}

function createElement(elemType) {
    return document.createElement(elemType)
}

function addClassToElement(elem, className) {
    elem.classList.add(className)
}

function addIdToElement(elem, id) {
    elem.id = id
}

function addSrcToImageElem(imgElem, src) {
    imgElem.src = src
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem)
}