import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.*;

@Path("/products")
public class Product {

    private String productID;
    private String productnaam;
    private String categorie;
    private String affiliateLink;
    private String partnerwebsite;

    
    private static Map<String, Product> products = JsonDB.readProducts();

    public Product() {}

    public Product(String productID, String productnaam, String categorie, String affiliateLink, String partnerwebsite) {
        this.productID = productID;
        this.productnaam = productnaam;
        this.categorie = categorie;
        this.affiliateLink = affiliateLink;
        this.partnerwebsite = partnerwebsite;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Product voegProductToe(Product product) {
        products.put(product.getProductID(), product);
        JsonDB.writeProducts(products); 
        return product;
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Product updateProductInfo(@PathParam("id") String id, Product product) {
        product.setProductID(id);
        products.put(id, product);
        JsonDB.writeProducts(products);
        return product;
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Product verwijderProduct(@PathParam("id") String id) {
        Product removedProduct = products.remove(id);
        JsonDB.writeProducts(products); 
        return removedProduct;
    }

    public String getProductID() {
        return productID;
    }

    public void setProductID(String productID) {
        this.productID = productID;
    }

    public String getProductnaam() {
        return productnaam;
    }

    public void setProductnaam(String productnaam) {
        this.productnaam = productnaam;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public String getAffiliateLink() {
        return affiliateLink;
    }

    public void setAffiliateLink(String affiliateLink) {
        this.affiliateLink = affiliateLink;
    }

    public String getPartnerwebsite() {
        return partnerwebsite;
    }

    public void setPartnerwebsite(String partnerwebsite) {
        this.partnerwebsite = partnerwebsite;
    }
}
