class Group < ApplicationRecord
  validates :name, presence: true

  has_many :member
  has_many :users, through: :member
  has_many :messages

  def show_last_message
    if (last_message = messages.last).present?
      last_message.body? ? last_message.body : '画像が投稿されています'
    else
      'まだメッセージはありません。'
    end
  end
end
