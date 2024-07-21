document.getElementById('chaosButton').addEventListener('click', function() {
    for (let i = 0; i < 100; i++) {
        let box = document.createElement('div');
        box.classList.add('chaosBox');
        box.style.backgroundColor = getRandomColor();
        box.style.top = Math.random() * 100 + 'vh';
        box.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(box);
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
