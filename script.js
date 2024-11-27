// script.js
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".score");
    const totalScoreElement = document.getElementById("total-score");
  
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", calculateTotal);
    });
  
    function calculateTotal() {
      let total = 0;
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          total += parseInt(checkbox.value, 10);
        }
      });
      totalScoreElement.textContent = total;
    }
  });
  