
public class JsonDB {

    private static final String FILE_PATH = "src/main/resources/products.json";
    private static Gson gson = new Gson();

    public static Map<String, Product> readProducts() {
        try {
            FileReader reader = new FileReader(FILE_PATH);
            Type typeOfHashMap = new TypeToken<Map<String, Product>>() { }.getType();
            Map<String, Product> products = gson.fromJson(reader, typeOfHashMap);
            return products != null ? products : new HashMap<>();
        } catch (IOException e) {
            e.printStackTrace();
            return new HashMap<>();
        }
    }

    public static void writeProducts(Map<String, Product> products) {
        try {
            FileWriter writer = new FileWriter(FILE_PATH);
            gson.toJson(products, writer);
            writer.flush();
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
