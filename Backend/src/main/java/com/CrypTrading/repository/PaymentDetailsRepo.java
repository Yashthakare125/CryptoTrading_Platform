package com.CrypTrading.repository;

import com.CrypTrading.model.PaymentDetails;
import com.CrypTrading.service.PaymentDetailService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentDetailsRepo extends JpaRepository<PaymentDetails, Long> {
    PaymentDetails findByUserId(Long userId);
}
