window.addEventListener("load", () => {
  const section = document.getElementsByClassName("coffee-container")[0];

  section?.scrollIntoView({ behavior: "smooth" });

  console.log(section);
});
