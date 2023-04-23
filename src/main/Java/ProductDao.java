import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProductDao {
    private static final String FILE_PATH = "products.csv";

    public List<Product> getProducts() {
        List<Product> products = new ArrayList<>();

        try (BufferedReader br = Files.newBufferedReader(Paths.get(FILE_PATH))) {
            products = br.lines().skip(1).map(this::parseProductFromCsv).collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }

        return products;
    }

    public void addProduct(Product product) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(FILE_PATH, true))) {
            bw.write(productToCsv(product));
            bw.newLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private Product parseProductFromCsv(String csvLine) {
        String[] fields = csvLine.split(",");
        int id = Integer.parseInt(fields[0]);
        String name = fields[1];
        String description = fields[2];
        String imageUrl = fields[3];
        double price = Double.parseDouble(fields[4]);
        String affiliateLink = fields[5];

        return new Product(id, name, description, imageUrl, price, affiliateLink);
    }

    private String productToCsv(Product product) {
        return product.getId() + "," + product.getName() + "," + product.getDescription() + "," + product.getImageUrl() + "," + product.getPrice() + "," + product.getAffiliateLink();
    }
}
