function generatePrediction() {
  let result = new Set();
  while (result.size < 3) {
    result.add(Math.floor(Math.random() * 100));
  }
  document.getElementById("resultatMennaj").innerText =
    "🎯 Mennaj@3: " + Array.from(result).join(" - ");
}
