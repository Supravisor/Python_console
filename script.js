
const keywordArgumentBtn = document.getElementById("keyword-argument-btn");

function keywordArg() {
  const keywordArgumentValue = document.console.keywordArgument.value;

  if (keywordArgumentValue === "") {
    keywordArgumentValue = ", *";
  }

}
