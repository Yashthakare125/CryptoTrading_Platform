package com.CrypTrading.service;

import com.CrypTrading.model.PaymentDetails;
import com.CrypTrading.model.User;

public interface PaymentDetailService {

    public PaymentDetails addPaymentDetails(String accountNumber, String accountHolderName, String ifsc, String bankName, User user);

    public PaymentDetails getUserPaymentDetails(User user);
}
