const setUpLanguageAndMode = () => {
  const mode = localStorage.getItem('mode');

  if (!mode) {
    localStorage.setItem('mode', 'DARK');
  }

  const language = localStorage.getItem('language');
  if (!language) {
    localStorage.setItem('language', 'ENGLISH');
  }
};

export default setUpLanguageAndMode;
