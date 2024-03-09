class CreateSelectMaps < ActiveRecord::Migration[7.0]
  def change
    create_table :select_maps do |t|
      t.string :issue
      t.string :sub_issue
      t.string :intra_area
      t.string :outside_area

      t.timestamps
    end
  end
end
