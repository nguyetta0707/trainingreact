package ting.yue.trainingreact.model;

import lombok.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = false)
@Data
@Entity
@Table(name = "image_info")
public class ImageInfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageType;

    private String imageName;

    private String imageData;

    private String imageColor;
}
