import org.junit.jupiter.api.*;

public class GebruikerTest {
    private Gebruiker gebruiker;

    @BeforeEach
    public void setUp() {
        gebruiker = new Gebruiker();
        gebruiker.setGebruikersnaam("TestGebruiker");
    }

    @Test
    public void testGebruikersnaam() {
        Assertions.assertEquals("TestGebruiker", gebruiker.getGebruikersnaam());
    }

    @Test
    public void testDoorzoektWebsite() {
        Assertions.assertDoesNotThrow(() -> gebruiker.doorzoektWebsite("meubels"));
    }
    
    