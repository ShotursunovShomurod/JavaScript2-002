document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");
    const form = document.querySelector(".form");
    const submit = document.querySelector(".submit");
  
    // Formani yuborilishining oldini olish
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  
    submit.addEventListener("click", (e) => {
      e.preventDefault(); // Bu yerda e parametridan foydalanamiz
      inputClear();
    });
  
    function inputClear() {
      let val = input.value;
      if (val.trim() !== "") {
        TEL_NUMBERS.unshift(val); // input qiymatini TEL_NUMBERS ro'yxatiga qo'shamiz
        input.value = ""; // inputni tozalash
      }
    }
  
    const TEL_NUMBERS = [
      "+998 97 254 33 54",
      "+998 91 005 26 74",
      "+998 99 750 13 41",
      "+998 90 962 71 13",
      "+998 99 822 56 64",
      "+998 91 466 42 72",
      "+998 94 562 54 36",
      "+998 91 224 60 48",
      "+998 99 797 57 67",
      "+998 95 019 06 68",
      "+998 50 009 16 21",
      "+998 97 005 87 47",
    ];
  
    btn.addEventListener("click", () => {
      let inputvalue = input.value;
  
      if (inputvalue.trim() !== "") {
        TEL_NUMBERS.unshift(inputvalue);
      }
  
      console.log(TEL_NUMBERS);
  
      btn.setAttribute("disabled", true);
  
      let interval = setInterval(() => {
        let index = Math.floor(Math.random() * TEL_NUMBERS.length);
        title.textContent = TEL_NUMBERS[index];
      }, 50);
  
      setTimeout(() => {
        clearInterval(interval);
        btn.removeAttribute("disabled");
        let finalIndex = Math.floor(Math.random() * TEL_NUMBERS.length);
        title.textContent = TEL_NUMBERS[finalIndex];
      }, 2500);
    });
  });  