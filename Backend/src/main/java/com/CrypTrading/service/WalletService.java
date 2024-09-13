package com.CrypTrading.service;

import com.CrypTrading.model.Order;
import com.CrypTrading.model.User;
import com.CrypTrading.model.Wallet;

public interface WalletService {

    Wallet getUserWallet (User user);
    Wallet addBalance(Wallet wallet, Long money);
    Wallet findWalletById(Long id) throws Exception;
    Wallet walletToWalletTransfer(User sender, Wallet reveiverWallet, Long amount) throws Exception;
    Wallet payOrderPayment(Order order, User user) throws Exception;

}
