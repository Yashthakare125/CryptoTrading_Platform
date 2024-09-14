package com.CrypTrading.service;


import com.CrypTrading.model.PaymentDetails;
import com.CrypTrading.model.User;
import com.CrypTrading.repository.PaymentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentDetailsServiceImpl implements PaymentDetailService{

    @Autowired
    private PaymentDetailsRepo paymentDetailsRepo;

    @Override
    public PaymentDetails addPaymentDetails(String accNumber, String accHolderName, String ifsc, String bankName, User user) {
        PaymentDetails paymentDetails = new PaymentDetails();

        paymentDetails.setAccNumber(accNumber);
        paymentDetails.setAccHolderName(accHolderName);
        paymentDetails.setIfsc(ifsc);
        paymentDetails.setBankName(bankName);
        paymentDetails.setUser(user);

        return paymentDetailsRepo.save(paymentDetails);
    }

    @Override
    public PaymentDetails getUserPaymentDetails(User user) {
        return paymentDetailsRepo.findByUserId(user.getId());
    }
}
