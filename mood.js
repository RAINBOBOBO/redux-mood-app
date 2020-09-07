window.onload = function() {
  const faceElement = document.querySelector("#face");

  document.querySelector("#happy")
    .addEventListener("click", function () {
      store.dispatch({ type: "HAPPY"});
      const currentMood = store.getState().mood;
      faceElement.innerText = currentMood;
    });

  document.querySelector("#sad")
    .addEventListener("click", function () {
      store.dispatch({ type: "SAD"});
      const currentMood = store.getState().mood;
      faceElement.innerText = currentMood;
    });

  document.querySelector("#angry")
    .addEventListener("click", function () {
      store.dispatch({ type: "ANGRY"});
      const currentMood = store.getState().mood;
      faceElement.innerText = currentMood;
    });

  document.querySelector("#confused")
    .addEventListener("click", function () {
      store.dispatch({ type: "CONFUSED"});
      const currentMood = store.getState().mood;
      faceElement.innerText = currentMood;
    });
}