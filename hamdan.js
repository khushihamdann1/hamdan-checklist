// Save state on click
document.getElementById('tick_list').addEventListener('change', (e) => {
  localStorage.setItem('myCheckboxState', e.target.checked);
});

// Load state on page load
window.onload = () => {
  const isChecked = localStorage.getItem('myCheckboxState') === 'true';
  document.getElementById('myCheckbox').checked = isChecked;
};
