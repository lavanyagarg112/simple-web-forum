class Post < ApplicationRecord
    validates :title, presence: true
    validates :content, presence: true, length: { minimum: 10 }

    belongs_to :user

end
