import org.junit.jupiter.api.*;

public class BeheerderTest {
    private Beheerder beheerder;

    @BeforeEach
    public void setUp() {
        beheerder = new Beheerder();
        beheerder.setBeheerdersnaam("TestBeheerder");
    }

    @Test
    public void testBeheerdersnaam() {
        Assertions.assertEquals("TestBeheerder", beheerder.getBeheerdersnaam());
    }

    @Test
    public void testBeheerGebruikers() {
        Assertions.assertDoesNotThrow(() -> beheerder.beheerGebruikers());
    }


}