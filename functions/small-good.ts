
function processOrder(order: Order): void {
  checkInventory(order);
  const totalPrice = calculateTotalPrice(order);
  processPayment(order.customer, totalPrice);
  updateInventory(order);
  sendConfirmationEmail(order.customer, order);
}

function checkInventory(order: Order): void {
  for (const item of order.items) {
      if (!inventoryService.hasItem(item)) {
          throw new Error('Item out of stock: ' + item.id);
      }
  }
}

function calculateTotalPrice(order: Order): number {
  let totalPrice = 0;
  for (const item of order.items) {
      totalPrice += pricingService.calculatePrice(item);
  }
  if (order.customer.isPremiumMember) {
      totalPrice *= 0.9; // 10% discount for premium members
  }
  return totalPrice;
}

function processPayment(customer: Customer, amount: number): void {
  paymentService.processPayment(customer, amount);
}

function updateInventory(order: Order): void {
  for (const item of order.items) {
  inventoryService.decreaseItemQuantity(item, 1);
  }
}

function sendConfirmationEmail(customer: Customer, order: Order): void {
  emailService.sendOrderConfirmation(customer.email, order);
}