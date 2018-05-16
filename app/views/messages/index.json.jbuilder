json.array! @new_messages do |message|
  json.name           message.user.name
  json.created_at     message.created_at.strftime("%Y/%m/%d %H:%M")
  json.body           message.body
  json.image          message.image
  json.id             message.id
end
