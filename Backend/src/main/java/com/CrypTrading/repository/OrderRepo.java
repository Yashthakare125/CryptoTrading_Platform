package com.CrypTrading.repository;

import com.CrypTrading.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepo extends JpaRepository<Order, Long> {

    List<Order> findByUserId(long userId);
}
