let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("white");
    });
    button.classList.add("white");
  });
});
let bg=document.querySelector(".bg_img img");
document.querySelectorAll(".images_container img").forEach(img=>{
    img.addEventListener("click",function(){
        bg.src=this.src;
    })
})
