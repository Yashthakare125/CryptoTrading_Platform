package com.CrypTrading.service;

import com.CrypTrading.model.TwoFactorOTP;
import com.CrypTrading.model.User;
import com.CrypTrading.repository.TwoFactorOTPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class TwoFactorOTPServiceImpl implements TwoFactorOTPService {

    @Autowired
    private TwoFactorOTPRepository twoFactorOTPRepository;
    @Override
    public TwoFactorOTP createTwoFactorOTP(User user, String OTP, String jwt) {

        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();

        TwoFactorOTP twoFactorOTP = new TwoFactorOTP();
        twoFactorOTP.setOTP(OTP);
        twoFactorOTP.setJwt(jwt);
        twoFactorOTP.setId(id);
        twoFactorOTP.setUser(user);

        return twoFactorOTPRepository.save(twoFactorOTP);
    }

    @Override
    public TwoFactorOTP findByUser(Long userID) {
        return twoFactorOTPRepository.findByUserId(userID);
    }

    @Override
    public TwoFactorOTP findById(String id) {
        Optional<TwoFactorOTP> OTP = twoFactorOTPRepository.findById(id);
        return OTP.orElse(null);
    }

    @Override
    public boolean verifyTwoFactorOTP(TwoFactorOTP twoFactorOTP, String OTP) {
        return twoFactorOTP.getOTP().equals(OTP);
    }

    @Override
    public void deleteTwoFactorOTP(TwoFactorOTP twoFactorOTP) {
        twoFactorOTPRepository.delete(twoFactorOTP);
    }
}
