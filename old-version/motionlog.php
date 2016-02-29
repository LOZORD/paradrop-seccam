<!-- NOTICE: THIS IS A NEWER VERSION EDITED BY LEO -->
<h2>Motion Log</h2>

<br />

<?php
//Get all photo names from the dir
$photoNames = array();
$dirBase = './motionLog/';
$fd = opendir($dirBase);
if($fd === FALSE)
    die('Cannot find motionLog dir');

$files = array();
//First get the files so we can sort the list by timestamp
while(($tmp = readdir($fd)) !== FALSE){
    //Leo added a check so that only file names containing 'jpg' are accepted
    if($tmp != '.' and $tmp != '..' and strstr($tmp, 'jpg')){
        $pPath = "$dirBase$tmp";
  //Find epoch in string name
  $iStart = strpos($tmp, '-');
  $iEnd = strrpos($tmp, '.');
  $t = (int)substr($tmp, $iStart + 1, $iEnd-$iStart - 1);
  //put into list for sorting later
  $files[$t] = $pPath;
    }
}
closedir($fd);

//only get the 40 most recent photos from the list of photos
$files = array_slice($files, -40, NULL, true);

//display them in most-recent-first order
krsort($files);

$content = '<div class="pGallery" id="motionLog">';
$i = 1;
foreach($files as $mtime => $pPath){

        $sz = getimagesize($pPath);
        //Default the width to be 100px, therefore determine proper height based on native ratio
        $w = $sz[0];
        $h = $sz[1];
        $w_new = floor(160*($w/$h));
        //Drop files into correct place
        $content .= "<a href='$pPath'><img src='$pPath' width='$w_new' height='140' title='Time captured: $mtime'/></a>";
  if($i % 4 === 0)
          $content .= "<br />";
  $i += 1;
}
$content .= '</div>';

$content .= '<script language="javascript">
            jQuery("#motionLog a").colorbox({rel:"engGallery", maxWidth: "95%", maxHeight: "95%", scalePhotos: true});
            </script>
            <div style="clear: both;"> </div>';
echo $content;
?>
