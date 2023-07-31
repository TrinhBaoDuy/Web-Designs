function napcauhoi() {
  fetch(`../JSON/cauhoi.json`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let d of data) {
        let a = document.getElementById("napcauhoi");
        a.innerHTML += `
          <div class="ques-item">
                        <div class="ques">${d.question}<span class="arrow-circle">
                        <i class="fa-solid fa-plus"></i>
                    </span></div>
                        <div class="ans">${d.answer}</div>
                    </div>
          `
      }
    });
}