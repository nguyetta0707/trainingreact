package ting.yue.trainingreact.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ting.yue.trainingreact.model.ImageInfoEntity;

public interface ImageInfoRepository extends JpaRepository<ImageInfoEntity, Long> {
    @Query(value = "SELECT * FROM image_info a where a.image_type = 'BACKGROUND_IMAGE'",
            nativeQuery = true)
    List<ImageInfoEntity> getImageStudioBackground();

    @Query(value = "SELECT * FROM image_info a where a.image_type = 'BACKGROUND_IMAGE_MAIN'",
            nativeQuery = true)
    List<ImageInfoEntity> getImageStudioMain();
}
