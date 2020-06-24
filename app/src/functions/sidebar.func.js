export function eventosDasAbas(e) {
  Array.from(e.target.parentElement.children).forEach((li, index) => {
    const respectivaDiv = e.target.parentElement.parentElement.querySelector(
      "div"
    ).children[index];

    if (li.innerText === e.target.innerText) {
      li.className = "aberta";
      respectivaDiv.style = "display: block";
    } else {
      li.className = "";
      respectivaDiv.style = "display: none";
    }
  });
}
