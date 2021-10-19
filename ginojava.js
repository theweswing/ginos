// Click RankUp
// Remove Parent Element
// Append Parent Element to its Parent, after its previouschild previouschild

//Click RankDown
// Remove Parent Element
// Append Parent Element after its Nextchild

//                                  THE PIZZA ROWS & TABLE

let pizzaMenuTable = document.getElementById('pizzaMenuTable')
let pizzaMenuTableBody = pizzaMenuTable.firstElementChild
let cheeseRow = document.getElementById('cheesePizza')
let mushroomsRow = document.getElementById('mushroomsPizza')
let onionsRow = document.getElementById('onionsPizza')
let pepperoniRow = document.getElementById('pepperoniPizza')
let sausageRow = document.getElementById('sausagePizza')
let peppersRow = document.getElementById('peppersPizza')
let pineapplesRow = document.getElementById('pineapplesPizza')
let picklesRow = document.getElementById('picklesPizza')

//                                  THE RANK BUTTONS

let cheeseUp= document.getElementById("cheeseUp")
let cheeseDown= document.getElementById("cheeseDown")

let mushroomsUp= document.getElementById("mushroomsUp")
let mushroomsDown= document.getElementById("mushroomsDown")

let onionsUp= document.getElementById("onionsUp")
let onionsDown= document.getElementById("onionsDown")

let pepperoniUp= document.getElementById("pepperoniUp")
let pepperoniDown= document.getElementById("pepperoniDown")

let sausageUp= document.getElementById("sausageUp")
let sausageDown= document.getElementById("sausageDown")

let peppersUp= document.getElementById("peppersUp")
let peppersDown= document.getElementById("peppersDown")

let pineapplesUp= document.getElementById("pineapplesUp")
let pineapplesDown= document.getElementById("pineapplesDown")

let picklesUp= document.getElementById("picklesUp")
let picklesDown= document.getElementById("picklesDown")



//                                 THE DELETE BUTTONS

// function deleteRow(button){ 
//     let parentRow=button.parentNode
//     let grandparent=parentRow.parentNode
//     grandparent.remove()
// }

let deleteButtonCheese= document.getElementById('deleteThisCheese')
deleteButtonCheese.addEventListener('click', () => {
    let parentRow=deleteButtonCheese.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})


let deleteButtonMushrooms= document.getElementById('deleteThisMushrooms')
deleteButtonMushrooms.addEventListener('click', () => {
    let parentRow=deleteButtonMushrooms.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonOnions= document.getElementById('deleteThisOnions')
deleteButtonOnions.addEventListener('click', () => {
    let parentRow=deleteButtonOnions.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonPepperoni= document.getElementById('deleteThisPepperoni')
deleteButtonPepperoni.addEventListener('click', () => {
    let parentRow=deleteButtonPepperoni.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonPeppers= document.getElementById('deleteThisPeppers')
deleteButtonPeppers.addEventListener('click', () => {
    let parentRow=deleteButtonPeppers.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonPineapple= document.getElementById('deleteThisPineapples')
deleteButtonPineapple.addEventListener('click', () => {
    let parentRow=deleteButtonPineapple.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonPickles= document.getElementById('deleteThisPickles')
deleteButtonPickles.addEventListener('click', () => {
    let parentRow=deleteButtonPickles.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonSausage= document.getElementById('deleteThisSausage')
deleteButtonSausage.addEventListener('click', () => {
    let parentRow=deleteButtonSausage.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let kwSalary = document.getElementById("kwSalary");
      kwSalary.addEventListener('mouseover', function(){
         
      })



//                                 THE HATE BUTTON (retired)

// let hatebuttons= document.getElementsByClassName("hateThis")
// hatebuttons[0].addEventListener("click",e => alert("You've got no taste!"))



//                                      INSERT BEFORE / EXPERIMENTS:

function createNewRow(){
    let newRow = document.createElement('tr')
    let cellOne=document.createElement('td')
    let cellTwo=document.createElement('td')
    let cellThree=document.createElement('td')
    newRow.append(cellOne)
    newRow.append(cellTwo)
    newRow.append(cellThree)
    return newRow
}

function insertNewRow(aNewRow,insertedBehind){
    pizzaMenuTableBody.insertBefore(aNewRow,insertedBehind)
}

// Moves everything to the bottom...
function rankUpPizza(button){
    let buttonsData=button.parentElement
    let buttonsRow=buttonsData.parentElement
    let buttonsIndex=buttonsRow.rowIndex
    let targetIndex=(buttonsIndex-1)
    let parentTable= buttonsRow.parentElement
    let targetRow=parentTable[targetIndex]
    parentTable.insertBefore(buttonsRow,targetRow)
}
