package com.CrypTrading.service;

import com.CrypTrading.model.Asset;
import com.CrypTrading.model.Coin;
import com.CrypTrading.model.User;

import java.util.List;

public interface AssetService {
    Asset createAsset(User user, Coin coin, double quantity);

    Asset getAssetById(Long assetId) throws Exception;

    Asset getAssetByUserId(Long userId, Long assetId);

    List<Asset> getUsersAssets(Long userId);

    Asset updateAsset(Long assetId, double quantity) throws Exception;

    Asset findByUserIdAndCoinId(Long userId, String coinId);

    void deleteAsset(Long assetId);
}
