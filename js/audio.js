window.onload = function() {
    const video  = document.getElementById("videoFlores");
    const audio1 = document.getElementById("audio1");
    const audio2 = document.getElementById("audio2");

    function reproducirEnBucle() {
        audio1.play();
        
        audio1.addEventListener('ended', function() {
            if (audio2 != null && audio2.canPlayType&&audio2.canPlayType("audio/mpeg")){
                    audio2.play();
            }
        });
        
        audio2.addEventListener('ended', function() {
            if (audio1 != null && audio1.canPlayType&&audio1.canPlayType("audio/mpeg")){
                audio1.play();
            }
        });
    }

    reproducirEnBucle();

    video.addEventListener('play', function() {
        audio1.pause();
        audio2.pause();
    });

    video.addEventListener('pause', function() {
        reproducirEnBucle();
    });
}