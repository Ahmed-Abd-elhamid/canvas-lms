define [
  'jquery'
  'compiled/fn/preventDefault'
  'compiled/registration/signupDialog'
  'jst/registration/login'
  'compiled/behaviors/authenticity_token'
  'str/htmlEscape'
  'i18n!registration'
], ($, preventDefault, signupDialog, loginForm, authenticity_token, htmlEscape, I18n) ->
  $loginForm = null

  $('.signup_link').click preventDefault ->
    signupDialog($(this).data('template'), $(this).prop('title'), $(this).data('path'))

  $('#registration_video a').click preventDefault ->
    $("<div style='padding:0;'><iframe style='float:left;' src='//player.vimeo.com/video/35336470?portrait=0&amp;color=7fc8ff&amp;autoplay=1' width='800' height='450' frameborder='0' title='#{htmlEscape(I18n.t 'Video Player')}' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>")
      .dialog
        width: 800,
        title: I18n.t "Canvas Introduction Video",
        modal: true,
        resizable: false,
        close: -> $(this).remove()

  $('body').click (e) ->
    unless $(e.target).closest('#registration_login, #login_form').length
      $loginForm?.hide()

  $('#registration_login').on 'click', preventDefault ->
    if $loginForm
      $loginForm.toggle()
    else
      $loginForm = $(loginForm(
        login_handle_name: ENV.ACCOUNT.registration_settings.login_handle_name
        auth_token: authenticity_token()
      ))
      $loginForm.appendTo($(this).closest('.registration-content'))
    if $loginForm.is(':visible')
      $loginForm.find('input:visible').eq(0).focus()
