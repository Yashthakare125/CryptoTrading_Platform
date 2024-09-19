package com.CrypTrading.service;

import com.CrypTrading.domain.OrderType;
import com.CrypTrading.model.Order;
import com.CrypTrading.model.User;
import com.CrypTrading.model.Wallet;
import com.CrypTrading.repository.WalletRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class WalletServiceImpl implements WalletService {


    @Autowired
    private WalletRepo walletRepo;

    @Override
    public Wallet getUserWallet(User user) {
        Wallet wallet = walletRepo.findByUserId(user.getId());
        if(wallet == null) {
            wallet = new Wallet();
            wallet.setUser(user);
//            Remove it
            wallet.setBalance(BigDecimal.valueOf(100000));
//            till here

            walletRepo.save(wallet);
        }
        return wallet;
    }

    @Override
    public Wallet addBalance(Wallet wallet, Long money) {
        BigDecimal balance = wallet.getBalance();
        BigDecimal newBalance = balance.add(BigDecimal.valueOf(money));
        wallet.setBalance(newBalance);
        return walletRepo.save(wallet);
    }

    @Override
    public Wallet findWalletById(Long id) throws Exception {
        Optional<Wallet> wallet = walletRepo.findById(id);
        if(wallet.isPresent()) {
            return wallet.get();
        }
        throw new Exception("Wallet not found!");
    }

    @Override
    public Wallet walletToWalletTransfer(User sender, Wallet reveiverWallet, Long amount) throws Exception {
        Wallet senderWallet = getUserWallet(sender);

        if(senderWallet.getBalance().compareTo(BigDecimal.valueOf(amount)) < 0) {
            throw new Exception("Unsufficient Balance");
        }

        BigDecimal senderBalance = senderWallet.getBalance().subtract(BigDecimal.valueOf(amount));
        senderWallet.setBalance(senderBalance);
        walletRepo.save(senderWallet);

        BigDecimal receiverBalance = reveiverWallet.getBalance().add(BigDecimal.valueOf(amount));
        reveiverWallet.setBalance(receiverBalance);
        walletRepo.save(reveiverWallet);

        return senderWallet;
    }

    @Override
    public Wallet payOrderPayment(Order order, User user) throws Exception {
        Wallet wallet = getUserWallet(user);

        if(order.getOrderType().equals(OrderType.BUY)) {
            BigDecimal newBalance = wallet.getBalance().subtract(order.getPrice());
            if(newBalance.compareTo(order.getPrice()) < 0) {
                throw new Exception("Unsufficient funds for the transaction");
            }
            wallet.setBalance(newBalance);
        } else {
            BigDecimal newBalance = wallet.getBalance().add(order.getPrice());
            wallet.setBalance(newBalance);
        }

        walletRepo.save(wallet);
        return wallet;
    }
}
