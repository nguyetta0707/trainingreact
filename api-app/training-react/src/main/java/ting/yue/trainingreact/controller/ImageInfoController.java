package ting.yue.trainingreact.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ting.yue.trainingreact.model.ImageInfoEntity;
import ting.yue.trainingreact.service.ImageInfoService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ImageInfoController {
    @Autowired
    ImageInfoService imageInfoService;

    @GetMapping("/studio-background-image")
    public List<ImageInfoEntity> getBackgroundStudioImage() {
        return imageInfoService.getImageStudioBackground();
    }

    @GetMapping("/studio-background-image-character")
    public List<ImageInfoEntity> getBackgroundStudioImageMain() {
        return imageInfoService.getImageStudioMain();
    }
}
