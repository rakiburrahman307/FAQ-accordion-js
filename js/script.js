const cardItemsDiv = document.querySelectorAll(".card-items");
cardItemsDiv.forEach((item) => {
  console.log();
  const question = item.firstElementChild;
  const content = item.lastElementChild;
  const iconPlus = question.querySelector(".card-item-icons img:first-child");
  const iconMinus = question.querySelector(".card-item-icons img:last-child");
  const lastItem = cardItemsDiv[cardItemsDiv.length - 1];

  //   check the style property
  content.style.display = "none";
  iconMinus.classList.add("hide-icon");

  // add the event listener
  question.addEventListener("click", () => {
    const isVisible = content.style.display === "block";

    // Hide all contents and reset icons
    cardItemsDiv.forEach((otherItem) => {
      const otherContent = otherItem.lastElementChild;
      const otherIconPlus = otherItem.querySelector(
        ".card-item-icons img:first-child"
      );
      const otherIconMinus = otherItem.querySelector(
        ".card-item-icons img:last-child"
      );

      // Hide content and reset icons for all items
      otherContent.style.display = "none";
      otherIconPlus.classList.remove("hide-icon");
      otherIconMinus.classList.add("hide-icon");
    });
    // remove last border bottom
    lastItem.style.borderBottom = "0px solid transparent";
    //conditional add style
    content.style.display = isVisible ? "none" : "block";
    // add the max hight
    content.style.maxHeight = "300px";
    //toggle add style
    iconPlus.classList.toggle("hide-icon", !isVisible);
    iconMinus.classList.toggle("hide-icon", isVisible);
  });
});
