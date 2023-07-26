const $ = document.querySelector.bind(document)
const data = [
    {
        icon: `
       <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon src="https://cdn.lordicon.com/wlpxtupd.json" trigger="hover"
                            colors="primary:#121331,secondary:#1663c7" style="width:250px;height:250px; left: 20%;">
                        </lord-icon>
        `,
        title: "Giải thưởng Queen's Anniversary Prize for Higher and Further Education:",
        info: "Giải thưởng này được trao cho trường vào năm 2005 để vinh danh những đóng góp của trường trong lĩnh vực giáo dục và đào tạo trực tuyến.",
        img: "../images/gioithieu3.jpg"
    },
    {
        icon: `
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon src="https://cdn.lordicon.com/kejpvrvr.json" trigger="hover"
                            colors="primary:#121331,secondary:#ffc738,tertiary:#1663c7,quaternary:#ebe6ef,quinary:#794628"
                            style="width:250px;height:250px; left: 20%;">
                        </lord-icon>
        `,
        title: "Giải thưởng Times Higher Education Awards:",
        info: "Trường Đại học Mở đã đạt giải thưởng này nhiều lần, bao gồm giải thưởng University of the Year năm 2018 và giải thưởng Outstanding Support for Students năm 2020.",
        img: "../images/gioithieu4.jpg"
    },
    {
        icon: `
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon src="https://cdn.lordicon.com/gqqykmqo.json" trigger="hover"
                            colors="outline:#121331,primary:#1663c7,secondary:#000000,tertiary:#d1f3fa,quaternary:#f3c3ba"
                            style="width:250px;height:250px; left: 20%;">
                        </lord-icon>
        `,
        title: "Giải thưởng Reimagine Education Awards:",
        info: "Trường đã đạt giải thưởng này nhiều lần, bao gồm giải thưởng Best Online Program for Teaching and Learning năm 2017 và giải thưởng AI Award for Education năm 2019.",
        img: "../images/gioithieu1.jpg"
    },
    {
        icon: `
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon src="https://cdn.lordicon.com/kjkiqtxg.json" trigger="hover"
                            colors="outline:#121331,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef"
                            style="width:250px;height:250px; left: 20%;">
                        </lord-icon>
        `,
        title: "Giải thưởng OpenupEd Quality Label:",
        info: "Trường Đại học Mở đã đạt giải thưởng này năm 2014 để vinh danh chất lượng các khóa học trực tuyến của trường.",
        img: "../images/gioithieu2.jpg"
    },
    {
        icon: `
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        <lord-icon src="https://cdn.lordicon.com/vkweisbr.json" trigger="hover"
            colors="outline:#121331,primary:#646e78,secondary:#2ca58d,tertiary:#4bb3fd"
            style="width:250px;height:250px; left: 20%;">
        </lord-icon>
        `,
        title: "Giải thưởng Teaching Excellence Framework (TEF):",
        info: "Trường đã đạt được TEF Gold Award năm 2017, đánh giá chất lượng giảng dạy và hỗ trợ sinh viên của trường là xuất sắc.",
        img: "../images/NgonNgu.jpg"
    }

]
let count = 2;
const prize_load = data.map(d => {
    const className = count % 2 === 0 ? "prize-even" : "prize-odd";
    count++;
    if (className === "prize-odd") {
        return `
        <div class="prize">
            <div class="container">
                <div class="info">
                    <div>
                        ${d.icon}
                    </div>
                    <h4>${d.title}</h4>
                    <p>${d.info}</p>
                </div>
                <div class="prize-image"><img src="${d.img}" alt="Ngôn Ngữ Anh"></div>
            </div>
        </div>
    `;
    } else if (className === "prize-even") {
        return `
        <div class="prize">
            <div class="container">
                <div class="prize-image"><img src="${d.img}" alt="Ngôn Ngữ Anh"></div>
                <div class="info">
                    <div>
                        ${d.icon}
                    </div>
                    <h4>${d.title}</h4>
                    <p>${d.info}</p>
                </div>
            </div>
        </div>
    `;
    }
})
$('.prizes').innerHTML += prize_load.join('');

