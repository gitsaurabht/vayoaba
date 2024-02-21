document.getElementById('check').addEventListener('click', function() {
    let ul = document.querySelector('ul');
    ul.style.left = ul.style.left === '0%' ? '-100%' : '0%';
});
