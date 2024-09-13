package com.CrypTrading.service;

import com.CrypTrading.model.Asset;
import com.CrypTrading.model.Coin;
import com.CrypTrading.model.User;
import com.CrypTrading.repository.AssetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetServiceImpl implements AssetService {

    @Autowired
    private AssetRepo assetRepo;

    @Override
    public Asset createAsset(User user, Coin coin, double quantity) {
        Asset asset = new Asset();
        asset.setUser(user);
        asset.setCoin(coin);
        asset.setQuantity(quantity);
        asset.setBuyPrice(coin.getCurrentPrice());

        return assetRepo.save(asset);
    }

    @Override
    public Asset getAssetById(Long assetId) throws Exception {

        return assetRepo.findById(assetId).orElseThrow(() -> new Exception("Asset not found"));
    }

    @Override
    public Asset getAssetByUserId(Long userId, Long assetId) {
        return null;
    }

    @Override
    public List<Asset> getUsersAssets(Long userId) {
        return assetRepo.findByUserId(userId);
    }

    @Override
    public Asset updateAsset(Long assetId, double quantity) throws Exception {

        Asset oldAsset = getAssetById(assetId);
        oldAsset.setQuantity(quantity + oldAsset.getQuantity());
        return assetRepo.save(oldAsset);
    }

    @Override
    public Asset findByUserIdAndCoinId(Long userId, String coinId) {
        return assetRepo.findByUserIdAndCoinId(userId, coinId);
    }

    @Override
    public void deleteAsset(Long assetId) {
        assetRepo.deleteById(assetId);
    }
}
