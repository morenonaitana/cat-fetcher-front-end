exports.gifRequest = function (keyword) {
    
    // Search query
    const q = keyword + " cat";
    const apiKey = 'axLgtLca3lHOIOzY1CMCEFcIOkEjj95v';
    const searchType = 'random';

    // Create a new request
    request = new XMLHttpRequest;

    // Use Giphy url with api key
    request.open('GET', 'http://api.giphy.com/v1/gifs/' + searchType + '?api_key=' + apiKey + '&tag=' + q, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            data = JSON.parse(request.responseText).data.image_url;
            console.log(data);
            document.getElementById("giphyme").innerHTML = '<center><img src = "' + data + '"  title="GIF via Giphy"></center>';
        } else {
            console.log('reached giphy, but API returned an error');
        }
    };

    request.onerror = function () {
        console.log('connection error');
    };

    request.send();
}