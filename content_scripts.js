$(window).on('load', function() {

  console.log("window-loaded");

  $(
    "<div id=\"gift-card-container\">" +
    "<div id=\"gift-card-left\" class=\"button\"> left </div>" +
    "<div id=\"gift-card-center\" class=\"button\"> center</div>" +
    "<div id=\"gift-card-right\" class=\"button\"> right </div>" +
    "</div>"
  ).insertBefore("#gc-redemption-form-heading");

  //$("<div id=\"button-fill-card\" class=\"button\">Test</div>").insertBefore("#gc-redemption-form-heading");

  $('#gift-card-left').click(function() {
    console.log("button-fill-card click");
    $('#gc-redemption-input').val("button-fill-card click");
  });

});

$(document).ready(function() {
  console.log("document-ready");
});
