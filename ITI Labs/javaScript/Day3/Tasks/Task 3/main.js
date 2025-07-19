 function highlightCircle() {
      const input = document.getElementById('inputNumber');
      const num = parseInt(input.value);

      document.getElementById('circle1').className = 'circle';
      document.getElementById('circle2').className = 'circle';
      document.getElementById('circle3').className = 'circle';


      if (num >= 1 && num <= 3) {
        input.placeholder = `you entered : ${num}`;
        input.value = '';

        if (num === 1) document.getElementById('circle1').classList.add('red');
        else if (num === 2) document.getElementById('circle2').classList.add('yellow');
        else if (num === 3) document.getElementById('circle3').classList.add('green');
      } else {
        input.value = '';
      }
    }