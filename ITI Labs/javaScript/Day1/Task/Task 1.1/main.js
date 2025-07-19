var message = String(prompt("Please enter your message:"));

for (var i = 1; i <= 6; i++) {
  document.writeln(`<h${i}>${message+ " " + i}</h${i}>`);
}