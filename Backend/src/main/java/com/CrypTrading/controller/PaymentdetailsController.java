package com.CrypTrading.controller;

import com.CrypTrading.model.PaymentDetails;
import com.CrypTrading.model.User;
import com.CrypTrading.service.PaymentDetailService;
import com.CrypTrading.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PaymentdetailsController {

    @Autowired
    private UserService userService;

    @Autowired
    private PaymentDetailService paymentDetailService;

    @PostMapping("/payment-details")
    public ResponseEntity<PaymentDetails> addPaymentDetails(@RequestBody PaymentDetails paymentDetailsRequest, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        PaymentDetails paymentDetails = paymentDetailService.addPaymentDetails(
                paymentDetailsRequest.getAccNumber(), paymentDetailsRequest.getAccHolderName(), paymentDetailsRequest.getIfsc(), paymentDetailsRequest.getBankName(), user);

        return new ResponseEntity<>(paymentDetails, HttpStatus.CREATED);
    }

    @GetMapping("/payment-details")
    public ResponseEntity<PaymentDetails> getUserPaymentDetails(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        PaymentDetails paymentDetails = paymentDetailService.getUserPaymentDetails(user);
        return new ResponseEntity<>(paymentDetails, HttpStatus.OK);
    }
}
