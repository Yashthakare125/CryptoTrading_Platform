package com.CrypTrading.service;

import com.CrypTrading.model.TwoFactorOTP;
import com.CrypTrading.model.User;

public interface TwoFactorOTPService {

    TwoFactorOTP createTwoFactorOTP(User user, String OTP, String jwt);

    TwoFactorOTP findByUser(Long userID);

    TwoFactorOTP findById(String id);

    boolean verifyTwoFactorOTP(TwoFactorOTP twoFactorOTP, String OTP);

    void deleteTwoFactorOTP(TwoFactorOTP twoFactorOTP);
}
