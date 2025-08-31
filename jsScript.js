document.addEventListener("DOMContentLoaded", function () {
  // Get the search input
  const searchInput = document.querySelector(".Search");

  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll("table tr");

    // Start from row index 1 (skip the table header)
    for (let i = 1; i < rows.length; i++) {
      let nameCell = rows[i].getElementsByTagName("td")[1]; // 2nd column = Name
      if (nameCell) {
        let nameText = nameCell.textContent || nameCell.innerText;

        // Show row if match, hide otherwise
        if (nameText.toLowerCase().includes(filter)) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  });
});
