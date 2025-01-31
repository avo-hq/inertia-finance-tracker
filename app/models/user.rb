class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  has_many :categories, dependent: :destroy

  normalizes :email_address, with: ->(e) { e.strip.downcase }

  # GitHub avatar URL
  def avatar_url
    "https://github.com/#{username}.png"
  end
end
