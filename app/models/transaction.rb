class Transaction < ApplicationRecord
  TRANSACTION_TYPES = ['income', 'expense']
  
  belongs_to :user
  belongs_to :category

  validates :amount_cents, presence: true
  validates :transaction_type, presence: true, inclusion: { in: TRANSACTION_TYPES }
  validates :description, presence: true
  validates :date, presence: true

end
