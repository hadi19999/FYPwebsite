<?php
    header('Content-Type: application/json');
    $fileName = "courses.json";
    if (file_exists($fileName))
      {
    $json = json_decode(file_get_contents($fileName), true);
        echo json_encode($json);
      }
    else
      {
        echo "The file $fileName does not exist";
      }
    ;
?>