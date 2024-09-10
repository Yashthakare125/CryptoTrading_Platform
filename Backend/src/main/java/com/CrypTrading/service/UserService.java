package com.CrypTrading.service;

import com.CrypTrading.domain.VerificationType;
import com.CrypTrading.model.User;

public interface UserService {

    public User findUserProfileByJwt(String jwt) throws Exception;
    public User findUserProfileByEmail(String email) throws Exception;
    public User findUserProfileById(Long userId) throws Exception;
    public User enableTwoFactorAuthentication(VerificationType verificationType, String sendTo, User user);
    User updatePassword(User user, String newPassword);

}
