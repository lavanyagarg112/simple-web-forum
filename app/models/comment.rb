class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post
  has_many :replies, class_name: "Comment", foreign_key: "parent_id", dependent: :destroys
  belongs_to :parent, class_name: "Comment", optional: true

  validates :content, presence: true
end
