class CreateCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :categories do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :color_code
      t.string :slug

      t.timestamps
    end
    add_index :categories, :slug, unique: true
    add_index :categories, [:user_id, :name], unique: true
  end
end
