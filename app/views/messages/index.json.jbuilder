json.array! @new_messages do |message|
  json.name           message.user.name
  json.created_at     message.created_at.to_s(:default)
  json.body           message.body
  json.image          message.image
  json.id             message.id
end

