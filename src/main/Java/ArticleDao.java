import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ArticleDao {
    private static final String FILE_PATH = "articles.csv";

    public List<Article> getArticles() {
        List<Article> articles = new ArrayList<>();

        try (BufferedReader br = Files.newBufferedReader(Paths.get(FILE_PATH))) {
            articles = br.lines().skip(1).map(this::parseArticleFromCsv).collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }

        return articles;
    }

    public void addArticle(Article article) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(FILE_PATH, true))) {
            bw.write(articleToCsv(article));
            bw.newLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private Article parseArticleFromCsv(String csvLine) {
        String[] fields = csvLine.split(",");
        int id = Integer.parseInt(fields[0]);
        String title = fields[1];
        String content = fields[2];
        String imageUrl = fields[3];

        return new Article(id, title, content, imageUrl);
    }

    private String articleToCsv(Article article) {
        return article.getId() + "," + article.getTitle() + "," + article.getContent() + "," + article.getImageUrl();
    }
}
