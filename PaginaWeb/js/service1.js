$(document).ready(function() {
    $.ajax({
        url: "http://demo9384662.mockable.io/JuanPerez"
    }).then(function(data) {
       $('.name').append(data.name);
       $('.age').append(data.age);
       $('.nick_name').append(data.nick_name);
       $('.address').append(data.address);
       $('.text').append(data.text);
    });
});
