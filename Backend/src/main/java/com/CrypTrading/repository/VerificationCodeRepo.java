package com.CrypTrading.repository;

import com.CrypTrading.model.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationCodeRepo extends JpaRepository<VerificationCode, Long> {

    public VerificationCode findByUserId(Long userId);

}
