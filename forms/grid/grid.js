//gets the number of rows and columns from the user, stores them in variables
let rows  = parseInt(prompt("Enter the number of rows you want"))
let cols = parseInt(prompt("Enter the number of columns you want"))

//nested for loop that prints out * based on the number of rows and columns the user entered
for (i = 1; i<=rows; i++){
  for (j = 1;j<=cols;j++){
    document.write("*")
    }
    document.write("<br />")
}