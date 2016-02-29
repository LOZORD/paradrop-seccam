$(document).ready
(
  function()
  {
    const THE_VIDEO = $('#the_video');

    const VIDEO_ATTR = 'http://admin@192.168.50.20/video.cgi';

    THE_VIDEO.click
    (
      function(event)
      {
        $(this).attr('src', VIDEO_ATTR);
      }
    );
  } //end ready func
); //end doc ready
