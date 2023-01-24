const num = document.querySelector("input#number")
const list = document.querySelector("select#list")
const select = document.querySelector("div#select")
const arry = []
const tab = document.querySelectorAll("section#list")
const answer = document.getElementById("answer")

function isNumber(number){
    return (Number(number) >= 1 && Number(number) <= 100)? true:false
}

function inList(number, arr){
    return arr.indexOf(Number(number)) != -1 ? true:false
}

function startCount(){
    if (isNumber(num.value) && !inList(num.value, arry)){
        arry.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Number ${num.value} in list!`
        list.appendChild(item)
        answer.innerHTML = ""
    } else{
        return window.alert("JUST From 1 to 100 or already in the list")
    }
    num.value = ''
    num.focus()
}

function submitAfter(){
    const select =         document.getElementById("answer")
    if(arry.length >= 2){
        let sum = 0
        for(let i in arry){
            sum += arry[i]
        }
        select.innerHTML = ""
        select.innerHTML += `<p>You have ${arry.length} numbers in your list</p>`
        select.innerHTML += `<p>The highest number is ${Math.max.apply(null, arry)}</p>`
        select.innerHTML += `<p>The smaller number is ${Math.min.apply(null, arry)}</p>`
        select.innerHTML += `<p>The sum is ${sum}<p>`
        select.innerHTML += `<p>The average is ${(sum/(arry.length)).toFixed(2)}<p>`
    } else {
        select.innerHTML = "You need at least 2 items on list<br>"
    }
    
}