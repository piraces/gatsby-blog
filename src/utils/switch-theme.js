// @flow
const switchTheme = () => {
  if (document.documentElement) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark' && document.documentElement) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else if (document.documentElement) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
};

export default switchTheme;