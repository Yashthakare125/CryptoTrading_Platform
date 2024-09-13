package com.CrypTrading.repository;

import com.CrypTrading.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletRepo extends JpaRepository<Wallet, Long> {

    Wallet findByUserId(Long userId);
}
