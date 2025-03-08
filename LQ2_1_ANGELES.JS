let user_name = prompt("Enter Username:");
let user_password = prompt("Enter Password:");

const CorrectUsername = "Ben"; // Example username
const CorrectPassword = "Ben17"; // Example password

if (user_name === CorrectUsername && user_password === CorrectPassword) {
    alert(`Welcome ${user_name}`);
} else {
    alert("Maybe Username or Password is Invalid or Does not Match");
}
