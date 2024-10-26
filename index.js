window.addEventListener("load", () => {
  const section = document.getElementsByClassName("products")[0];

  section?.scrollIntoView({ behavior: "smooth" });

  console.log(section);
});
