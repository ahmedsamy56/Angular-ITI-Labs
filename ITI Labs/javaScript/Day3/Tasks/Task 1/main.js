function GetNumbers() {
    var input = document.getElementById("myInput").value;

    var numberSet = new Set(
        input.split(',').map(Number).filter(n => !isNaN(n))
    );

    var values = [...numberSet]; 

    var min = 1e8, secondMin = 1e8;
    var max = -1e8, secondMax = -1e8;

    for (var num of values) {
        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }

        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    document.getElementById("SecSmall").innerText = secondMin;
    document.getElementById("SecBig").innerText = secondMax;
}
