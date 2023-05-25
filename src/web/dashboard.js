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
    const salesChartData = salesData.map(sale => ({ x: sale.productId, y: sale.price }));

    const chart = new Chart(document.getElementById("sales_chart"), {
        type: "bar",
        data: {
            datasets: [{
                label: "Product Sales",
                data: salesChartData,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Product"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Sales"
                    }
                }
            }
        }
    });
}

function drawRevenueChart(salesData) {
    const revenueChartData = salesData.map(sale => ({ x: sale.productId, y: sale.price }));

    const chart = new Chart(document.getElementById("revenue_chart"), {
        type: "bar",
        data: {
            datasets: [{
                label: "Product Revenue",
                data: revenueChartData,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Product"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Revenue"
                    }
                }
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", loadDashboard);
