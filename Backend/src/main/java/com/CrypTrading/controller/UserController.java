package com.CrypTrading.controller;

import com.CrypTrading.request.ForgotPasswordTokenRequest;
import com.CrypTrading.domain.VerificationType;
import com.CrypTrading.model.ForgotPasswordToken;
import com.CrypTrading.model.User;
import com.CrypTrading.model.VerificationCode;
import com.CrypTrading.request.ResetPasswordRequest;
import com.CrypTrading.response.ApiResponse;
import com.CrypTrading.response.AuthResponse;
import com.CrypTrading.service.EmailService;
import com.CrypTrading.service.ForgotPasswordService;
import com.CrypTrading.service.UserService;
import com.CrypTrading.service.VerificationCodeService;
import com.CrypTrading.utils.OtpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private VerificationCodeService verificationCodeService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    @GetMapping("api/users/profile")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/api/users/verification/{verificationTyep}/send-otp")
    public ResponseEntity<String> sendVerificationOTP(@RequestHeader("Authorization") String jwt,
                                                    @PathVariable VerificationType verificationType) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        VerificationCode verificationCode = verificationCodeService.getVerificationCodeByUser(user.getId());

        if(verificationCode == null) {
            verificationCode = verificationCodeService.sendVerificationCode(user, verificationType);
        }
        if(verificationType.equals(VerificationType.EMAIL)) {
            emailService.sendVerificationOTPEmail(user.getEmail(), verificationCode.getOtp());
        }

        return new ResponseEntity<>("OTP Sent successfully", HttpStatus.OK);
    }

    @PatchMapping("/api/users/enable-two-factor/verify-otp/{otp}")
    public ResponseEntity<User> enableTwoFactorAuthenticaion(@PathVariable String OTP, @RequestHeader("Autorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        VerificationCode verificationCode = verificationCodeService.getVerificationCodeByUser(user.getId());

        String sendTo = verificationCode.getVerificationType().equals(VerificationType.EMAIL) ?
                verificationCode.getEmail() : verificationCode.getMobile();

        boolean isVerified = verificationCode.getOtp().equals(OTP);

        if(isVerified) {
            User updatedUser = userService.enableTwoFactorAuthentication(verificationCode.getVerificationType(), sendTo, user);
            verificationCodeService.deleteVerificationCodeById(verificationCode);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }
        throw new Exception("OTP doesn't match");
    }

    @PostMapping("/api/users/reset-password/send-otp")
    public ResponseEntity<AuthResponse> sendForgotPasswordOTP(@RequestBody ForgotPasswordTokenRequest req) throws Exception {

        User user = userService.findUserProfileByEmail(req.getSendTo());
        String otp = OtpUtils.generateOtp();
        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();

        ForgotPasswordToken token = forgotPasswordService.findByUser(user.getId());
        if(token == null) {
            token = forgotPasswordService.createToken(user, id, otp, req.getVerificationType(), req.getSendTo());
        }

        if(req.getVerificationType().equals(VerificationType.EMAIL)) {
            emailService.sendVerificationOTPEmail(user.getEmail(), token.getOtp());
        }

        AuthResponse response = new AuthResponse();
        response.setSession(token.getId());
        response.setMessage("Password Reset OTP sent successfully");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @PatchMapping("/auth/users/reset-password/verify-otp")
    public ResponseEntity<ApiResponse> resetPassword(@RequestParam String id, @RequestBody ResetPasswordRequest req, @RequestHeader("Autorization") String jwt) throws Exception {

        ForgotPasswordToken forgotPasswordToken = forgotPasswordService.findById(id);

        boolean isVerified = forgotPasswordToken.getOtp().equals(req.getOtp());

        if(isVerified) {
            userService.updatePassword(forgotPasswordToken.getUser(), req.getPassword());
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.setMessage("Password updated successfully!");
            return new ResponseEntity<>(apiResponse, HttpStatus.ACCEPTED);
        }
        throw new Exception("OTP doesn't match");

    }

}
