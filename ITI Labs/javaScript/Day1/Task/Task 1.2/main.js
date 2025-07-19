 var sum = 0;
 num = 10e5;
while(num != 0 && sum <= 100){
    num = Number(prompt("please enter your num"));
    if(isNaN(num)) continue ;
    sum += num;
}

alert(`sum of numbers is ${sum}`);

