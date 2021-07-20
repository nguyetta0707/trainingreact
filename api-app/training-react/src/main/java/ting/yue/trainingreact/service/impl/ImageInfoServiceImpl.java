package ting.yue.trainingreact.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ting.yue.trainingreact.model.ImageInfoEntity;
import ting.yue.trainingreact.repository.ImageInfoRepository;
import ting.yue.trainingreact.service.ImageInfoService;

@Service
public class ImageInfoServiceImpl implements ImageInfoService {
    @Autowired
    private ImageInfoRepository imageRepository;

    @Override
    public List<ImageInfoEntity> getImageStudioBackground() {
        return imageRepository.getImageStudioBackground();
    }

    @Override
    public List<ImageInfoEntity> getImageStudioMain() {
        return imageRepository.getImageStudioMain();
    }
}
