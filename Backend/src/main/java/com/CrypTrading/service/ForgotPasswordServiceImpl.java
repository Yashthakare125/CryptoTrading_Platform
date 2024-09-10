package com.CrypTrading.service;

import com.CrypTrading.domain.VerificationType;
import com.CrypTrading.model.ForgotPasswordToken;
import com.CrypTrading.model.User;
import com.CrypTrading.repository.ForgotPasswordRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ForgotPasswordServiceImpl implements ForgotPasswordService {


    @Autowired
    private ForgotPasswordRepo forgotPasswordRepo;


    @Override
    public ForgotPasswordToken createToken(User user, String id, String otp, VerificationType verificationType, String sendTo) {
        ForgotPasswordToken token = new ForgotPasswordToken();
        token.setUser(user);
        token.setSendTo(sendTo);
        token.setVerificationType(verificationType);
        token.setOtp(otp);
        token.setId(id);
        return forgotPasswordRepo.save(token);
    }

    @Override
    public ForgotPasswordToken findById(String id) {

        Optional<ForgotPasswordToken> token = forgotPasswordRepo.findById(id);
        return token.orElse(null);
    }

    @Override
    public ForgotPasswordToken findByUser(Long userId) {
        return forgotPasswordRepo.findByUserId(userId);
    }

    @Override
    public void deleteToken(ForgotPasswordToken token) {
        forgotPasswordRepo.delete(token);
    }

}
