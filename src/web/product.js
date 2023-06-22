class ProductService {
    static apiUrl = 'http://localhost:8080/InterieurGuru/api/products';

    static voegProductToe(product) {
        return fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    }

    static updateProductInfo(product) {
        return fetch(`${this.apiUrl}/${product.productID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    }

    static verwijderProduct(productID) {
        return fetch(`${this.apiUrl}/${productID}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = {
        productID: document.getElementById('pid').value,
        productnaam: document.getElementById('pname').value,
        categorie: document.getElementById('cat').value,
        affiliateLink: document.getElementById('alink').value,
        partnerwebsite: document.getElementById('pweb').value
    };

    ProductService.voegProductToe(product)
        .then(data => {
            console.log('Success:', data);
            alert('Product succesvol toegevoegd!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Er is een fout opgetreden bij het toevoegen van het product.');
        });
});
