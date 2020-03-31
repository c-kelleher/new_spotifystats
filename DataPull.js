$.ajax({
    method: "GET",
    url: 'https://api.spotify.com/v1/me/top/artists',
    headers: {
        'Authorization': 'Bearer ' + access_token
    },
    success: function (response) {
        document.getElementById("login_body").innerHTML = ajax.responseText;
    }
});


//* DO I NEED A NEW PAGE TO OUTPUT THE DATA?