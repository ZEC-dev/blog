const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙 暗黑模式';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ 亮色模式';
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#eee';
    } else {
        darkModeToggle.textContent = '🌙 暗黑模式';
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
});
