import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class JSONUtil {

    public static JSONArray readJSONArrayFromFile(String fileName) {
        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                sb.append(line);
            }
            return new JSONArray(sb.toString());
        } catch (IOException e) {
            e.printStackTrace();
            return new JSONArray();
        }
    }

    public static void writeJSONArrayToFile(String fileName, JSONArray jsonArray) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(fileName))) {
            bw.write(jsonArray.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static <T> JSONArray listToJSONArray(List<T> list, JSONConvertable<T> converter) {
        JSONArray jsonArray = new JSONArray();
        for (T item : list) {
            jsonArray.put(converter.toJSON(item));
        }
        return jsonArray;
    }

    public interface JSONConvertable<T> {
        JSONObject toJSON(T object);
    }
}
