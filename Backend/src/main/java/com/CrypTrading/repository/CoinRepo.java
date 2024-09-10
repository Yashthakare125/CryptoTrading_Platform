package com.CrypTrading.repository;

import com.CrypTrading.model.Coin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.cdi.JpaRepositoryExtension;

public interface CoinRepo extends JpaRepository<Coin, String> {

}
