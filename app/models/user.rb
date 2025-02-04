# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  balance_cents    :integer
#  balance_currency :string
#  email_address    :string           not null
#  password_digest  :string           not null
#  username         :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_users_on_email_address  (email_address) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  has_many :categories, dependent: :destroy
  has_many :transactions, dependent: :destroy

  normalizes :email_address, with: ->(e) { e.strip.downcase }

  monetize :balance_cents

  # GitHub avatar URL
  def avatar_url
    "https://github.com/#{username}.png"
  end

  def amount_spent_this_month
    range = Time.current.beginning_of_month..Time.current.end_of_month.end_of_day
    scope = transactions.where(transaction_type: 'expense').where(date: range)
    Money.new(scope.sum(:amount_cents), balance_currency)
  end

  def amount_spent_last_week
    range = Time.current.beginning_of_week..Time.current.end_of_week.end_of_day
    scope = transactions.where(transaction_type: 'expense').where(date: range)
    Money.new(scope.sum(:amount_cents), balance_currency)
  end

  def amount_spent_this_year
    transactions.where(date: Date.today.beginning_of_year..Date.today.end_of_year).sum(:amount_cents)
  end

  def last_weeks_income
    range = Time.current.beginning_of_week..Time.current.end_of_week.end_of_day
    scope = transactions.where(transaction_type: 'income').where(date: range)
    Money.new(scope.sum(:amount_cents), balance_currency)
  end
end