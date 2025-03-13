package com.greenIt.vitrine.controller;

import com.greenIt.vitrine.model.Image;
import com.greenIt.vitrine.service.ImageService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/sitemap.xml")
public class SitemapController {

    private final ImageService imageService;

    public SitemapController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping(produces = MediaType.APPLICATION_XML_VALUE)
    public String getSitemap() {
        List<Image> images = imageService.getAllImages();

        StringBuilder sitemap = new StringBuilder();
        sitemap.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
        sitemap.append("<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n");

        for (Image image : images) {
            sitemap.append("    <url>\n");
            sitemap.append("        <loc>https://guiquerro.fr/images/").append(image.getId()).append("</loc>\n");
            sitemap.append("    </url>\n");
        }

        sitemap.append("</urlset>");
        return sitemap.toString();
    }
}
