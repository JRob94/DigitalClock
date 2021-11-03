// Time JavaScript Function
updateTime = () => {
    const fullDate = new Date();

    let HH = fullDate.getHours();
    let MM = fullDate.getMinutes();
    let SS = fullDate.getSeconds();

    HH = (HH < 10) ? "0" + HH : HH;
    MM = (MM < 10) ? "0" + MM : MM;
    SS = (SS < 10) ? "0" + SS : SS;

    let time = `${HH}:${MM}:${SS}`;
    document.querySelector(`#time`).innerText = time;
    setTimeout(updateTime, 1000);
}

// Date JavaScript Function
updateDate = () => {
    const fullDate = new Date();
    const monthList = [
        `January`,
        `February`,
        `March`,
        `April`,
        `May`,
        `June`,
        `July`,
        `August`,
        `September`,
        `October`,
        `November`,
        `December`
    ];

    const year = fullDate.getFullYear();
    const month = monthList[fullDate.getMonth()];
    const date = fullDate.getDate();
    let today = `${month} ${date} ${year}`;
    document.querySelector(`#date`).innerText = today;
}

updateTime(); updateDate();