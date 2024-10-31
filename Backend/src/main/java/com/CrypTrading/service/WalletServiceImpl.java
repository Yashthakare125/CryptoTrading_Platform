//package com.CrypTrading.service;
//
//import com.CrypTrading.domain.OrderType;
//import com.CrypTrading.model.Order;
//import com.CrypTrading.model.User;
//import com.CrypTrading.model.Wallet;
//import com.CrypTrading.repository.WalletRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.math.BigDecimal;
//import java.util.Optional;
//
//@Service
//public class WalletServiceImpl implements WalletService {
//
//    @Autowired
//    private TransactionService transactionService;
//
//    @Autowired
//    private WalletRepo walletRepo;
//
//    @Override
//    public Wallet getUserWallet(User user) {
//        Wallet wallet = walletRepo.findByUserId(user.getId());
//        if(wallet == null) {
//            wallet = new Wallet();
//            wallet.setUser(user);
////            Remove it
//            wallet.setBalance(BigDecimal.valueOf(100000));
////            till here
//
//            walletRepo.save(wallet);
//        }
//        return wallet;
//    }
//
//    @Override
//    public Wallet addBalance(Wallet wallet, Long money) {
//        BigDecimal balance = wallet.getBalance();
//        BigDecimal newBalance = balance.add(BigDecimal.valueOf(money));
//        wallet.setBalance(newBalance);
//        return walletRepo.save(wallet);
//    }
//
//    @Override
//    public Wallet findWalletById(Long id) throws Exception {
//        Optional<Wallet> wallet = walletRepo.findById(id);
//        if(wallet.isPresent()) {
//            return wallet.get();
//        }
//        throw new Exception("Wallet not found!");
//    }
//
//    @Override
//    public Wallet walletToWalletTransfer(User sender, Wallet reveiverWallet, Long amount) throws Exception {
//        Wallet senderWallet = getUserWallet(sender);
//
//        if(senderWallet.getBalance().compareTo(BigDecimal.valueOf(amount)) < 0) {
//            throw new Exception("Unsufficient Balance");
//        }
//
//        BigDecimal senderBalance = senderWallet.getBalance().subtract(BigDecimal.valueOf(amount));
//        senderWallet.setBalance(senderBalance);
//        walletRepo.save(senderWallet);
//
//        BigDecimal receiverBalance = reveiverWallet.getBalance().add(BigDecimal.valueOf(amount));
//        reveiverWallet.setBalance(receiverBalance);
//        walletRepo.save(reveiverWallet);
//
//        return senderWallet;
//    }
//
//    @Override
//    public Wallet payOrderPayment(Order order, User user) throws Exception {
//        Wallet wallet = getUserWallet(user);
//
//        if(order.getOrderType().equals(OrderType.BUY)) {
//            BigDecimal newBalance = wallet.getBalance().subtract(order.getPrice());
//            if(newBalance.compareTo(order.getPrice()) < 0) {
//                throw new Exception("Unsufficient funds for the transaction");
//            }
//            wallet.setBalance(newBalance);
//        } else {
//            BigDecimal newBalance = wallet.getBalance().add(order.getPrice());
//            wallet.setBalance(newBalance);
//        }
//
//        walletRepo.save(wallet);
//        return wallet;
//    }
//}


package com.CrypTrading.service;

import com.CrypTrading.domain.OrderType;
import com.CrypTrading.domain.WalletTransactionType;
import com.CrypTrading.model.Order;
import com.CrypTrading.model.User;
import com.CrypTrading.model.Wallet;
import com.CrypTrading.repository.WalletRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class WalletServiceImpl implements WalletService {
    @Autowired
    private TransactionService transactionService;

    @Autowired
    private WalletRepo walletRepo;

    @Override
    public Wallet getUserWallet(User user) {
        Wallet wallet = walletRepo.findByUserId(user.getId());
        if(wallet == null) {
            wallet = new Wallet();
            wallet.setUser(user);
            // Remove it
            wallet.setBalance(BigDecimal.valueOf(100000000));
            // till here
            wallet = walletRepo.save(wallet);

            // Record initial balance transaction
            transactionService.createTransaction(
                    wallet,
                    WalletTransactionType.ADD_MONEY,
                    null,
                    "Initial wallet balance",
                    100000L
            );
        }
        return wallet;
    }

    @Override
    @Transactional
    public Wallet addBalance(Wallet wallet, Long money) {
        BigDecimal balance = wallet.getBalance();
        BigDecimal newBalance = balance.add(BigDecimal.valueOf(money));
        wallet.setBalance(newBalance);
        wallet = walletRepo.save(wallet);

        // Record deposit transaction
        transactionService.createTransaction(
                wallet,
                WalletTransactionType.ADD_MONEY,
                null,
                "Wallet deposit",
                money
        );

        return wallet;
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
    @Transactional
    public Wallet walletToWalletTransfer(User sender, Wallet receiverWallet, Long amount) throws Exception {
        Wallet senderWallet = getUserWallet(sender);
        if(senderWallet.getBalance().compareTo(BigDecimal.valueOf(amount)) < 0) {
            throw new Exception("Insufficient Balance");
        }

        // Update sender's wallet
        BigDecimal senderBalance = senderWallet.getBalance().subtract(BigDecimal.valueOf(amount));
        senderWallet.setBalance(senderBalance);
        senderWallet = walletRepo.save(senderWallet);

        // Update receiver's wallet
        BigDecimal receiverBalance = receiverWallet.getBalance().add(BigDecimal.valueOf(amount));
        receiverWallet.setBalance(receiverBalance);
        receiverWallet = walletRepo.save(receiverWallet);

        // Record sender's transaction as WITHDRAWAL
        transactionService.createTransaction(
                senderWallet,
                WalletTransactionType.WALLET_TRANSFER,
                receiverWallet,
                "Transfer sent to wallet " + receiverWallet.getId(),
                amount
        );

        // Record receiver's transaction as ADD_MONEY
        transactionService.createTransaction(
                receiverWallet,
                WalletTransactionType.WALLET_TRANSFER,
                senderWallet,
                "Transfer received from wallet " + senderWallet.getId(),
                amount
        );

        return senderWallet;
    }

    @Override
    @Transactional
    public Wallet payOrderPayment(Order order, User user) throws Exception {
        Wallet wallet = getUserWallet(user);
        BigDecimal amount = order.getPrice();

        if(order.getOrderType().equals(OrderType.BUY)) {
            BigDecimal newBalance = wallet.getBalance().subtract(amount);
            if(newBalance.compareTo(BigDecimal.ZERO) < 0) {
                throw new Exception("Insufficient funds for the transaction");
            }
            wallet.setBalance(newBalance);

            // Record transaction for buy order
            transactionService.createTransaction(
                    wallet,
                    WalletTransactionType.BUY_ASSET,
                    order,
                    "Payment for buy order " + order.getId(),
                    amount.longValue()
            );
        } else {
            BigDecimal newBalance = wallet.getBalance().add(amount);
            wallet.setBalance(newBalance);

            // Record transaction for sell order
            transactionService.createTransaction(
                    wallet,
                    WalletTransactionType.SELL_ASSET,
                    order,
                    "Receipt from sell order " + order.getId(),
                    amount.longValue()
            );
        }

        return walletRepo.save(wallet);
    }
}