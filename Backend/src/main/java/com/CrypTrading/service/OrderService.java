package com.CrypTrading.service;

import com.CrypTrading.domain.OrderType;
import com.CrypTrading.model.Coin;
import com.CrypTrading.model.Order;
import com.CrypTrading.model.OrderItem;
import com.CrypTrading.model.User;

import java.util.List;

public interface OrderService {

    Order createOrder(User user, OrderItem orderItem, OrderType orderType);

    Order getOrderById(Long orderId) throws Exception;

    List<Order> getAllOrders(Long userId, OrderType orderType, String assetSymbol);

    Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception;

}
