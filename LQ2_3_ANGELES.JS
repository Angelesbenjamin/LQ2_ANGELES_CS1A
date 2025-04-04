// Display the list of available items 
console.log("Choose an item:");
console.log("A. Pepsi Cola      Php 30.00");
console.log("B. Coca Cola       Php 35.00");
console.log("C. Apple (per kg)  Php 100.00");
console.log("D. Orange (per kg) Php 120.00");
console.log("E. Hotdogs (per kg) Php 180.00");

// Prompt the user to select an iteMS
let itemChoice = prompt("Enter your item choice (A, B, C, D, or E):").toUpperCase();

// Prompt the user to enter the desired 
let quantity = parseInt(prompt("Enter the quantity to be ordered:"));

// Variable to store the calculated 
let totalPrice;

// Use a switch statement to calculate the total price 
switch (itemChoice) {
    case "A":
        // Calculate and display,PEPSI COLA
        totalPrice = quantity * 30;
        alert("You ordered " + quantity + " Pepsi Cola(s). Total Price: Php " + totalPrice);
        break;
    case "B":
        // Calculate and display , COCA COLA
        totalPrice = quantity * 35;
        alert("You ordered " + quantity + " Coca Cola(s). Total Price: Php " + totalPrice);
        break;
    case "C":
        // Calculate and display, APPLE
        totalPrice = quantity * 100;
        alert("You ordered " + quantity + " kg of Apple(s). Total Price: Php " + totalPrice);
        break;
    case "D":
        // Calculate and display, ORANGE
        totalPrice = quantity * 120;
        alert("You ordered " + quantity + " kg of Orange(s). Total Price: Php " + totalPrice);
        break;
    case "E":
        // Calculate and display,HATDOG
        totalPrice = quantity * 180;
        alert("You ordered " + quantity + " kg of Hotdog(s). Total Price: Php " + totalPrice);
        break;
    default:
        // Handle invalid item choice 
        alert("Invalid choice. Please enter A, B, C, D, or E.");
}
