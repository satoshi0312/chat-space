$(function(){
  var search_input = $('#user-search-field')
  var search_result = $('#user-search-result')
  function buildHTML(user){
    html = `<div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${user.name}</p>
              <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
            </div>`
    return html
  }
  function buildGroupMemmber(user_id, user_name){
    html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
              <input name='group[user_ids][]' type='hidden' value='${user_id}'>
              <p class='chat-group-user__name'>${user_name}</p>
              <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
            </div>`
    return html
  }
  NoUserHTML = `<div class="chat-group-user clearfix">一致するユーザーはいません</div>`

  search_input.on('keyup', function(){
    var input = search_input.val()
    $.ajax({
      url: '/users',
      type: "GET",
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      search_result.empty();
      if (users.length !== 0){
        users.forEach(function(user){
          html = buildHTML(user)
          search_result.append(html)
        })
      }
      else {
        search_result.append(NoUserHTML)
      }
    })
    .fail(function(){
      alert('ユーザ検索に失敗しました')
    })
  });
})
