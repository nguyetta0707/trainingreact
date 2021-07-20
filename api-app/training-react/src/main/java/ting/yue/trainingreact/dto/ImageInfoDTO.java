package ting.yue.trainingreact.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = false)
@Data
public class ImageInfoDTO {
    private Long id;

    private String imageType;

    private String imageName;

    private String imageData;

    private String imageColor;
}
