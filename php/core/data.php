<?php

if (str_starts_with($_SERVER['PHP_SELF'], '/core')) {
  ini_set('display_errors', 0);
  error_reporting(0);

  http_response_code(404);
  exit();
}
?>
!