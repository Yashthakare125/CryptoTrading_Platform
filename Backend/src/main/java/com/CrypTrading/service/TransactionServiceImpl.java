package com.CrypTrading.service.impl;

import com.CrypTrading.domain.WalletTransactionType;
import com.CrypTrading.model.Wallet;
import com.CrypTrading.model.WalletTransaction;
import com.CrypTrading.repository.WalletTransactionRepo;
import com.CrypTrading.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private WalletTransactionRepo walletTransactionRepo;

    @Override
    public List<WalletTransaction> getTransactionsByWallet(Wallet wallet) {
        return walletTransactionRepo.findByWallet(wallet);
    }

    @Override
    public WalletTransaction createTransaction(Wallet userWallet, WalletTransactionType walletTransactionType, Object o, String purpose, Long amount) {

        WalletTransaction walletTransaction = new WalletTransaction();

        walletTransaction.setWallet(userWallet);
        walletTransaction.setType(walletTransactionType);
        walletTransaction.setPurpose(purpose);
        walletTransaction.setAmount(amount);
        walletTransaction.setDate(LocalDate.now());

        return walletTransactionRepo.save(walletTransaction);
    }
}
