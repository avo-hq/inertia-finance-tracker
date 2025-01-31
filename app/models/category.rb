# == Schema Information
#
# Table name: categories
#
#  id          :integer          not null, primary key
#  color_code  :string
#  description :string
#  icon        :string
#  name        :string
#  slug        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_categories_on_slug     (slug) UNIQUE
#  index_categories_on_user_id  (user_id)
#
# Foreign Keys
#
#  user_id  (user_id => users.id)
#
class Category < ApplicationRecord
  belongs_to :user
  
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates :name, presence: true, uniqueness: { scope: :user_id }
  validates :description, presence: true
  validates :color_code, presence: true
end
