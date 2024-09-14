package com.CrypTrading.service;

import com.CrypTrading.domain.WalletTransactionType;
import com.CrypTrading.model.Wallet;
import com.CrypTrading.model.WalletTransaction;

import java.util.List;

public interface TransactionService {
    List<WalletTransaction> getTransactionsByWallet(Wallet wallet);

    WalletTransaction createTransaction(Wallet userWallet, WalletTransactionType walletTransactionType, Object o, String bankAccountWithdrawal, Long amount);
}
