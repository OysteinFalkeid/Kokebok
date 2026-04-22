const search = document.getElementById("search");
const cards = document.querySelectorAll(".recipe-card");

function normalize(str) {
  return str.toLowerCase().replace(/[-_\s]/g, "");
}

function fuzzy(query, target) {
  let i = 0;
  target = normalize(target);
  query = normalize(query);
  for (const char of query) {
    i = target.indexOf(char, i) + 1;
    if (!i) return false;
  }
  return true;
}

search.addEventListener("input", () => {
  const query = search.value;
  cards.forEach(card => {
    const name = card.dataset.name;
    card.style.display = fuzzy(query, name) ? "block" : "none";
  });
});