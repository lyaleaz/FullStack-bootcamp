document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');

    for (let i = 0; i < 9; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        
        box.onmouseenter = function() {
            this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        };

        container.appendChild(box);
    }
});
