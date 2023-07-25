function napdiemtest() {
  fetch(`../JSON/data.json`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let d of data) {
        let a = document.getElementById("napdiem");
        a.innerHTML += `
        <tr>
            <td>${d.name}</td>
            <td>${d.sochitieu}</td>
            <td>${d.diemchuan}</td>
            <td>${d.diemdau}</td>
            <td>${d.chungchi}</td>
        </tr>
        `
      }
    });
}