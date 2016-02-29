<html>
  <head>
    <title>Paradrop Webcam Demo</title>
  </head>
  <body>
    <style>
      body
      {
        font-family: Menlo, monospace;
        margin: 0 auto;
        text-align: center;
      }
      #video_box
      {
        width: 700px;
        height: 700px;
        border: 1em dashed gray;
        margin: 0 auto;
        text-align: center;
        padding: 0.5em;
      }
      #the_video
      {
        border: 0.25em solid lightgray;
        padding: 0.25em;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
    </style>
    <h1>Paradrop Webcam Demo</h1>
    <div id="video_box">
      <!--
      <video autoplay width="640px" height="480px" type="video">
        <source src="http://admin@192.168.50.20/video.cgi">
        Uh oh, there should be a video here!
      </video>
      -->
      <img id="the_video" src="http://admin@192.168.50.20/video.cgi">
      <br />
      <br />
      <br />
      <h2>There should be a video here.</h2>
    </div>
  </body>
</html>
