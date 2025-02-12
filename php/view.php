<?php

require __DIR__ . "/core/common.php";

$ip = $_SERVER['REMOTE_ADDR'];
$existingIps = file_get_contents(DATA_FILE);

if (strpos($existingIps, $ip) === false) {
  file_put_contents(DATA_FILE, "\n" . $ip . '|', FILE_APPEND);
}
