package com.CrypTrading.controller;

import com.CrypTrading.domain.OrderType;
import com.CrypTrading.model.Coin;
import com.CrypTrading.model.Order;
import com.CrypTrading.model.User;
import com.CrypTrading.request.CreateOrderRequest;
import com.CrypTrading.service.CoinService;
import com.CrypTrading.service.OrderService;
import com.CrypTrading.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.service.annotation.PostExchange;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private CoinService coinService;


//    @Autowired
//    private WalletTrasactionService walletTransactionService;

    @PostMapping("/pay")
    public ResponseEntity<Order> payOrderPayment(@RequestHeader(name = "Authorization") String jwt, @RequestBody CreateOrderRequest req) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Coin coin = coinService.findById(req.getCoinId());

        Order order = orderService.processOrder(coin, req.getQuantity(), req.getOrderType(), user);

        return ResponseEntity.ok(order);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(@RequestHeader("Authorization") String jwtToken, @PathVariable Long orderId) throws Exception {

        User user = userService.findUserProfileByJwt(jwtToken);

        Order order = orderService.getOrderById(orderId);
        if(order.getUser().getId() == user.getId()) {
            return ResponseEntity.ok(order);
        } else {
            throw new Exception("You don't have access to this order");
        }

    }

    @GetMapping()
    public ResponseEntity<List<Order>> getAllOrders(@RequestHeader("Authorization") String jwt, @RequestParam(required = false) OrderType order_type, @RequestParam(required = false) String asset_symbol) throws Exception {
            Long userId = userService.findUserProfileByJwt(jwt).getId();

            List<Order> userOrders = orderService.getAllOrders(userId, order_type, asset_symbol);
            return ResponseEntity.ok(userOrders);
    }
}