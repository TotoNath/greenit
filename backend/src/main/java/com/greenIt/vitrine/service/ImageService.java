package com.greenIt.vitrine.service;

import com.greenIt.vitrine.model.Image;
import com.greenIt.vitrine.repository.ImageRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageService {
    private final ImageRepository imageRepository;

    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    public List<Image> getAllImages() {
        return imageRepository.findAllByOrderByOrderIndexAsc();
    }

    public Optional<Image> getImageById(Long id) {
        return imageRepository.findById(id);
    }

    @Transactional
    public Image saveImage(Image image) {
        image.setId(null);
        return imageRepository.save(image);
    }

    @Transactional
    public void deleteImage(Long id) {
        imageRepository.deleteById(id);
    }
}
