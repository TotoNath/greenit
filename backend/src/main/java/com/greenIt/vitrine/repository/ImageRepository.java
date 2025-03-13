package com.greenIt.vitrine.repository;

import com.greenIt.vitrine.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllByOrderByOrderIndexAsc();
}
