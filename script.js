function expandir(elemento) {
    elemento.style.transform = 'scale(1.1)';
}

function contrair(elemento) {
    elemento.style.transform = 'scale(1)';
}

const body = document.body;
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Theme';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateTheme();
});

function updateTheme() {
    const isDarkMode = body.classList.contains('dark-mode');
    const backgroundColor = isDarkMode ? 'black' : 'white';
    const textColor = isDarkMode ? 'white' : 'black';
    const highlightColor = '#39ff14'; // Mantenha a cor verde para destaque independente do modo

    body.style.setProperty('--background-color', backgroundColor);
    body.style.setProperty('--text-color', textColor);
    body.style.setProperty('--highlight-color', highlightColor);
}

// Atualizar o tema inicialmente com base no sistema do usuário
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
}

updateTheme();