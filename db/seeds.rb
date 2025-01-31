# Clear existing transactions
puts "Clearing existing transactions..."
Transaction.destroy_all

# Get first user and their categories
user = User.first
categories = user.categories

puts "Creating transactions for #{user.email_address}..."

transactions = [
  # Income
  {
    category: categories.find_by(name: 'Income'),
    amount_cents: 500000,
    amount_currency: 'USD',
    transaction_type: 'income',
    date: 1.month.ago,
    notes: 'Monthly Salary'
  },
  {
    category: categories.find_by(name: 'Income'),
    amount_cents: 85000,
    amount_currency: 'USD',
    transaction_type: 'income',
    date: 10.days.ago,
    notes: 'Freelance Project - Website Development'
  },

  # Regular Bills
  {
    category: categories.find_by(name: 'Bills'),
    amount_cents: 165000,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 28.days.ago,
    notes: 'Monthly Rent'
  },
  {
    category: categories.find_by(name: 'Bills'),
    amount_cents: 13500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 25.days.ago,
    notes: 'Electricity Bill'
  },
  {
    category: categories.find_by(name: 'Bills'),
    amount_cents: 7500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 24.days.ago,
    notes: 'Internet Service'
  },
  {
    category: categories.find_by(name: 'Bills'),
    amount_cents: 4500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 23.days.ago,
    notes: 'Phone Bill'
  },

  # Transportation
  {
    category: categories.find_by(name: 'Transportation'),
    amount_cents: 6500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 29.days.ago,
    notes: 'Monthly Transit Pass'
  },
  {
    category: categories.find_by(name: 'Transportation'),
    amount_cents: 3200,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 20.days.ago,
    notes: 'Uber to Airport'
  },
  {
    category: categories.find_by(name: 'Transportation'),
    amount_cents: 2800,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 15.days.ago,
    notes: 'Uber from Restaurant'
  },
  {
    category: categories.find_by(name: 'Transportation'),
    amount_cents: 3500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 5.days.ago,
    notes: 'Uber Late Night'
  },

  # Food - Groceries
  {
    category: categories.find_by(name: 'Food'),
    amount_cents: 8500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 27.days.ago,
    notes: 'Whole Foods Groceries'
  },
  {
    category: categories.find_by(name: 'Food'),
    amount_cents: 6500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 20.days.ago,
    notes: 'Trader Joes Groceries'
  },
  {
    category: categories.find_by(name: 'Food'),
    amount_cents: 7200,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 13.days.ago,
    notes: 'Local Market Groceries'
  },
  {
    category: categories.find_by(name: 'Food'),
    amount_cents: 7800,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 6.days.ago,
    notes: 'Weekly Groceries'
  },

  # Food - Dining Out
  {
    category: categories.find_by(name: 'Food'),
    amount_cents: 1500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 25.days.ago,
    notes: 'Starbucks Coffee'
  },
  {
    category: categories.find_by(name: 'Food'),
    amount_cents: 2200,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 18.days.ago,
    notes: 'Local Coffee Shop'
  },
  {
    category: categories.find_by(name: 'Food'),
    amount_cents: 8500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 12.days.ago,
    notes: 'Dinner with Friends - Italian Restaurant'
  },
  {
    category: categories.find_by(name: 'Food'),
    amount_cents: 3500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 8.days.ago,
    notes: 'Lunch at Work'
  },

  # Shopping
  {
    category: categories.find_by(name: 'Shopping'),
    amount_cents: 12500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 17.days.ago,
    notes: 'Winter Boots'
  },
  {
    category: categories.find_by(name: 'Shopping'),
    amount_cents: 8500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 14.days.ago,
    notes: 'H&M Clothes Shopping'
  },
  {
    category: categories.find_by(name: 'Shopping'),
    amount_cents: 4500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 7.days.ago,
    notes: 'Home Decor Items'
  },

  # Pets
  {
    category: categories.find_by(name: 'Pets'),
    amount_cents: 7500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 21.days.ago,
    notes: 'Premium Dog Food'
  },
  {
    category: categories.find_by(name: 'Pets'),
    amount_cents: 12500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 16.days.ago,
    notes: 'Vet Visit - Annual Checkup'
  },
  {
    category: categories.find_by(name: 'Pets'),
    amount_cents: 3500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 4.days.ago,
    notes: 'Dog Toys and Treats'
  },

  # Leisure
  {
    category: categories.find_by(name: 'Leisure'),
    amount_cents: 3200,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 22.days.ago,
    notes: 'Movie Tickets and Snacks'
  },
  {
    category: categories.find_by(name: 'Leisure'),
    amount_cents: 8500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 11.days.ago,
    notes: 'Concert Tickets'
  },
  {
    category: categories.find_by(name: 'Leisure'),
    amount_cents: 4500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 3.days.ago,
    notes: 'Bowling Night with Friends'
  },

  # Education
  {
    category: categories.find_by(name: 'Education'),
    amount_cents: 12500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 19.days.ago,
    notes: 'Udemy Courses Bundle'
  },
  {
    category: categories.find_by(name: 'Education'),
    amount_cents: 4500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 9.days.ago,
    notes: 'Programming Books'
  },
  {
    category: categories.find_by(name: 'Education'),
    amount_cents: 1500,
    amount_currency: 'USD',
    transaction_type: 'expense',
    date: 2.days.ago,
    notes: 'Monthly Subscription - Learning Platform'
  }
]

# Create all transactions
transactions.each do |transaction|
  Transaction.create!(
    user: user,
    **transaction
  )
end

puts "Created exactly #{Transaction.count} transactions"