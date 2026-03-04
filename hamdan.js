window.addEventListener("DOMContentLoaded", function () {

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox, index) => {

        // Load saved state
        const savedState = localStorage.getItem("checkbox_" + index);

        if (savedState === "true") {
            checkbox.checked = true;
        }

        // Save on change
        checkbox.addEventListener("change", function () {
            localStorage.setItem("checkbox_" + index, checkbox.checked);
        });

    });

});