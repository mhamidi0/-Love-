const surpriseButton = document.getElementById("surpriseBtn");
const revealMessage = document.getElementById("revealMessage");
const glowToggle = document.getElementById("glowToggle");
const glowLabel = document.getElementById("glowLabel");

surpriseButton.addEventListener("click", () => {
  const isHidden = revealMessage.hidden;
  revealMessage.hidden = !isHidden;
  surpriseButton.setAttribute("aria-expanded", String(isHidden));
  surpriseButton.querySelector("span:nth-child(2)").textContent =
    isHidden ? "این حرف رو دوباره پنهون کن" : "حرفی که می‌خوام بدونی";
  if (isHidden) {
    revealMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

glowToggle.addEventListener("click", () => {
  const enabled = document.body.classList.toggle("glow-mode");
  glowToggle.setAttribute("aria-pressed", String(enabled));
  glowLabel.textContent = enabled ? "حالت درخشان روشنه" : "حالت درخشان";
});

// کارت‌ها با صفحه‌کلید هم قابل دسترسی‌اند.
document.querySelectorAll(".reason-card").forEach((card) => {
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("featured");
    }
  });
});