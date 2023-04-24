public class Beheerder extends Gebruiker {
    private int beheerderID;

    public Beheerder(int beheerderID, String gebruikersnaam, String email, String wachtwoord) {
        super(gebruikersnaam, email, wachtwoord);
        this.beheerderID = beheerderID;
    }

    // Getters en setters voor de attributen
}
