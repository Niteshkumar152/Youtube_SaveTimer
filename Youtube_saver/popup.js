window.onload = function () {
  const contents = document.getElementById("contents");
  const recommendationList = document.querySelector(
    ".ytd-watch-next-secondary-results-renderer"
  );
  if (contents || recommendationList) {
    contents.classList.add("hide-the-card-items");
    recommendationList.classList.add("hide-the-card-items");
  }
};
