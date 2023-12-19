class RenameOldColumnToNewColumn < ActiveRecord::Migration[7.1]
  def change
    rename_column :comments, :comment, :contet
  end
end
