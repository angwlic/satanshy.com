const api = 'https://discord-web-api.glitch.me/discord/user/'
const worstId = '484088238403878912'

'use strict';
fetch((api + worstId), {
  method: "GET",
  mode: "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    var avatar = fieldDescribe.url
    var username = fieldDescribe.username
    var tag = fieldDescribe.discriminator
    document.getElementById("worst-pfp").src = avatar;
    var $username = document.querySelector('#user'),
        username
        $username.innerHTML = username

    var $tag = document.querySelector('#tag'),
        tag
        $tag.innerHTML = '#' + tag
}).catch(function() {
  console.warn("Something went wrong.");
});
