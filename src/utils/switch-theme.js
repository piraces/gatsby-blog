// @flow
const switchTheme = () => {
  if (document.documentElement) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark' && document.documentElement) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (document.documentElement) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
};

export default switchTheme;