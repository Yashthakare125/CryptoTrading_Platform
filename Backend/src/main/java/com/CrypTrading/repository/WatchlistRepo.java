package com.CrypTrading.repository;

import com.CrypTrading.model.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WatchlistRepo extends JpaRepository<Watchlist, Long> {
    Watchlist findByUserId(Long userId);
}
