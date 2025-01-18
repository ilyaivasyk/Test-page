// Отримуємо елементи меню та кнопки
const menu = document.getElementById("burger-menu");
const menuIcon = document.querySelector(".menu__icon");
const menuClose = document.querySelector(".menu__close");

// Функція для toggle (перемикання) меню
function toggleMenu() {
  menu.classList.toggle("open"); // Перемикає клас "open"

  if (menu.classList.contains("open")) {
    document.body.style.overflow = "hidden"; // Забороняємо прокрутку сторінки при відкритому меню
    menuIcon.style.display = "none"; // Приховуємо іконку меню
  } else {
    document.body.style.overflow = "auto"; // Відновлюємо прокрутку сторінки при закритому меню
    menuIcon.style.display = "block"; // Показуємо іконку меню
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    menuIcon.style.display = "none";
  }
  else {
    menuIcon.style.display = "block"; 
  }
});

// Подія на відкриття і закриття меню (toggle)
menuIcon.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
