class CreateSeconds < ActiveRecord::Migration
  def change
    create_table :seconds do |t|
      t.string :name

      t.timestamps
    end
  end
end
