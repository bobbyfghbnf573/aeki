function displayReversedName() {
    const nameInput = document.getElementById('nameInput');
    const resultDiv = document.getElementById('result');
    const reversedNameElem = document.getElementById('reversedName');
    const randomImageElem = document.getElementById('randomImage');
    const form = document.getElementById('nameForm');
    const body = document.body;

    let name = nameInput.value;
    if (name) {
        // Invertir el nombre
        let reversedName = name.split('').reverse().join('');

        // Función para sustituir la vocal con diéresis
        function addDiacritic(name) {
            const vowels = {
                'a': 'ä', 'e': 'ë', 'i': 'ï', 'o': 'ö', 'u': 'ü',
                'á': 'ä', 'é': 'ë', 'í': 'ï', 'ó': 'ö', 'ú': 'ü',
                'à': 'ä', 'è': 'ë', 'ì': 'ï', 'ò': 'ö', 'ù': 'ü'
            };

            if (vowels.hasOwnProperty(name[0].toLowerCase())) {
                name = vowels[name[0].toLowerCase()] + name.slice(1);
            } else {
                for (let i = name.length - 1; i >= 0; i--) {
                    if (vowels.hasOwnProperty(name[i].toLowerCase())) {
                        name = name.slice(0, i) + vowels[name[i].toLowerCase()] + name.slice(i + 1);
                        break;
                    }
                }
            }

            return name;
        }

        // Aplicar diéresis a la primera o última vocal según sea necesario
        reversedName = addDiacritic(reversedName);
        reversedName = reversedName.toUpperCase();

        // Mostrar el nombre invertido con diéresis
        reversedNameElem.textContent = reversedName;

        // Ocultar el input y botón
        form.style.display = 'none';

        // Mostrar la imagen aleatoria
        const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']; // Cambia estos nombres por los de tus imágenes
        const randomImage = images[Math.floor(Math.random() * images.length)];
        randomImageElem.src = `fotos/${randomImage}`;

        // Mostrar el resultado
        resultDiv.classList.remove('hidden');

        // Cambiar propiedades del body
        body.style.backgroundColor = "#212135";
        body.style.backgroundImage = "none";

    }

    // Evitar que el formulario se envíe realmente
    return false;
}
