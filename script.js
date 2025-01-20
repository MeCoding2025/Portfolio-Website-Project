function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// Dark Mode Toggle
function setupThemeToggle() {
  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'theme-toggle-container';
  
  toggleContainer.innerHTML = `
    <button class="theme-toggle-btn">
      <span class="toggle-circle"></span>
    </button>
  `;
  
  document.body.appendChild(toggleContainer);

  const toggleBtn = toggleContainer.querySelector('.theme-toggle-btn');
  
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'dark') {
    toggleBtn.classList.add('dark-mode');
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    toggleBtn.classList.toggle('dark-mode');
  }

  toggleBtn.addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', setupThemeToggle);