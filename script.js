document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");

  if (productGrid) {
    fetch("data/products.json")
      .then(res => res.json())
      .then(data => {
        data.products.forEach(prod => {
          const div = document.createElement("div");
          div.className = "product-card";
          div.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}" />
            <h3>${prod.name}</h3>
            <p>${prod.price}</p>
          `;
          productGrid.appendChild(div);
        });
      });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We'll get back to you soon.");
      contactForm.reset();
    });
  }
});
