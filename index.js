window.addEventListener("load", () => {
  const section = document.getElementsByClassName("cards")[0];

  section?.scrollIntoView({ behavior: "smooth" });

  console.log(section);
});
let date = new Date().getFullYear();
const para = document.getElementsByClassName("year")[0];
para.textContent = date.toString();
// console.log(para);
