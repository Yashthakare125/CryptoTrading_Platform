package com.CrypTrading.repository;

import com.CrypTrading.model.ForgotPasswordToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ForgotPasswordRepo extends JpaRepository<ForgotPasswordToken, String> {
    ForgotPasswordToken findByUserId(Long userId);
}
