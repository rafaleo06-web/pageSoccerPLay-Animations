const modal=document.querySelector('.modal');
const modal_content_closed=document.querySelector('.modal-content-closed');
const legos = document.querySelectorAll(".legos");//return a NodeList[img, img, img]
console.log(legos);

for (const lego of legos) {
  lego.addEventListener("click", () => {
    modal.classList.remove("inactive");
    modal.classList.add("visible");
  });
  
}

modal_content_closed.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("inactive");
})

