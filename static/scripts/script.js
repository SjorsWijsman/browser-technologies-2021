// Remove text update button if URLSearchParams are available
if ('URLSearchParams' in window) {
  // Remove text update button
  const button = document.getElementById('text-update-button');
  if (button) button.remove();

  // Select shirt setting form & buttons
  const form = document.getElementById('shirt-settings');
  const buttons = form.getElementsByTagName('input');

  // Prevent form submission
  form.onsubmit = (event) => {
    event.preventDefault();
  }

  // Set onclick function
  for (const button of buttons) {
    button.onclick = (event) => {
      updateQueryValue(event.target.name, event.target.value)
      // Set active class to self
      const sameButtons = document.querySelectorAll(`input[name='${event.target.name}']`)
      for (const sameButton of [...sameButtons]) {
        sameButton.classList.remove('active')
      }
      event.target.classList.add('active')
    }
  }
}

// Update text immediately if URLSearchParams are available
function updateText(event) {
  if ('URLSearchParams' in window) {
    // Set shirt text
    const shirtText = document.getElementById('shirt-text');
    shirtText.innerHTML = event.value;

    updateQueryValue('text', event.value)
  }
}

// Update query
function updateQueryValue(name, value) {
  // Set shirt color
  if (name === 'color') {
    const shirt = document.getElementById('shirt');
    const path = shirt.getElementsByTagName('path')[0];
    path.setAttribute('fill', value);
  }

  // Update query params
  const query = new URLSearchParams(window.location.search);

  if (value === '') {
    query.delete(name);
  } else {
    query.set(name, value);
  }

  const newPath = window.location.pathname + '?' + query.toString();
  history.pushState(null, '', newPath);

  if (name === 'sex') location.reload();
}
