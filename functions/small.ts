function processOrder(order: Order): void {
  // Check inventory
  for (const item of order.items) {
      if (!inventoryService.hasItem(item)) {
          throw new Error('Item out of stock: ' + item.id);
      }
  }

  // Calculate total price
  let totalPrice = 0;
  for (const item of order.items) {
      totalPrice += pricingService.calculatePrice(item);
  }

  // Apply discount
  if (order.customer.isPremiumMember) {
      totalPrice *= 0.9; // 10% discount for premium members
  }

  // Process payment
  paymentService.processPayment(order.customer, totalPrice);

  // Update inventory
  for (const item of order.items) {
      inventoryService.decreaseItemQuantity(item, 1);
  }

  // Send order confirmation email
  emailService.sendOrderConfirmation(order.customer.email, order);
}