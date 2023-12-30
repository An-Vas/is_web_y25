window.addEventListener('load', function() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    var footer = document.createElement('footer');
    footer.innerHTML = 'Page load time is ' + loadTime + ' mSeconds';
    document.body.appendChild(footer);
  });