const mainGallery = document.getElementById("mainGallery");

for(let i = 1; i < 18;i++)
{
    const img = document.createElement("img");
    img.src = `Photography/${i}.jpg`;
    img.classList.add("mas-item"); 
    mainGallery.appendChild(img);
}