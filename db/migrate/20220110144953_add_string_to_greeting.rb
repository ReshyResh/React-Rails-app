class AddTextToGreeting < ActiveRecord::Migration[6.1]
  def change
    add_column :greetings, :string, :string
  end
end
