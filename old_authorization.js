let _token;

function buttonClick(){
    
    // Get the hash of the url
    const hash = window.location.hash
        .substring(1)
        .split('&')
        .reduce(function (initial, item) {
            if (item) {
                var parts = item.split('=');
                initial[parts[0]] = decodeURIComponent(parts[1]);
            }
  
            return initial;
        }, {});

    window.location.hash = '';

    // Set token
    _token = hash.access_token;
    
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    
    // Replace with your app's client ID, redirect URI and desired scopes
    const clientId = '54fa4bad309d441498036c12328e5ad1';
    const redirectUri = 'https://c-kelleher.github.io/new_spotifystats/new_loginpage.html';
    const scopes = ['user-read-private user-read-email playlist-read-collaborative user-top-read playlist-read-private user-follow-read user-read-recently-played user-library-read'];
                    
    // If there is no token, redirect to Spotify authorization
    if (!_token) {
        window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    }
}