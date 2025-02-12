<?php

require(__DIR__ . "/core/common.php");

$existingIps = file_get_contents(DATA_FILE);
$views = count(explode('|', $existingIps)) - 1;
$isRecorded = str_contains($existingIps, $_SERVER['REMOTE_ADDR']);

?>
<script>
  globalThis.sena_metadata = {
    isPhpEnv: true,
    views: <?php echo $views; ?>,
    isRecorded: <? echo $isRecorded ? 'true' : 'false'; ?>
  };
</script>