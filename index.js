function addingEventListener() {
  const input = document.getElementById("button");
  function clickAlert() {
    alert("I eas clicked!");
  }
  input.addEventListener("click", clickAlert);
}
