function scammyIgnore() {
    $('#scammy-alert-box').remove();
    $('#scammy-alert-box-dim').remove();
}

// some sort of condition to check if it's a scam
if (true) {
    $.get(chrome.extension.getURL('/alert.html'), function(data) {
        $(data).appendTo('body');
        $('#scammy-alert-box img').attr('src', chrome.extension.getURL('/warning.png'));
        $('#scammy-alert-box button').click(scammyIgnore);
        $('#scammy-alert-box').slideDown(1000);
        $('#scammy-alert-box-dim').slideDown(1000);
    });
}