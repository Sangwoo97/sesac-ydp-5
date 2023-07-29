const writer = document.getElementById("writer");
const content = document.getElementById("content");
const submit = document.getElementById("submit");
let no = 1;

const getTime = () => {
    const dt = new Date();
    const time =
        dt.getFullYear() +
        "-" +
        (dt.getMonth() + 1) +
        "-" +
        dt.getDate() +
        " " +
        dt.getHours() +
        " : " +
        dt.getMinutes();
    return time;
};

submit.addEventListener("click", () => {
    if (writer.value !== "" && content.value !== "") {
        const trow = document.createElement("tr");
        const num = document.createElement("td");
        const person = document.createElement("td");
        const ct = document.createElement("td");
        const wd = document.createElement("td");

        num.innerHTML = no;
        person.innerHTML = writer.value;
        ct.innerHTML = content.value;
        wd.innerHTML = getTime();

        trow.append(num, person, ct, wd);
        document.querySelector("table").append(trow);
        no++;
        writer.value = "";
        content.value = "";
    } else {
        alert("빈칸 채우세요 !");
    }
});
