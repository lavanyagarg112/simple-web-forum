class RenameOldColumnToNewColumn2 < ActiveRecord::Migration[7.1]
  def change
    rename_column :comments, :contet, :content
  end
end
