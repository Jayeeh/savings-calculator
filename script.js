// List of prices for items bought
const receipt = [21.99, 10.67, 18.50];

// Function to get the cents part of a price
function getCents(price) {
  // Convert the price to a string and split it at the decimal point
  const splitPrice = price.toString().split(".");
  // Return the cents part (the part after the decimal point)
  return splitPrice[1];
}

// Function to check if the total price qualifies for a discount
function getsDiscount(rec) {
  let total = 0;
  // Loop through each price in the receipt
  for (let i = 0; i < rec.length; i++) {
    // Add each price to the total
    total += rec[i];
  }
  // If the total is more than $50, return true (we get a discount)
  if (total > 50) {
    return true;
  } else {
    // Otherwise, return false (no discount)
    return false;
  }
}

// Function to find the discount rate based on the cents part of the price
function findDiscount(price) {
  // Get the cents part of the price
  const cents = getCents(price);
  // Check the cents part and return the corresponding discount rate
  if (cents == 67) {
    return 0.3; // 30% discount
  } else if (cents == 95) {
    return 0.4; // 40% discount
  } else if (cents == 99) {
    return 0.5; // 50% discount
  } else {
    return 0; // No discount
  }
}

// Function to calculate the total price after applying discounts
function calculateTotal(receipt) {
  let total = 0;
  let totalSavings = 0;
  // Loop through each price in the receipt
  for (let i = 0; i < receipt.length; i++) {
    const originalPrice = receipt[i];
    // Check if we get a discount
    if (getsDiscount(receipt)) {
      // Find the discount rate for the current price
      let discountRate = findDiscount(originalPrice);
      // Calculate the savings for the current price
      let savings = originalPrice * discountRate;
      // Add the savings to the total savings
      totalSavings += savings;
      // Calculate the discounted price
      let discountedPrice = originalPrice - savings;
      // Add the discounted price to the total
      total += discountedPrice;
      // If there is a discount, print the savings for the current item
      if (discountRate !== 0) {
        console.log(`Item ${i} Savings: $${savings.toFixed(2)}`);
      }
    } else {
      // If no discount, add the original price to the total
      total += originalPrice;
    }
  }
  // Print the total savings
  console.log(`Total Saved: $${totalSavings.toFixed(2)}`);
  // Print the total price after discounts
  console.log(`Total Post-Discount: $${total.toFixed(2)}`);
}

// Call the function to calculate the total for the receipt
calculateTotal(receipt);
