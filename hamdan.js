// This Script saves the checklist status in local browser memory
function saveChecklist() {
    const checkboxes = document.querySelectorAll('.day input[type="checkbox"]');
    const state = {};
    checkboxes.forEach(cb => {
        state[cb.id] = cb.checked;
    });
    localStorage.setItem('checklistState', JSON.stringify(state));
}

// Load state on page load
window.onload = () => {
    const savedState = JSON.parse(localStorage.getItem('checklistState'));
    if (savedState) {
        Object.keys(savedState).forEach(id => {
            document.getElementById(id).checked = savedState[id];
        });
    }
};
