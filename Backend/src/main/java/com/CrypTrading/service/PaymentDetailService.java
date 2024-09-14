package com.CrypTrading.service;

import com.CrypTrading.model.PaymentDetails;
import com.CrypTrading.model.User;

public interface PaymentDetailService {

    public PaymentDetails addPaymentDetails(String accNumber, String accHolderName, String ifsc, String bankName, User user);

    public PaymentDetails getUserPaymentDetails(User user);
}
