const $ = document.querySelector.bind(document)
const data = [
    {
        icon: `
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        <lord-icon
            src="https://cdn.lordicon.com/xxdqfhbi.json"
            trigger="hover"
            colors="primary:#121331,secondary:#ffc738,tertiary:#3080e8"
            style="width:250px;height:250px ;left :20%">
        </lord-icon>
        `,
        title: "Giải thưởng Queen's Anniversary Prize for Higher and Further Education1111111:",
        info: "Giải thưởng này được trao cho trường vào năm 2005 để vinh danh những đóng góp của trường trong lĩnh vực giáo dục và đào tạo trực tuyến.",
        img: "/images/Luat.jpg"
    },
    {
        icon: `
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon src="https://cdn.lordicon.com/wlpxtupd.json" trigger="hover"
                            colors="primary:#121331,secondary:#1663c7" style="width:250px;height:250px; left: 20%;">
                        </lord-icon>
        `,
        title: "Giải thưởng Queen's Anniversary Prize for Higher and Further Education222222222:",
        info: "Giải thưởng này được trao cho trường vào năm 2005 để vinh danh những đóng góp của trường trong lĩnh vực giáo dục và đào tạo trực tuyến.",
        img: "/images/Luat.jpg"
    },
    {
        icon: `
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        <lord-icon src="https://cdn.lordicon.com/wlpxtupd.json" trigger="hover"
            colors="primary:#121331,secondary:#1663c7" style="width:250px;height:250px; left: 20%;">
        </lord-icon>
        `,
        title: "Giải thưởng Queen's Anniversary Prize for Higher and Further Education333333333333:",
        info: "Giải thưởng này được trao cho trường vào năm 2005 để vinh danh những đóng góp của trường trong lĩnh vực giáo dục và đào tạo trực tuyến.",
        img: "/images/Luat.jpg"
    },
    {
        icon: `
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        <lord-icon
            src="https://cdn.lordicon.com/xxdqfhbi.json"
            trigger="hover"
            colors="primary:#121331,secondary:#ffc738,tertiary:#3080e8"
            style="width:250px;height:250px; left :20%">
        </lord-icon>
        `,
        title: "Giải thưởng Queen's Anniversary Prize for Higher and Further Education4444444444:",
        info: "Giải thưởng này được trao cho trường vào năm 2005 để vinh danh những đóng góp của trường trong lĩnh vực giáo dục và đào tạo trực tuyến.",
        img: "/images/Luat.jpg"
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

