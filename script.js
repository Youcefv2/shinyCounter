let i = 0

const color = () => {
    if(i > 0){
        document.getElementById("counter").style.color = "green"
    }else if (i < 0){
        document.getElementById("counter").style.color = "red"
    }else{
        document.getElementById("counter").style.color = "black"
    }
}
const increase = () => {
    i += 1
    console.log(i)
    document.getElementById("counter").innerHTML = i
    color()
}
const decrease = () => {
    i -= 1
    console.log(i)
    document.getElementById("counter").innerHTML = i
    color()
}
const reset = () => {
    i = 0
    console.log(i)
    document.getElementById("counter").innerHTML = i
    color()
}


document.getElementById("counter").innerHTML = i;
console.log(document.getElementById("counter"))