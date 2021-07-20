package ting.yue.trainingreact.repository;

import ting.yue.trainingreact.model.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserDTO, Long> {
}