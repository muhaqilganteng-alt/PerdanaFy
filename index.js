const colorInputBody = document.getElementById("colorInputBody");
const colorInputNavbar = document.getElementById("colorInputNavbar");
const colorInput = document.getElementById("colorInput")

const backgroundColorBody = document.querySelectorAll(".background-color-body")
const backgroundColorNavbar = document.querySelectorAll(".background-color-navbar")
const backgroundColor = document.querySelectorAll(".background-color")

function colorSubmitBody() {
    backgroundColorBody.forEach(backgroundColorBody => {
        backgroundColorBody.style.backgroundColor = colorInputBody.value
    })
}

function resetColorBody() {
    backgroundColorBody.forEach(backgroundColorBody => {
        backgroundColorBody.style.backgroundColor = "aliceblue"
    })
}

function colorSubmitNavbar() {
    backgroundColorNavbar.forEach(backgroundColorNavbar => {
        backgroundColorNavbar.style.backgroundColor = colorInputNavbar.value
        // Body.style.backgroundColor = colorInputNavbar.value
    })

}

function resetColorNavbar() {
    backgroundColorNavbar.forEach(backgroundColorNavbar => {
        backgroundColorNavbar.style.backgroundColor = "#2279fd"
    })
}

function colorSubmit() {
    backgroundColor.forEach(backgroundColor => {
        backgroundColor.style.backgroundColor = colorInput.value
    })
}

function resetColor() {
    backgroundColor.forEach(backgroundColor => {
        backgroundColor.style.backgroundColor = "#76a8f3"
    })
}