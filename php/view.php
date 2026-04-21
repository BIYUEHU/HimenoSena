<?php

const DATA_FILE = __DIR__ . '/data.php';

$ip = $_SERVER['REMOTE_ADDR'];
$existingIps = file_get_contents(DATA_FILE);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Content-type: text/plain');
  echo count(explode('|', $existingIps)) - 1;
} else if (strpos($existingIps, $ip) === false) {
  file_put_contents(DATA_FILE, "\n" . $ip . '|', FILE_APPEND);
}
