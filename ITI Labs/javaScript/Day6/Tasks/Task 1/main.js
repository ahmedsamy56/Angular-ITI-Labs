var tbody = document.getElementById("tbody");
var fetchUserDataBtn = document.getElementById("btn");

fetchUserDataBtn.addEventListener('click', function () {
    var ImgXhr = new XMLHttpRequest();
   
    ImgXhr.onreadystatechange = function () {
        if (ImgXhr.readyState == 4 && ImgXhr.status == 200) {
            var dogs = JSON.parse(ImgXhr.responseText).message;
            var userXhr = new XMLHttpRequest();
            

            userXhr.onreadystatechange = function () {
                if (userXhr.readyState == 4 && userXhr.status == 200) {
                    var usersData = JSON.parse(userXhr.responseText);
                    for (var i = 0; i < usersData.length; i++) {
                        var user = usersData[i];
                        var row = document.createElement("tr");

                        var id = document.createElement("td");
                        id.textContent = usersData[i].id;


                        var imgTd = document.createElement("td")
                        var img = document.createElement("img")
                        img.src = dogs[i]
                        
                        imgTd.appendChild(img);

                        var name = document.createElement("td")
                        name.textContent = user.name;

                        var username = document.createElement("td")
                        username.textContent = user.username;

                        var phone = document.createElement("td")
                        phone.textContent = user.phone;

                        var email = document.createElement("td")
                        email.textContent = user.email;

                        var city = document.createElement("td")
                        city.textContent = user.address.city;

                        var website = document.createElement("td")
                        var link = document.createElement("a")
                        link.href = "http://" + user.website
                        link.textContent = user.website
                        website.appendChild(link);

                       
                        var action = document.createElement("td");
                        var deleteBtn = document.createElement("button");
                        deleteBtn.textContent = "Delete";
                        deleteBtn.style.marginRight = "5px";
                        deleteBtn.addEventListener("click", function() {
                            var tr = this.parentNode.parentNode;
                            tr.parentNode.removeChild(tr);
                        });

                       
                        var viewBtn = document.createElement("button");
                        viewBtn.textContent = "View";
                        viewBtn.addEventListener("click", function() {
                            var tr = this.parentNode.parentNode;
                            var tds = tr.getElementsByTagName("td");

                            var imgSrc = tds[1].getElementsByTagName("img")[0].src;
                            var name = tds[2].textContent;
                            var username = tds[3].textContent;
                            var phone = tds[4].textContent;
                            var email = tds[5].textContent;
                            var city = tds[6].textContent;
                            var website = tds[7].getElementsByTagName("a")[0].textContent;

                            document.cookie = "name=" + name + "; path=/";
                            document.cookie = "username=" + username + "; path=/";
                            document.cookie = "phone=" + phone + "; path=/";
                            document.cookie = "email=" + email + "; path=/";
                            document.cookie = "city=" + city + "; path=/";
                            document.cookie = "website=" + website + "; path=/";
                            document.cookie = "Img=" + imgSrc + "; path=/";

                            window.open("profile.html");
                        });
                        action.appendChild(deleteBtn);
                        action.appendChild(viewBtn);

                        row.append(id,imgTd, name, username, phone, email, city, website, action);
                        tbody.appendChild(row);
                    }
          
                }
            };

            userXhr.open("GET", "https://jsonplaceholder.typicode.com/users");
            userXhr.send("");
        }
    };

    ImgXhr.open("GET", "https://dog.ceo/api/breeds/image/random/10");
    ImgXhr.send("");

});

var searchBtn = document.getElementById('searchBtn');
var searchInput = document.getElementById('search');

searchBtn.addEventListener('click', function() {
    var searchId = searchInput.value;
    var rows = tbody.getElementsByTagName('tr');
    var found = false;
    for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = 'none';
    }
    for (var i = 0; i < rows.length; i++) {
        var existId = rows[i].getElementsByTagName('td')[0];
        if (existId.textContent == searchId) {
            rows[i].style.display = '';
            found = true;
            break;
        }
    }

    if (!found) {
        for (var j = 0; j < rows.length; j++) {
            rows[j].style.display = '';
        }
    }
});
