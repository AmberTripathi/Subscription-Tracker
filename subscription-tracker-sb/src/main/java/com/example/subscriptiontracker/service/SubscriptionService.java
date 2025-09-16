package com.example.subscriptiontracker.service;

import com.example.subscriptiontracker.entity.Subscription;
import com.example.subscriptiontracker.entity.User;
import com.example.subscriptiontracker.repository.SubscriptionRepository;
import com.example.subscriptiontracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Subscription> getSubscriptionsByUserId(Long userId) {
        return subscriptionRepository.findByUserId(userId);
    }
    public Subscription createSubscription(Subscription subscription, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        subscription.setUser(user);
        return subscriptionRepository.save(subscription);
    }
    public Optional<Subscription> updateSubscription(Long id, Subscription subscriptionDetails) {
        return subscriptionRepository.findById(id).map(subscription -> {
            subscription.setName(subscriptionDetails.getName());
            subscription.setCost(subscriptionDetails.getCost());
            subscription.setBillingDate(subscriptionDetails.getBillingDate());
            subscription.setCategory(subscriptionDetails.getCategory());
            return subscriptionRepository.save(subscription);
        });
    }
    public boolean deleteSubscription(Long id) {
        if (subscriptionRepository.existsById(id)) {
            subscriptionRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
