const colorInputBody = document.getElementById("colorInputBody");
const colorInputNavbar = document.getElementById("colorInputNavbar");
const colorInput = document.getElementById("colorInput"); // Input warna utama

const backgroundColorBody = document.querySelectorAll(".background-color-body");
const backgroundColorNavbar = document.querySelectorAll(".background-color-navbar");
const backgroundColor = document.querySelectorAll(".background-color");
const path = document.querySelectorAll('path');

// --- Liblary Hex to Hsl ---
function hexToHsl(hex) {
    hex = hex.replace(/^#/, '');
    let r, g, b;

    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else {
        return 'hsl(0, 0%, 0%)';
    }

    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return l;
}
// --- Liblary Hex to Hsl ---


function debug() {
    // Ambil nilai HEX dari input utama
    const hexColor = colorInput.value;

    // Konversi HEX ke HSL
    const hslColor = hexToHsl(hexColor);

    // Tampilkan hasil konversi di konsol
    console.log(`Warna HEX yang dimasukkan: ${hexColor}`);
    console.log(`Hasil konversi ke HSL: ${hslColor}`);

    // Contoh untuk melihat efeknya: terapkan warna HSL ke body (opsional)
    // document.body.style.backgroundColor = hslColor;
}

function colorSubmitBody() {
    let konvert = colorInputBody.value;
    konvert = hexToHsl(konvert)
    backgroundColorBody.forEach(element => {
        element.style.backgroundColor = colorInputBody.value

        if (konvert <= 25) {
            element.style.color = "white"
        } else {
            element.style.color = "black"
        }
    })
}

function resetColorBody() {
    backgroundColorBody.forEach(element => {
        element.style.backgroundColor = "rgb(240, 248, 255)"
        element.style.color = "black"
    })
}

function colorSubmitNavbar() {
    let konvert = colorInputNavbar.value;
    konvert = hexToHsl(konvert);

    backgroundColorNavbar.forEach(element => {
        element.style.backgroundColor = colorInputNavbar.value
        if (konvert <= 25) {
            element.style.color = "white"
        } else {
            element.style.color = "black"
        }
    })
}

function resetColorNavbar() {
    backgroundColorNavbar.forEach(element => {
        element.style.backgroundColor = "rgb(34, 122, 253)"
        element.style.color = "white"
    })
}

function colorSubmit() {
    let konvert = colorInput.value;
    konvert = hexToHsl(konvert);

    backgroundColor.forEach(element => {
        element.style.backgroundColor = colorInput.value
        if (konvert <= 25) {
            element.style.color = "white"
        } else {
            element.style.color = "black"
        }
    })

    // Ubah warna elemen <path> (SVG)
    path.forEach(element => {
        element.setAttribute('fill', colorInput.value)
    })
}

function resetColor() {
    backgroundColor.forEach(element => {
        element.style.backgroundColor = "rgb(118, 168, 243)"
        element.style.color = "black"
    })

    path.forEach(element => {
        element.setAttribute('fill', "rgb(118, 168, 243)")
    })
}