
const keywordArgumentBtn = document.getElementById("keyword-argument-btn");

function keywordArg() {
  let keywordArgumentValue = document.console.keywordArgument;

  if (keywordArgumentValue.value === "") {
    keywordArgumentValue.value = "";
    keywordArgumentBtn.style.background = "coral";
    keywordArgumentBtn.style.border = "2px inset black";
  } else {
      keywordArgumentValue.value = ", *";
      keywordArgumentBtn.style.background = "white";
      keywordArgumentBtn.style.border = "2px solid coral";
  }

}
