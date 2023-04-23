import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("affiliate_sales")
public class AffiliateSaleResource {
    private AffiliateSaleDao affiliateSaleDao = new AffiliateSaleDao();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<AffiliateSale> getAffiliateSales() {
        return affiliateSaleDao.getAffiliateSales();
    }
}

