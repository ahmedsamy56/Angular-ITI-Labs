function convertText() {
    var input = document.getElementById("myInput").value;
    input = input.toLowerCase();

      
    var words = input.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            var tempChar= "";
            tempChar = words[i].charAt(0).toUpperCase();
            tempChar += words[i].slice(1);
            words[i] = tempChar
        }
    }

    var result = words.join(" ");


    console.log(result)
    document.getElementById("output").innerText = result;

}
