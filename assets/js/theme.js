/**
 * OpenBlog Theme & Appearance Controller
 * Manages light/dark mode toggling, system preferences, and local storage persistence.
 */

(function () {
  const STORAGE_KEY = 'openblog-theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateToggleIcons(theme);
  }

  function updateToggleIcons(theme) {
    const sunIcons = document.querySelectorAll('.icon-sun');
    const moonIcons = document.querySelectorAll('.icon-moon');

    sunIcons.forEach(icon => {
      icon.style.display = theme === 'dark' ? 'block' : 'none';
    });
    moonIcons.forEach(icon => {
      icon.style.display = theme === 'dark' ? 'none' : 'block';
    });
  }

  // Initialize theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Bind toggle action on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    updateToggleIcons(document.documentElement.getAttribute('data-theme') || initialTheme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      });
    });
  });

  // Listen for OS scheme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
