
const box = document.getElementById('alertBox');
const title = document.getElementById('Title');
const icon = document.getElementById('Icon');
const message = document.getElementById('Message');
function showAlert(type) {


      if (type === 'success') {
        box.className = 'alert-box success';
        title.textContent = 'Success';
        icon.innerHTML = `<img src="ok.png" alt="Success Icon">`;
        message.textContent = 'This is a Success Message';
      } else {
        box.className = 'alert-box error';
        title.textContent = 'Error';
        icon.innerHTML = `<img src="Error.jpg" alt="Error Icon">`;
        message.textContent = 'This is an Error Message';
      }

      box.style.display = 'block';
    }