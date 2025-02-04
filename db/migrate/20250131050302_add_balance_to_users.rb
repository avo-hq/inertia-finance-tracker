class AddBalanceToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :balance_cents, :integer
    add_column :users, :balance_currency, :string
  end
end
