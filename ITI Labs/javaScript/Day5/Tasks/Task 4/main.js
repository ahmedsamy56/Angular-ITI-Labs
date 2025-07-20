function cookieServ() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var genderInputs = document.getElementsByName('gender');
  var gender = '';

  for (var i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      gender = genderInputs[i].value;
      break;
    }
  }
  
  var color = document.getElementById('color').value;

  document.cookie = 'name=' + name +'; path=/';
  document.cookie = 'age=' + age +'; path=/';
  document.cookie = 'gender=' + gender +'; path=/';
  document.cookie = 'color=' + color + '; path=/';

  document.cookie = 'views=0; path=/';

  window.location.href = 'profile.html';
  return false;
}









function getCookies() {
  var cookies = document.cookie.split("; ");
  var res = {};

  for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split("=");
    var key = parts[0];
    var value = parts[1];
    res[key] = value;
  }

  return res;
}


function loadCookies() {
  var cookies = getCookies();

  document.getElementById('name').innerHTML = cookies.name;
  document.getElementById('age').innerHTML = cookies.age;
  document.getElementById('gender').innerHTML = cookies.gender;
  document.getElementById('color').innerHTML = cookies.color;

  var genderImg = document.getElementById('genderImg');
  if (genderImg) {
    if (cookies.gender === 'male') {
      genderImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qJ9pU6Xj2EJKaRDVz-9Bd0xh2LnMklGw&s';
      genderImg.alt = cookies.gender;
      
    } else if (cookies.gender === 'female') {
      genderImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPRQ6LprnPzvvP-_vVO_nhSokwda8CMsnwQ&s';
      genderImg.alt = cookies.gender;
    }
  }

  var views = cookies.views ? parseInt(cookies.views) + 1 : 1;
  document.cookie = "views=" + views + "; path=/";
  document.getElementById("views").innerHTML = views;
}
