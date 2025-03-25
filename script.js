
const keywordArgumentBtn = document.getElementById("keyword-argument-btn");

function keywordArg() {
  let keywordArgumentValue = document.console.keywordArgument;

  if (keywordArgumentValue.value === "") {
    keywordArgumentValue.value = ", *";
    keywordArgumentBtn.style.color = "coral";
    keywordArgumentBtn.style.background = "white";
    keywordArgumentBtn.style.border = "2px solid coral";
    keywordArgumentBtn.style.padding = "13px 8px";

  } else {
    keywordArgumentValue.value = "";
    keywordArgumentBtn.style.color = "white";
    keywordArgumentBtn.style.background = "coral";
  }

}
