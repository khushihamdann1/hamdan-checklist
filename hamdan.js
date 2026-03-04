document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Load saved states
    checkboxes.forEach(function (checkbox) {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === "true") {
            checkbox.checked = true;
        }

        // Save state when changed
        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
});