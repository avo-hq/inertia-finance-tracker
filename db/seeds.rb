puts "Clearing existing data..."
Transaction.destroy_all
Category.destroy_all

user = User.create!(email_address: "example@example.com", password: "password", username: "example", balance: 8950)
puts "Creating data for #{user.email_address}..."

# Create categories first
categories = {
  income: Category.create!(
    user: user,
    name: 'Income',
    description: 'Money earned from salary, freelancing, investments, and other sources',
    color_code: '#28a745'
  ),
  bills: Category.create!(
    user: user,
    name: 'Bills',
    description: 'Regular monthly expenses like rent, utilities, and subscriptions',
    color_code: '#dc3545'
  ),
  transport: Category.create!(
    user: user,
    name: 'Transportation',
    description: 'Costs related to commuting, travel, and vehicle maintenance',
    color_code: '#fd7e14'
  ),
  food: Category.create!(
    user: user,
    name: 'Food',
    description: 'Groceries, restaurants, coffee shops, and food delivery',
    color_code: '#ffc107'
  ),
  shopping: Category.create!(
    user: user,
    name: 'Shopping',
    description: 'Clothing, electronics, home goods, and other retail purchases',
    color_code: '#e83e8c'
  ),
  pets: Category.create!(
    user: user,
    name: 'Pets',
    description: 'Pet food, veterinary care, supplies, and grooming',
    color_code: '#6f42c1'
  ),
  leisure: Category.create!(
    user: user,
    name: 'Leisure',
    description: 'Entertainment, hobbies, sports, and recreational activities',
    color_code: '#17a2b8'
  ),
  education: Category.create!(
    user: user,
    name: 'Education',
    description: 'Courses, books, online learning, and educational materials',
    color_code: '#20c997'
  )
}

# Create transactions with direct category references
transactions = [
  # Income
  { category: categories[:income], amount_cents: 500000, transaction_type: 'income', date: 1.month.ago, notes: 'Monthly Salary' },
  { category: categories[:income], amount_cents: 85000, transaction_type: 'income', date: 10.days.ago, notes: 'Freelance Project' },

  # Bills
  { category: categories[:bills], amount_cents: 165000, transaction_type: 'expense', date: 28.days.ago, notes: 'Rent' },
  { category: categories[:bills], amount_cents: 13500, transaction_type: 'expense', date: 25.days.ago, notes: 'Electricity' },
  { category: categories[:bills], amount_cents: 7500, transaction_type: 'expense', date: 24.days.ago, notes: 'Internet' },
  { category: categories[:bills], amount_cents: 4500, transaction_type: 'expense', date: 23.days.ago, notes: 'Phone' },

  # Transportation
  { category: categories[:transport], amount_cents: 6500, transaction_type: 'expense', date: 29.days.ago, notes: 'Transit Pass' },
  { category: categories[:transport], amount_cents: 3200, transaction_type: 'expense', date: 20.days.ago, notes: 'Uber to Airport' },
  { category: categories[:transport], amount_cents: 2800, transaction_type: 'expense', date: 15.days.ago, notes: 'Uber from Restaurant' },
  { category: categories[:transport], amount_cents: 3500, transaction_type: 'expense', date: 5.days.ago, notes: 'Uber Late Night' },

  # Food
  { category: categories[:food], amount_cents: 8500, transaction_type: 'expense', date: 27.days.ago, notes: 'Whole Foods' },
  { category: categories[:food], amount_cents: 6500, transaction_type: 'expense', date: 20.days.ago, notes: 'Trader Joes' },
  { category: categories[:food], amount_cents: 7200, transaction_type: 'expense', date: 13.days.ago, notes: 'Local Market' },
  { category: categories[:food], amount_cents: 7800, transaction_type: 'expense', date: 6.days.ago, notes: 'Weekly Groceries' },
  { category: categories[:food], amount_cents: 1500, transaction_type: 'expense', date: 25.days.ago, notes: 'Starbucks' },
  { category: categories[:food], amount_cents: 2200, transaction_type: 'expense', date: 18.days.ago, notes: 'Coffee Shop' },
  { category: categories[:food], amount_cents: 8500, transaction_type: 'expense', date: 12.days.ago, notes: 'Italian Restaurant' },
  { category: categories[:food], amount_cents: 3500, transaction_type: 'expense', date: 8.days.ago, notes: 'Lunch' },

  # Shopping
  { category: categories[:shopping], amount_cents: 12500, transaction_type: 'expense', date: 17.days.ago, notes: 'Winter Boots' },
  { category: categories[:shopping], amount_cents: 8500, transaction_type: 'expense', date: 14.days.ago, notes: 'H&M' },
  { category: categories[:shopping], amount_cents: 4500, transaction_type: 'expense', date: 7.days.ago, notes: 'Home Decor' },

  # Pets
  { category: categories[:pets], amount_cents: 7500, transaction_type: 'expense', date: 21.days.ago, notes: 'Dog Food' },
  { category: categories[:pets], amount_cents: 12500, transaction_type: 'expense', date: 16.days.ago, notes: 'Vet Visit' },
  { category: categories[:pets], amount_cents: 3500, transaction_type: 'expense', date: 4.days.ago, notes: 'Dog Toys' },

  # Leisure
  { category: categories[:leisure], amount_cents: 3200, transaction_type: 'expense', date: 22.days.ago, notes: 'Movies' },
  { category: categories[:leisure], amount_cents: 8500, transaction_type: 'expense', date: 11.days.ago, notes: 'Concert' },
  { category: categories[:leisure], amount_cents: 4500, transaction_type: 'expense', date: 3.days.ago, notes: 'Bowling' },

  # Education
  { category: categories[:education], amount_cents: 12500, transaction_type: 'expense', date: 19.days.ago, notes: 'Udemy Courses' },
  { category: categories[:education], amount_cents: 4500, transaction_type: 'expense', date: 9.days.ago, notes: 'Programming Books' },
  { category: categories[:education], amount_cents: 1500, transaction_type: 'expense', date: 2.days.ago, notes: 'Learning Platform' }
]

# Set default currency and create transactions
transactions.each do |t|
  Transaction.create!(user: user, amount_currency: 'USD', **t)
end

puts "Created #{Category.count} categories and #{Transaction.count} transactions"