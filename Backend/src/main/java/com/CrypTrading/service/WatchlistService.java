package com.CrypTrading.service;

import com.CrypTrading.model.Coin;
import com.CrypTrading.model.User;
import com.CrypTrading.model.Watchlist;

public interface WatchlistService {

    Watchlist findUserWatchlist(Long userId) throws Exception;
    Watchlist createWatchlist(User user);
    Watchlist findById(Long id) throws Exception;

    Coin addItemToWatchlist(Coin coin, User user) throws Exception;

}
