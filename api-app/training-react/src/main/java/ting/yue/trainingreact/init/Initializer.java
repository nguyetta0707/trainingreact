package ting.yue.trainingreact.init;

import ting.yue.trainingreact.model.UserDTO;
import ting.yue.trainingreact.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Initializer implements CommandLineRunner {

    private final UserRepository userRepository;

    public Initializer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... strings) {
        UserDTO user1 = new UserDTO();
        user1.setUserName("TingLee");
        userRepository.save(user1);
        UserDTO user2 = new UserDTO();
        user2.setUserName("MoonXie");
        userRepository.save(user2);
        userRepository.findAll().forEach(System.out::println);
    }
}
