class CreateFirstsSeconds < ActiveRecord::Migration
  def change
    create_table :firsts_seconds do |t|
      t.integer :first_id
      t.integer :second_id

      t.timestamps
    end
  end
end