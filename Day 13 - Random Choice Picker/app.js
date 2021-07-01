const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  // randomSelect...

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});


function createTags(input) {
  const tags = input
    .split(",")
    .filter((t) => t.trim() !== "")
    .map((t) => t.trim());

  tagsEl.innerHTML = "";

  tags.forEach((t) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = t;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlighTag(randomTag);

    setTimeout(() => {
      unHighlighTag(randomTag);
    }, 100);
  }, 100);


  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
        const randomTag = pickRandomTag()

        highlighTag(randomTag)
    },100)

  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");

  return tags[Math.floor(Math.random() * tags.length)];
}

function highlighTag(tag) {
  tag.classList.add("highlight");
}

function unHighlighTag(tag) {
  tag.classList.remove("highlight");
}
