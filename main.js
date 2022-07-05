const brn =document.getElementById('btn')

btn.addEventListener('click',() =>{
    document.body.style.background = randemColor();
    console.log(randemColor())
})

function randemColor(){
    return ` hsl(${Math.floor(Math.random()*360)},100% ,50%)`
}