package com.CrypTrading.service;

import com.CrypTrading.model.Coin;
import com.CrypTrading.model.User;
import com.CrypTrading.model.Watchlist;
import com.CrypTrading.repository.WatchlistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WatchlistServiceImpl implements WatchlistService {

    @Autowired
    private WatchlistRepo watchlistRepo;

    @Override
    public Watchlist findUserWatchlist(Long userId) throws Exception {
        Watchlist watchList = watchlistRepo.findByUserId(userId);
        if(watchList == null) {
            throw new Exception("Watchlist not found");
        }
        return watchList;
    }

    @Override
    public Watchlist createWatchlist(User user) {
        Watchlist watchlist = new Watchlist();
        watchlist.setUser(user);

        return watchlistRepo.save(watchlist);
    }

    @Override
    public Watchlist findById(Long id) throws Exception {
        Optional<Watchlist> watchlistOptional = watchlistRepo.findById(id);
        if(watchlistOptional.isEmpty()) {
            throw new Exception("Watchlist not found");
        }
        return watchlistOptional.get();
    }

    @Override
    public Coin addItemToWatchlist(Coin coin, User user) throws Exception {
        Watchlist watchlist = findUserWatchlist(user.getId());
        if(watchlist.getCoins().contains(coin)) {
            watchlist.getCoins().remove(coin);
        } else {
            watchlist.getCoins().add(coin);
        }
        return coin;
    }
}
