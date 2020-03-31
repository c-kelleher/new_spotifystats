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
    const clientId = '7c147c8e84e24fe6bf606db4ae818288';
    const redirectUri = 'http://studentpersonalpages.loyola.edu/cpkelleher/www/SpotifyWebApp/MyStats.html';
    const scopes = ['user-top-read'];
    
    // If there is no token, redirect to Spotify authorization
    if (!_token) {
        window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    }
}