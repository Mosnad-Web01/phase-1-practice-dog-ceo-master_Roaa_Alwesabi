console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    // التحدي 1: جلب الصور
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        const imgContainer = document.getElementById("dog-image-container");
        images.forEach(imgUrl => {
          const img = document.createElement("img");
          img.src = imgUrl;
          imgContainer.appendChild(img);
        });
      });
  
    // التحدي 2: جلب السلالات
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        const breeds = data.message;
        const breedList = document.getElementById("dog-breeds");
        for (const breed in breeds) {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
        }
  
        // التحدي 3: تغيير لون النص عند النقر
        breedList.addEventListener("click", event => {
          if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // اختر اللون المناسب
          }
        });
      });
  
    // التحدي 4: تصفية السلالات
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", () => {
      const selectedLetter = breedDropdown.value;
      const breedItems = document.querySelectorAll("#dog-breeds li");
      breedItems.forEach(item => {
        const breedName = item.textContent;
        if (selectedLetter === "" || breedName.startsWith(selectedLetter)) {
          item.style.display = "list-item";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  