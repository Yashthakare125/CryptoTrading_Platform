package com.CrypTrading.service;

import com.CrypTrading.domain.VerificationType;
import com.CrypTrading.model.User;
import com.CrypTrading.model.VerificationCode;
import com.CrypTrading.repository.VerificationCodeRepo;
import com.CrypTrading.utils.OtpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VerificationCodeServiceImpl implements VerificationCodeService{

    @Autowired
    private VerificationCodeRepo verificationCodeRepo;


    @Override
    public VerificationCode sendVerificationCode(User user, VerificationType verificationType) {
        VerificationCode verificationCode1 = new VerificationCode();
        verificationCode1.setOtp(OtpUtils.generateOtp());
        verificationCode1.setVerificationType(verificationType);
        verificationCode1.setUser(user);

        return verificationCodeRepo.save(verificationCode1);
    }

    @Override
    public VerificationCode getVerificationCodeById(Long id) throws Exception {

        Optional<VerificationCode> verificationCode = verificationCodeRepo.findById(id);
        if(verificationCode.isPresent()) {
            return verificationCode.get();
        }
        throw new Exception("Verification Code not found");
    }

    @Override
    public VerificationCode getVerificationCodeByUser(Long userId) {
        return verificationCodeRepo.findByUserId(userId);
    }

    @Override
    public void deleteVerificationCodeById(VerificationCode verificationCode) {
        verificationCodeRepo.delete(verificationCode);
    }
}
