$('#jumbotron').css("background-image", "url()")
var url = "activities.csse.rose-hulman.edu/api/users?method=login";
$(document).ready(function() {

    var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('ytplayer', {
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        function onPlayerReady() {
            player.playVideo();
            // Mute!
            player.mute();
        }

    // if(window.location.protocol != 'https:') {
    //     location.href = location.href.replace("http://", "https://");
    // }


//     if ($.cookie('authUser')) {
//         document.location.href = "http://activities.csse.rose-hulman.edu/main.html"
//     } else {
//         console.log("There is no cookie");
//         $("#Login").click(function(event) {
//             if ($("#username").val() !== "" && $("#password").val() !== "") {
//                 event.preventDefault();
//                 event.stopPropagation();
//                 console.log("Logging in:");
//                 if (/\S/.test($("#username").val()) && /\S/.test($("#password").val())) {
//                 $.ajax({
//                     url: "/api/users?method=login",
//                     type: "POST",
//                     headers: {
//                         "username": $("#username").val(),
//                         "password": $("#password").val()
//                     },
//                     datatype: "application/json",
//                     success: function(data) {
//                         if (data.success === 1) {
//                             console.log("logged in");
//                             console.log(data);
//                             document.location.href = "http://activities.csse.rose-hulman.edu/main.html"
//                         } else {
//                             alert("Incorrect username or password combination");
//                         }
//                     },
//                     fail: function() {
//                         alert("incorrect username and password combination");
//                     },
//                     complete: function(data) {
//                     }
//                 });
//             }

//             else{
//     alert("There cannot just be spaces.  You must have at least 1 character");
// }
            
//             }
//         });
//     }
});