let text = document.getElementById("toggleText");

function textToggle() {
  if (text.innerHTML === "Hello world!") {
    text.innerHTML = "Goodbye world!";

    document.querySelector("button").innerHTML = "Click to say hello!";
  } else {
    text.innerHTML = "Hello world!";
    document.querySelector("button").innerHTML = "Click to say goodbye!";
  }
}
