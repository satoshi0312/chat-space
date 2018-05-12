$(function(){
  function buildHTML(message){
    var image =   `<div class="lower-message__image">
                    <img src="${message.image.url}", alt="">
                  </div>`
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
                  ${(message.image.url) == null ? "" : image}
                </div>
              </div>`

    return html;
  }

  $('#new_message').on('submit', function(e){
    // var formData = new FormData(this);
    // $form = $("#new_message");
    e.preventDefault();
    var formData =  new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main').append(html);
      $('.chat-main').animate({scrollTop: $('.chat-main')[0].scrollHeight});
      $('.form__submit').prop('disabled', false);
      $('.new_message')[0].reset();
    })
    .fail(function(data) {
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
      alert('error');
    })
  })
});
