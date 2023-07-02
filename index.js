let count_pe = document.getElementById("count_pe");
let save_pe = document.getElementById("save_pe");
let count = 0;

function increment() {
    count += 1;
    count_pe.textContent = count;
}

function save() {
    let countP = count + "-";
    save_pe.textContent +=countP;
    count_pe.textContent = 0;
    count = 0;
}
