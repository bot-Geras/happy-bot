function getBoredDom() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
      document.getElementById("title").textContent = "HappyBot (っ-̶●̃益●̶̃)っ";
      document.body.classList.add("fun");
    });
}

document.getElementById("btn").addEventListener("click", getBoredDom);
