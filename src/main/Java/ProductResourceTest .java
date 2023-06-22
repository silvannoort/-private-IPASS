import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;

public class ProductResourceTest {

    private static final String BASE_URL = "http://localhost:8080/api";
    private static final String PRODUCTS_ENDPOINT = "/products";

    @Test
    public void testProductEndpoints() {
        
        Product product = new Product("1", "Product 1", "Categorie 1", "Affiliate Link 1", "Partner Website 1");
        given()
                .contentType("application/json")
                .body(product)
        .when()
                .post(BASE_URL + PRODUCTS_ENDPOINT)
        .then()
                .statusCode(200); 

       
        Product updatedProduct = new Product("1", "Product 1 (gewijzigd)", "Categorie 1 (gewijzigd)",
                "Affiliate Link 1 (gewijzigd)", "Partner Website 1 (gewijzigd)");
        given()
                .contentType("application/json")
                .body(updatedProduct)
        .when()
                .put(BASE_URL + PRODUCTS_ENDPOINT + "/1")
        .then()
                .statusCode(200); 

        
        given()
        .when()
                .delete(BASE_URL + PRODUCTS_ENDPOINT + "/1")
        .then()
                .statusCode(200); 
    }
}
