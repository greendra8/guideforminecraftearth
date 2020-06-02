<!DOCTYPE html>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/head.php"); ?>

<body>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/nav.php"); ?>
    <style>.icon { margin-top: 0;}</style>
    <div class="container menu">
        <div class="row">
            <li><a href="/"><i class="fas fa-home"></i> General</a></li>
            <li class="active"><a href="/pages/adventures/index.php"><i class="fas fa-hiking"></i> Adventures</a></li>
            <li><a href="/items.php"><i class="fas fa-th"></i> Items</a></li>
        </div>
    </div>
    <div class="container main">
        <hr>
        <div style="min-height: 0; margin-bottom: 15px; text-align: center;" class="row listing">
            <p>Solutions to Adventures thanks to r/Minecraft_Earth</p>
        </div>

        <a href="/pages/adventures/squid_tank.php">
            <div class="row listing">
                <img src="/img/adventure_crystal_uncommon.png" class="rounded float-left icon" alt="...">
                <h3 id="challenges">Squid Tank</h3>
                <p>Solution and guide to the squid tank adventure.</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/adventures/yin_yang.php">
            <div class="row listing">
                <img src="/img/adventure_crystal_uncommon.png" class="rounded float-left icon" alt="...">
                <h3 id="challenges">Yin Yang</h3>
                <p>Solution and guide to the Yin Yang adventure.</p>
                <button>Learn More</button>
            </div>
        </a>

    </div>

</body>
</html>