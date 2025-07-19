var form = document.getElementById('validationForm');
var nameInput = document.getElementById('name');
var passInput = document.getElementById('pass');
var emailInput = document.getElementById('email');
var genderInputs = document.querySelectorAll('input[name="gender"]');
var sportInputs = document.querySelectorAll('input[name="sport"]');
var resetBtn = document.querySelector('.reset-btn');

// Name validation
nameInput.addEventListener('input', function () {
  var text = nameInput.value.trim();
  var span = document.getElementById('nameError');
  if (text.length <= 4 && text.length > 0) {
    span.style.display = 'block';
    nameInput.style.border = '2px solid red';
  } else {
    span.style.display = 'none';
    nameInput.style.border = '2px solid green';
  }
});

// Password validation
passInput.addEventListener('input', function () {
  var text = passInput.value;
  var span = document.getElementById('passError');
  if (text.length <= 8 && text.length > 0) {
    span.style.display = 'block';
    passInput.style.border = '2px solid red';
  } else {
    span.style.display = 'none';
    passInput.style.border = '2px solid green';
  }
});

// Email validation
emailInput.addEventListener('input', function () {
  var text = emailInput.value.trim();
  var span = document.getElementById('emailError');
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(text) && text.length > 0) {
    span.style.display = 'block';
    emailInput.style.border = '2px solid red';
  } else {
    span.style.display = 'none';
    emailInput.style.border = '2px solid green';
  }
});

// Gender validation
for (var i = 0; i < genderInputs.length; i++) {
  genderInputs[i].addEventListener('change', function () {
    var span = document.getElementById('genderError');
    var checked = false;
    for (var j = 0; j < genderInputs.length; j++) {
      if (genderInputs[j].checked) checked = true;
    }
    if (!checked) {
      span.style.display = 'block';
    } else {
      span.style.display = 'none';
    }
  });
}

// Sport validation
for (var i = 0; i < sportInputs.length; i++) {
  sportInputs[i].addEventListener('change', function () {
    var span = document.getElementById('sportError');
    var checked = false;
    for (var j = 0; j < sportInputs.length; j++) {
      if (sportInputs[j].checked) checked = true;
    }
    if (!checked) {
      span.style.display = 'block';
    } else {
      span.style.display = 'none';
    }
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  nameInput.dispatchEvent(new Event('input'));
  passInput.dispatchEvent(new Event('input'));
  emailInput.dispatchEvent(new Event('input'));
  genderInputs[0].dispatchEvent(new Event('change'));
  sportInputs[0].dispatchEvent(new Event('change'));

  var errors = [
    document.getElementById('nameError').style.display,
    document.getElementById('passError').style.display,
    document.getElementById('emailError').style.display,
    document.getElementById('genderError').style.display,
    document.getElementById('sportError').style.display
  ];

  if (errors.every(function(d) { return d === 'none'; })) {
    var genderValue = '';
    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) genderValue = genderInputs[i].value;
    }
    var sportValues = [];
    for (var i = 0; i < sportInputs.length; i++) {
      if (sportInputs[i].checked) sportValues.push(sportInputs[i].value);
    }
    var data = {
      name: nameInput.value.trim(),
      pass: passInput.value,
      email: emailInput.value.trim(),
      gender: genderValue,
      sport: sportValues,
      country: document.getElementById('country').value
    };
    console.log(data);
  }
});





