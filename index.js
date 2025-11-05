const colorInput = document.getElementById("colorInput");
const backgroundColor = document.querySelectorAll(".background-color")

function colorSubmit(){
    console.log(colorInput.value);

    backgroundColor.forEach(backgroundColor => {
        backgroundColor.style.backgroundColor = colorInput.value
    })
}