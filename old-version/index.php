<!DOCTYPE HTML>
<!--
	Astral 2.5 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>SecCam Industries</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
    <!-- Nice font, but we don't want any web accesses -->
		<!--link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400" rel="stylesheet" /-->
		<script src="js/jquery.min.js"></script>
		<script src="js/skel.min.js"></script>
    <link href="css/colorbox.css" rel="stylesheet" type="text/css" />
    <script src="js/jquery.colorbox-min.js" language="javascript"></script>
    <meta http-equiv="refresh" content="100">
	  <script src="js/init.js"></script>
    <script src="js/quick_load.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel-noscript.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-desktop.css" />
			<link rel="stylesheet" href="css/noscript.css" />
		</noscript>
		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><link rel="stylesheet" href="css/ie8.css" /><![endif]-->
	</head>
	<body class="homepage">
		<!-- Wrapper-->
			<div id="wrapper">
				<!-- Nav -->
					<nav id="nav">
						<a href="#me" class="fa fa-home active"><span>Home</span></a>
						<a href="#work" class="fa fa-video-camera"><span>Live Stream</span></a>
						<a href="#email" class="fa fa-camera"><span>Photos</span></a>
						<a href="http://paradrop.org" class="fa fa-external-link-square"><span>Paradrop</span></a>
					</nav>
				<!-- Main -->
					<div id="main">
						<!-- Me -->
							<article id="me" class="panel">
								<header>
									<h1>SecCam Industries</h1>
									<span class="byline"><em>Providing surveillance solutions</em></span>
								</header>
								<a href="#work" class="jumplink pic">
									<span class="arrow fa fa-chevron-right"><span>See my work</span></span>
									<img src="images/portal.jpg" alt="" />
								</a>
							</article>
						<!-- Live Video Feed -->
							<article id="work" class="panel">
								<header>
									<h2>Live Video Feed</h2>
								</header>
								<p>
                  Say cheese!
								</p>
                <div id="video_box">
                  <img id="the_video" width="600px" height="500px" alt="Click to start feed">
                </div>
							</article>
						<!-- Email -->
							<article id="email" class="panel">
                <?php
                  require('motionlog.php');
                ?>
							</article>
					</div>
				<!-- Footer -->
					<div id="footer">
						<ul class="links">
							<li>&copy; Paradrop 2014</li>
							<li>Design : <a href="http://html5up.net/">HTML5 UP</a></li>
						</ul>
					</div>
			</div>
	</body>
</html>
