package com.greenIt.vitrine.service;

import com.greenIt.vitrine.model.Image;
import com.greenIt.vitrine.repository.ImageRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class ImageServiceTest {

    @Mock
    private ImageRepository imageRepository;

    @InjectMocks
    private ImageService imageService;

    private Image image;

    @BeforeEach
    void setUp() {
        image = new Image();
        image.setId(1L);
        image.setTitle("Test Image");
        image.setImageUrl("http://example.com/image.jpg");
        image.setDescription("Test Description");
        image.setOrderIndex(1);
    }

    @Test
    void testGetAllImages() {
        List<Image> images = Arrays.asList(image);
        when(imageRepository.findAllByOrderByOrderIndexAsc()).thenReturn(images);

        List<Image> result = imageService.getAllImages();

        assertEquals(1, result.size());
        assertEquals("Test Image", result.get(0).getTitle());
        verify(imageRepository, times(1)).findAllByOrderByOrderIndexAsc();
    }

    @Test
    void testGetImageById() {
        when(imageRepository.findById(1L)).thenReturn(Optional.of(image));

        Optional<Image> result = imageService.getImageById(1L);

        assertTrue(result.isPresent());
        assertEquals("Test Image", result.get().getTitle());
        verify(imageRepository, times(1)).findById(1L);
    }

    @Test
    void testSaveImage() {
        when(imageRepository.save(any(Image.class))).thenReturn(image);

        Image result = imageService.saveImage(new Image());

        assertNotNull(result);
        assertEquals("Test Image", result.getTitle());
        verify(imageRepository, times(1)).save(any(Image.class));
    }

    @Test
    void testDeleteImage() {
        doNothing().when(imageRepository).deleteById(1L);

        imageService.deleteImage(1L);

        verify(imageRepository, times(1)).deleteById(1L);
    }
}