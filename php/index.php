<?php

require(__DIR__ . "/common.php");

$existingIps = file_get_contents(DATA_FILE);
$views = count(explode('|', $existingIps)) - 1;

?>
<script>
  globalThis.sena_metadata = {
    views: <?php echo $views; ?>
  };
</script>