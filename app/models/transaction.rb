# == Schema Information
#
# Table name: transactions
#
#  id               :integer          not null, primary key
#  amount_cents     :integer          default(0), not null
#  amount_currency  :string           not null
#  date             :datetime         not null
#  notes            :text
#  transaction_type :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  category_id      :integer          not null
#  user_id          :integer          not null
#
# Indexes
#
#  index_transactions_on_category_id  (category_id)
#  index_transactions_on_user_id      (user_id)
#
# Foreign Keys
#
#  category_id  (category_id => categories.id)
#  user_id      (user_id => users.id)
#
class Transaction < ApplicationRecord
  TRANSACTION_TYPES = ['expense', 'income']
  
  belongs_to :user
  belongs_to :category

  validates :amount_cents, presence: true
  validates :transaction_type, presence: true, inclusion: { in: TRANSACTION_TYPES }
  validates :date, presence: true

  monetize :amount_cents, as: :amount

  scope :descending_by_date, -> { order(date: :desc) }
  scope :income, -> { where(transaction_type: 'income') }
  scope :expense, -> { where(transaction_type: 'expense') }

  def category_name
    category.name
  end
end
