class CreateReferences < ActiveRecord::Migration[6.1]
  def change
    create_table :references do |t|
      t.text :name

      t.timestamps
    end
  end
end
