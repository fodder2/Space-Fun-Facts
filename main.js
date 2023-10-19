document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#button")) return;

  fetch("https://api.nasa.gov/planetary/apod?api_key=fs3yGgMQ2oun7FYErtNlMLpuxgf5VAhV8sgou5ze")
    .then((response) => response.json())
    .then((data) => console.log(data))
	.then((data) => renderJoke(data));
});

function renderJoke(data) {
  const APODIMG = document.getElementById("url");
  document.getElementById("APODIMG").src = data.APODIMG;
}