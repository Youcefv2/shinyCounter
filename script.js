
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
let pkmName
let imgSource
const getPkmName = () => {
    pkmName = document.getElementById("pkmName").value
    pkmName = pkmName.toLowerCase()
}

const userAction = async () => {
    let img = document.getElementById("pkm-img");
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmName);
    try{
    const myJson = await response.json(); //extract JSON from the http response
    imgSource = myJson["sprites"]["front_shiny"]
    // do something with myJson
    img.src = imgSource
    }catch{
    img.src = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
    }
}
