let inputs = document.querySelectorAll("#inputs");
inputs[0].focus();
inputs.forEach((p, i) => {
  p.addEventListener("keydown", () => {
    p.value = "";

    if (i < inputs.length - 1) {
      setTimeout(() => inputs[i + 1].focus(), 10);
    } else {
      setTimeout(() => inputs[0].focus(), 10);
    }
  });
});
