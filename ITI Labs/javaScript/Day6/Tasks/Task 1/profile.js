function getCookies() {
  var cookies = document.cookie.split('; ');
  var res = {};
  for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split('=');
    var key = parts[0];
    var value = (parts[1]);
    res[key] = value;
  }
  return res;
}

function loadCookies() {
    var cookies = getCookies();
    document.getElementById('name').innerHTML = cookies.name;
    document.getElementById('username').innerHTML = cookies.username;
    document.getElementById('phone').innerHTML = cookies.phone;
    document.getElementById('email').innerHTML = cookies.email ;
    document.getElementById('website').innerHTML = cookies.website;
    document.getElementById('city').innerHTML = cookies.city;
    document.getElementById('profileImg').src = cookies.Img;
}
window.onload = loadCookies; 