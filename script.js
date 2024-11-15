document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM est chargé");
  });

  const colorboxid = document.getElementById("color-box");
  const chcolorbtnid = document.getElementById("change-color-btn");

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  chcolorbtnid.addEventListener("click", function () {
    colorboxid.style.backgroundColor = getRandomColor();
  });
