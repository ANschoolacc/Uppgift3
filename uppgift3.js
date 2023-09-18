let myText = document.getElementById("toggleText");

function btnToggle() {
  if (myText.innerHTML === "Hello world!") {
    myText.innerHTML = "Goodbye world!";

    document.querySelector("button").innerHTML = "Click to say hello!";
  } else {
    myText.innerHTML = "Hello world!";
    document.querySelector("button").innerHTML = "Click to say goodbye!";
  }
}
