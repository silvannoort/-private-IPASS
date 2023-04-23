const categorieMenu = document.getElementById("categorie-menu");
const artikelenSection = document.getElementById("artikelen");

async function getCategorieen() {
    const response = await fetch("/api/categorieen");
    return response.json();
}

async function getArtikelen() {
    const response = await fetch("/api/artikelen");
    return response.json();
}

async function init() {
    const categorieen = await getCategorieen();
    const artikelen = await getArtikelen();

    // Categorieën toevoegen aan het menu
    categorieen.forEach((categorie) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#categorie-${categorie.id}`;
        a.textContent = categorie.naam;
        li.appendChild(a);
        categorieMenu.appendChild(li);
    });

    // Artikelen toevoegen aan de pagina
    artikelen.forEach((artikel) => {
        const artikelDiv = document.createElement("div");
        artikelDiv.classList.add("artikel");

        const h2 = document.createElement("h2");
        h2.textContent = artikel.titel;
        artikelDiv.appendChild(h2);

        const img = document.createElement("img");
        img.src = artikel.afbeeldingUrl;
        img.alt = artikel.titel;
        artikelDiv.appendChild(img);

        const p = document.createElement("p");
        p.textContent = artikel.inhoud;
        artikelDiv.appendChild(p);

        const a = document.createElement("a");
        a.href = "#"; // vervang deze URL met de productlink van uw partnerwebsite
        a.textContent = "Meer informatie";
        artikelDiv.appendChild(a);

        artikelenSection.appendChild(artikelDiv);
    });
}

init();
