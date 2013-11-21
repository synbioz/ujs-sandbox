// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_self

//
// Comportement lors de la suppression
//

$(document).on('ajax:success', '#post-list .post a.delete', function() {
  $(this).closest('li').remove();
});

$(document).on('ajax:error', '#post-list .post a.delete', function(event, xhr) {
  if (xhr.status == 405) {
    $("#post-list").replaceWith(xhr.responseText);
    alert("Le post demandé n'a pas été trouvé.");
  }
});

//
// Comportement lors de l'édition
//

// Force the Accept header to Javascript
$(document).on('ajax:beforeSend', '#post-list .post a.edit', function(event, xhr, settings) {
  xhr.setRequestHeader('accept', settings.accepts.script)
});

$(document).on('ajax:success', '#post-list .post a.edit', function(event, html) {
  $(html).insertBefore($('section:first'));
});

//
// Comportement général
//

$(document).on('ajax:error', function(event, xhr) {
  if (xhr.status == 500 || xhr.status == 0) {
    alert("Une erreur serveur s'est produite.");
  }
});
