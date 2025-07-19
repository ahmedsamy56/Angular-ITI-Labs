function countEle() {
  var tag = document.getElementById("tagInput").value;
  var className = document.getElementById("classInput").value;
  var id = document.getElementById("idInput").value;
  var name = document.getElementById("nameInput").value;

  let result = '';

  if (tag) {
    var tags = document.getElementsByTagName(tag);
    console.log(tags);
    result += `${tag}: ${tags.length} `;
  }

  if (className) {
    var classes = document.getElementsByClassName(className);
    console.log(classes);
    result += `${className}: ${classes.length} `;
  }

  if (id) {
    var element = document.getElementById(id);
    result += `${id}: ${element ? 'true' : 'false'}  `;
  }

  if (name) {
    var NameTage = document.getElementsByName(name);
    console.log(NameTage);
    result += `'${name}': ${NameTage.length}`;
  }

  document.getElementById("output").textContent = result;
}