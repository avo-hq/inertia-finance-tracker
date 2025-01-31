class CreateTransactions < ActiveRecord::Migration[8.0]
  def change
    create_table :transactions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      t.text :notes
      t.integer :amount_cents, null: false, default: 0
      t.string :amount_currency, null: false
      t.string :transaction_type, null: false
      t.datetime :date, null: false

      t.timestamps
    end
  end
end
