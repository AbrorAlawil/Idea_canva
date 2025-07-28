// toggle class active
const Navbarnav = document.querySelector(".navbar-nav");
// ketika Menu di tekan
document.querySelector("#Menu").onclick = () => {
  Navbarnav.classList.toggle("active");
};
// tekan di luar
const Menu = document.querySelector("#Menu");
document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !Navbarnav.contains(e.target)) {
    Navbarnav.classList.remove("active");
  }
});
