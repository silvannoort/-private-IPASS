package com.example.huisinrichting;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HuisinrichtingController {

    private final CategorieRepository categorieRepository;
    private final ArtikelRepository artikelRepository;

    public HuisinrichtingController(CategorieRepository categorieRepository, ArtikelRepository artikelRepository) {
        this.categorieRepository = categorieRepository;
        this.artikelRepository = artikelRepository;
    }

    @GetMapping("/api/categorieen")
    public Iterable<Categorie> getCategorieen() {
        return categorieRepository.findAll();
    }

    @GetMapping("/api/artikelen")
    public Iterable<Artikel> getArtikelen() {
        return artikelRepository.findAll();
    }
}
