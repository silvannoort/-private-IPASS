package com.example.huisinrichting;
import org.json.JSONObject;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Artikel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titel;
    private String inhoud;
    private String afbeeldingUrl;
    private Long categorieId;

    // Getters en setters
}


    public Artikel(int id, String titel, String inhoud, String afbeeldingUrl, int categorieId) {
        this.id = id;
        this.titel = titel;
        this.inhoud = inhoud;
        this.afbeeldingUrl = afbeeldingUrl;
        this.categorieId = categorieId;
    }

    public int getCategorieId() {
        return 0;
    }

    public int getId() {
        return 0;
    }

    // getters en setters
    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("id", id);
        json.put("titel", titel);
        json.put("inhoud", inhoud);
        json.put("afbeeldingUrl", afbeeldingUrl);
        json.put("categorieId", categorieId);
        return json;
    }
}






