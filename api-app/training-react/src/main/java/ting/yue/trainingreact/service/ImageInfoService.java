package ting.yue.trainingreact.service;

import java.util.List;
import ting.yue.trainingreact.model.ImageInfoEntity;

public interface ImageInfoService {
    List<ImageInfoEntity> getImageStudioBackground();

    List<ImageInfoEntity> getImageStudioMain();
}

