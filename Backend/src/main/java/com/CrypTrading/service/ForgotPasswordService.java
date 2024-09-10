package com.CrypTrading.service;

import com.CrypTrading.domain.VerificationType;
import com.CrypTrading.model.ForgotPasswordToken;
import com.CrypTrading.model.User;

public interface ForgotPasswordService {

    ForgotPasswordToken createToken(User user, String id, String otp, VerificationType verificationType, String sendTo);

    ForgotPasswordToken findById(String id);

    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);
}
