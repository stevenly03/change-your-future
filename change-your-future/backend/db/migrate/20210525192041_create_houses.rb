class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :title
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
