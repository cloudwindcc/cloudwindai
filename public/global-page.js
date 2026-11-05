(() => {
  let lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';
  const button = document.getElementById('language');
  function render() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
      element.innerHTML = element.dataset[lang];
    });
    document.querySelectorAll('[data-home]').forEach(element => element.href = lang === 'en' ? '/en' : '/');
    document.querySelectorAll('[data-services]').forEach(element => element.href = lang === 'en' ? '/en#services' : '/#services');
    document.querySelectorAll('[data-cases]').forEach(element => element.href = lang === 'en' ? '/cases?lang=en' : '/cases');
    button.textContent = lang === 'zh' ? 'EN' : '繁中';
    button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : 'Switch to Traditional Chinese');
    document.title = lang === 'zh' ? '國際協作 · CloudWind AI' : 'International Collaboration · CloudWind AI';
  }
  button.addEventListener('click', () => {
    lang = lang === 'zh' ? 'en' : 'zh';
    const url = new URL(location.href);
    if (lang === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    render();
  });
  render();
})();
