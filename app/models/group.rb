class Group < ApplicationRecord
  validates :name, presence: true
  has_many :member
  has_many :users, through: :member
  has_many :messages
end
