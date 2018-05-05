class MessagesController < ApplicationController
  def index
    @message = Message.find
  end

  def create
    @message = Message.new(message_params)
  end

  private
  def message_params
    params.require(:group).permit(:body, :image, :user 'current_user', :group)
  end
end
