class CreateGreeting < ActiveRecord::Migration[6.1]
  def change
    create_table :greetings do |t|

      t.timestamps
    end
  end
end
