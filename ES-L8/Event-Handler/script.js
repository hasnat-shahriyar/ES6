// Event Handler
function button() {
    console.log("hello world");
    alert("Yay! It's working");
}

// Select Button: DOM
const domButton = document.getElementById("dom-button");

// Add Event Listener to the DOM button
domButton.addEventListener("click", function() {
    console.log("DOM");
    alert("Event Listener is working");
});
