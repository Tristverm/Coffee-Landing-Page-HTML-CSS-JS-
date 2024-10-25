window.addEventListener("load", () => {
  const section = document.getElementsByClassName("section-content")[0];
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  console.log(section);
});
