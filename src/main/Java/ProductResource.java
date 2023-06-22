import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Arrays;
import java.util.List;

@Path("/products")
@RolesAllowed("admin")
public class ProductResource {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response voegProductToe(Product product, @Context HttpServletRequest request) {
        String username = (String) request.getAttribute("username");

        if (isAdminUser(username)) {
            if (productIsValid(product)) {
                
                return Response.ok().build();
            } else {
                return Response.status(Response.Status.BAD_REQUEST).entity("Ongeldig product").build();
            }
        } else {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Toegang geweigerd").build();
        }
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateProductInfo(@PathParam("id") String id, Product updatedProduct, @Context HttpServletRequest request) {
        String username = (String) request.getAttribute("username");

        if (isAdminUser(username)) {
            if (productIsValid(updatedProduct)) {
                
                return Response.ok().build();
            } else {
                return Response.status(Response.Status.BAD_REQUEST).entity("Ongeldig product").build();
            }
        } else {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Toegang geweigerd").build();
        }
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response verwijderProduct(@PathParam("id") String id, @Context HttpServletRequest request) {
        String username = (String) request.getAttribute("username");

        if (isAdminUser(username)) {
            
            return Response.ok().build();
        } else {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Toegang geweigerd").build();
        }
    }

    private boolean isAdminUser(String username) {
        List<String> adminUsernames = Arrays.asList("admin1", "admin2", "admin3");
        return adminUsernames.contains(username);
    }

    private boolean productIsValid(Product product) {
        if (product.getProductID() == null || product.getProductID().isEmpty()
                || product.getProductnaam() == null || product.getProductnaam().isEmpty()
                || product.getCategorie() == null || product.getCategorie().isEmpty()
                || product.getAffiliateLink() == null || product.getAffiliateLink().isEmpty()
                || product.getPartnerwebsite() == null || product.getPartnerwebsite().isEmpty()) {
            return false;
        }

        return true;
    }

}
