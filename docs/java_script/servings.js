
let servings = 2;
const baseServings = 2;

function changeServings(delta) {
servings = Math.max(1, servings + delta);
document.getElementById("serving-count").textContent = servings;

document.querySelectorAll(".amount").forEach(el => {
    const base = parseFloat(el.dataset.amount);
    const unit = el.dataset.unit || "";
    const scaled = Math.round((base * servings / baseServings) * 10) / 10;
    el.textContent = scaled + unit;
});
}