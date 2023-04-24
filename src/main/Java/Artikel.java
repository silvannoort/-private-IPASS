import java.util.List;

public class Artikel {
    private int artikelID;
    private String titel;
    private String categorie;
    private String inhoud;
    private List<String> afbeeldingen;

    public Artikel(int artikelID, String titel, String categorie, String inhoud, List<String> afbeeldingen) {
        this.artikelID = artikelID;
        this.titel = titel;
        this.categorie = categorie;
        this.inhoud = inhoud;
        this.afbeeldingen = afbeeldingen;
    }

    // Getters en setters voor de attributen
}

