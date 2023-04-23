package src.main.Java;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONObject;

import src.main.Java.Artikel;

public class ArtikelController {
    private ArrayList<Artikel> artikelen;

    public ArtikelController() {
        artikelen = new ArrayList<>();
    }

    public void addArtikel(Artikel artikel) {
        artikelen.add(artikel);
    }

    public void removeArtikel(int id) {
        artikelen.removeIf(artikel -> artikel.getId() == id);
    }

    public Artikel getArtikelById(int id) {
        for (Artikel artikel : artikelen) {
            if (artikel.getId() == id) {
                return artikel;
            }
        }
        return null;
    }

    public ArrayList<Artikel> getArtikelenByCategorie(int categorieId) {
        ArrayList<Artikel> result = new ArrayList<>();
        for (Artikel artikel : artikelen) {
            if (artikel.getCategorieId() == categorieId) {
                result.add(artikel);
            }
        }
        return result;
    }
}
