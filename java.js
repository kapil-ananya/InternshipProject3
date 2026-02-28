// btn pr animation 
const buttons = document.querySelectorAll(".read-btn");

buttons.forEach(btn=>{ // sare btn ko select rko
  btn.addEventListener("click",()=>{
    btn.style.transform = "scale(0.7)";
    btn.style.transition = "0.15s";

    setTimeout(()=>{
      btn.style.transform = "scale(1)";
    },200);
  });
});

// btn click krne pr img show ho hide ho

document.querySelectorAll(".read-btn").forEach((btn, index)=>{

  btn.addEventListener("click", ()=>{

    const card = btn.parentElement;

    let img = card.querySelector("img");

    if(img){
      img.remove(); // agar image already hai → remove
      btn.textContent="Read More";
    }else{

      const newImg = document.createElement("img");

      const images = [
  "images/bloosm.jpg",
  "images/pink dairy.jpg"
];

      newImg.src = images[index];
      newImg.style.width="100%";
      newImg.style.marginTop="50px";
      newImg.style.borderRadius="10px";

      card.appendChild(newImg);

      btn.textContent="Hide Image";
    }

  });

});

window.addEventListener("load", () => {
  const section = document.querySelector(".about-section");
  if (section) {
    section.style.opacity = "1";
  }
});

const links=[
  "https://wa.me/1234567890",
  "https://youtube.com",
  "https://instagram.com"
];

document.querySelectorAll(".icons-container img").forEach((icon,index)=>{
  icon.addEventListener("click", ()=>{
    window.open(links[index],"_blank");
  });
});