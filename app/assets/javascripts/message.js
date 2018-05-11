$(function(){
  function buildHTML(message){
    var html =`<div class="message">
                <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${message.name}
                  </div>
                  <div class="upper-message__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="lower-meesage">
                  <div class='lower-message__content'>
                      ${message.body}
                  </div>
                </div>
              </div>`
    // var html_image =
    //               `<div class="lower-message__image">
    //                 <img src="${message.image}", alt="">
    //               </div>`

    // html = (message.image) ? html = $(html_body).append(html_image + `</div></div>`) : html = $(html_body).append(`</div></div>`)
    return html;
  }

  $('#new_message').on('submit', function(e){
    // var formData = new FormData(this);
    // $form = $("#new_message");
    e.preventDefault();
    var formData =  new FormData(this);
    $.ajax({
      type: 'POST',
      url: location.href,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main').append(html);
      $('.form__message').val('');
      $('.chat-main').animate({scrollTop: $('.chat-main')[0].scrollHeight});
      $('.form__submit').prop('disabled', false)
    })
    .fail(function(data) {
      alert('error');
    })
  })
});
