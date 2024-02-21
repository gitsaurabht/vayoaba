function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }

  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  showPopup();

  setInterval(function() {
    showPopup();
    setTimeout(hidePopup, 4000); 
  }, 6000);