const $ = document.querySelector.bind(document)
const data = [
    {
        name: "Ngôn ngữ anh",
        sochitieu: 100,
        diemchuan:28.5,
        diemdau:29.0,
        chungchi :"không"
    },
    {
        name: "Ngôn ngữ nhật",
        sochitieu: 100,
        diemchuan:28.5,
        diemdau:29.0,
        chungchi :"Không"
    },
    {
        name: "Ngôn ngữ trung",
        sochitieu: 100,
        diemchuan:28.5,
        diemdau:29.0,
        chungchi :"Không"
    },
    {
        name: "Ngôn ngữ hàn",
        sochitieu: 100,
        diemchuan:28.5,
        diemdau:29.0,
        chungchi :"Không"
    },

]
const diem_load = data.map(d => {
    return `
        <tr>
                <td>${d.name}</td>
                <td>${d.sochitieu}</td>
                <td>${d.diemchuan}</td>
                <td>${d.diemdau}</td>
                <td>${d.chungchi}</td>
              </tr>
        </div>
        `
})
$('.diemnganh').innerHTML += diem_load.join('');

