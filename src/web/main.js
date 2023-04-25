async function loadContent() {
    try {
        const articles = await fetchArticles();
        displayArticles(articles);

        const products = await fetchProducts();
        displayProducts(products);
    } catch (error) {
        console.error("Error loading content:", error);
    }
}

async function fetchProducts() {
    const response = await fetch("/api/products");
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    return await response.json();
}

function displayProducts(products) {
    const main = document.querySelector("main");

    products.forEach((product) => {
        const productElement = createProductElement(product);
        main.appendChild(productElement);
    });
}

function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.className = "product";

    const name = document.createElement("h3");
    name.textContent = product.name;
    productElement.appendChild(name);

    const image = document.createElement("img");
    image.src = product.imageUrl;
    productElement.appendChild(image);

    const description = document.createElement("p");
    description.textContent = product.description;
    productElement.appendChild(description);

    const price = document.createElement("p");
    price.textContent = "€ " + product.price.toFixed(2);
    productElement.appendChild(price);

    const affiliateLink = document.createElement("a");
    affiliateLink.href = product.affiliateLink;
    affiliateLink.textContent = "Koop nu";
    affiliateLink.target = "_blank";
    affiliateLink.rel = "noopener noreferrer";
    productElement.appendChild(affiliateLink);

    return productElement;
}

document.addEventListener("DOMContentLoaded", () => {
    loadContent();

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(loadDashboard);

async function loadDashboard() {
    try {
        const salesData = await fetchAffiliateSales();
        displaySalesData(salesData);
    } catch (error) {
        console.error("Error loading dashboard data:", error);
    }
}

async function fetchAffiliateSales() {
    
}

function displaySalesData(salesData) {
    drawSalesChart(salesData);
    drawRevenueChart(salesData);
}

function drawSalesChart(salesData) {
    
    const data = new google.visualization.DataTable();
    data.addColumn("string", "Product");
    data.addColumn("number", "Sales");

    salesData.forEach(sale => {
        data.addRow([sale.productId, sale.price]);
    });

    const options = {
        title: "Product Sales",
        legend: { position: "none" }
    };

    const chart = new google.visualization.ColumnChart(document.getElementById("sales_chart"));
    chart.draw(data, options);
}

function drawRevenueChart(salesData) {
    
    const data = new google.visualization.DataTable();
    data.addColumn("string", "Product");
    data.addColumn("number", "Revenue");

    salesData.forEach(sale => {
        data.addRow([sale.productId, sale.price]);
    });

    
    const options = {
        title: "Product Revenue",
        legend: { position: "none" }
    };

    
    const chart = new google.visualization.ColumnChart(document.getElementById("revenue_chart"));
    chart.draw(data, options);
}

document.addEventListener("DOMContentLoaded", () => {
    google.charts.setOnLoadCallback(loadDashboard);
})


