let btn = document.querySelector(".btn");
let output = document.querySelector(".output");

btn.addEventListener("click", showJokes);

function showJokes(event) {
  let number = document.getElementById("number").value;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let demo = "";

      if (response.type === "success") {
        response.value.forEach(function (item) {
          demo += `<li>${item.joke}</li>`;
        });
      } else {
        alert("Someting went wrong");
      }

      output.innerHTML = demo;
    }
  };
  xhr.send();

  event.preventDefault();
}
