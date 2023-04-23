const categories = [
    {
        name: "Living Room",
        image: "living_room.jpg"
    },
    {
        name: "Bedroom",
        image: "bedroom.jpg"
    },
    {
        name: "Kitchen",
        image: "kitchen.jpg"
    },
    // ... more categories
];

function loadCategories() {
    const categoriesContainer = document.getElementById("categories");
    categories.forEach(category => {
        const categoryElement = document.createElement("div");
        categoryElement.className = "category";
        categoryElement.innerHTML = `
            <img src="${category.image}" alt="${category.name}">
            <h3>${category.name}</h3>
        `;
        categoriesContainer.appendChild(categoryElement);
    });
}

document.addEventListener("DOMContentLoaded", loadCategories);
