package ting.yue.trainingreact.service.impl;

import ting.yue.trainingreact.model.UserDTO;
import ting.yue.trainingreact.repository.UserRepository;
import ting.yue.trainingreact.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserDTO> listUser() {
        return userRepository.findAll();
    }
}
