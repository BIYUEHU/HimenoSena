<?php

require(__DIR__ . "/core/common.php");

$GLOBALS['currentTimestamp'] = round(microtime(true) * 1000);

if (file_exists(META_FILE)) {
  $GLOBALS['metaData'] = json_decode(file_get_contents(META_FILE), true);
} else {
  $GLOBALS['metaData'] = ['lastChecked' => 0, 'lastUpdated' => 0];
}

function fetchMessages()
{
  $messagesJson = file_get_contents(MESSAGES_FILE_URL);
  if ($messagesJson === false) return;

  if (file_exists(MESSAGES_FILE) && $messagesJson === file_get_contents(MESSAGES_FILE)) {
    updateMetaFile(false);
    return;
  }

  file_put_contents(MESSAGES_FILE, $messagesJson);
  updateMetaFile(true);
}

function updateMetaFile($both)
{
  $GLOBALS['metaData']['lastChecked'] = $GLOBALS['currentTimestamp'];

  if ($both) {
    $GLOBALS['metaData']['lastUpdated'] = $GLOBALS['currentTimestamp'];
  }

  file_put_contents(META_FILE, json_encode($GLOBALS['metaData'], JSON_PRETTY_PRINT));
}

if (($GLOBALS['currentTimestamp'] - $GLOBALS['metaData']['lastChecked']) > 10 * 60 * 1000) {
  fetchMessages();
}

$existingIps = file_get_contents(DATA_FILE);
$views = count(explode('|', $existingIps)) - 1;
$isRecorded = str_contains($existingIps, $_SERVER['REMOTE_ADDR']);

?>
<script>
  globalThis.sena_metadata = {
    isPhpEnv: true,
    views: <?php echo $views; ?>,
    isRecorded: <? echo $isRecorded ? 'true' : 'false'; ?>,
    lastChecked: <?php echo $GLOBALS['metaData']['lastChecked']; ?>,
    lastUpdated: <?php echo $GLOBALS['metaData']['lastUpdated']; ?>
  };
</script>