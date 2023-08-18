document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("survey-form");
    const pages = document.querySelectorAll(".page");
    const next1Button = document.getElementById("next1");
    const prev2Button = document.getElementById("prev2");
    const submitButton = document.getElementById("submit");
  
    let currentPage = 0;
  
    function showPage(pageIndex) {
      pages.forEach((page, index) => {
        if (index === pageIndex) {
          page.style.display = "block";
        } else {
          page.style.display = "none";
        }
      });
    }
  
    next1Button.addEventListener("click", () => {
      currentPage = 1;
      showPage(currentPage);
    });
  
    prev2Button.addEventListener("click", () => {
      currentPage = 0;
      showPage(currentPage);
    });
  
    submitButton.addEventListener("click", () => {
      // Here, you can implement data submission logic.
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const feedback = document.getElementById("feedback").value;
      
      console.log("Submitted Data:", { name, age, gender, feedback });
    });
  
    // Initial page display
    showPage(currentPage);
  });
  