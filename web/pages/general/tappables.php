<!DOCTYPE html>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/head.php"); ?>

<body>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/nav.php"); ?>
    <div class="container main">
        <div class="row content">
            <h1>Tappables</h1>
            <p>Tappables are collectables in Minecraft Earth and are the main way to get blocks and mobs.</p>
            <img src="/img/grass-tappable.png" class="rounded mx-auto d-block img">
            <p>They spawn randomly all around the world, and once in range can be tapped to be opened.</p>
            <p>Different tappable types will give you different loot, however the exact items that you get from a
                tappable are random.</p>
            <p>There are two main types of tappable: <b>Item</b> and <b>Mob</b>.</p>
            <h3>Item Tappables</h3>
            <img src="/img/stone-tappable.png" class="rounded mx-auto d-block img">
            <p>Item tappables include those such as <b>Grass</b>, <b>Stone</b> and <b>Tree</b> tappables. As the name
                suggests, they will contain items that are blocks, like wood, stone and glowstone.</p>
            <p>However, they can also occasionally contain hostile mobs such as skeletons and zombies! The changes of
                getting these hostile mobs is very rare though.</p>
            <h3>Mob Tappables</h3>
            <img src="/img/pig.png" class="rounded mx-auto d-block img">
            <p>Mob tappables show on the map as either <b>Cows</b>, <b>Chickens</b>, <b>Sheep</b> or <b>Pigs</b>. When
                collecting a mob tappable, there is a small chance that you will get a rare variant of that mob.</p>
            <p>For instance when opening a pig tappable you have a 2.6% chance of getting a muddy pig!</p>
            <button onclick="window.location.href='/#tappables'">Go Back</button>
        </div>
    </div>
</body>

</html>