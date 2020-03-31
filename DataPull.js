$.ajax({
    method: "GET",
    url: 'https://api.spotify.com/v1/me/top/artists',
    headers: {
        'Authorization': 'Bearer ' + access_token
    },
    success: function (data) {
        console.log(data);
    }
});