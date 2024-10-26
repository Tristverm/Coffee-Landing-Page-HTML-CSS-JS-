window.addEventListener("load", () => {
  const section = document.getElementsByClassName("cards")[0];

  section?.scrollIntoView({ behavior: "smooth" });

  console.log(section);
});
