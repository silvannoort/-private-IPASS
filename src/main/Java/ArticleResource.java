import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("articles")
public class ArticleResource {
    private ArticleDao articleDao = new ArticleDao();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getArticles() {
        return articleDao.getArticles();
    }
}

