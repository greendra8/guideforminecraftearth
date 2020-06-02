<!DOCTYPE html>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/head.php"); ?>
<body>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/nav.php"); ?>
    <div class="container main">
        <div class="row content">
            <h1>Inventory</h1>
            <p>Every item that you collect from tappables, adventures and challenges will get stored in your inventory.</p>
            <img src="/img/backpack.png" class="rounded mx-auto d-block img">
            <p>You can access your inventory by tapping on the chest in the hotbar.</p>
            <p>Inside your inventory you can sort by rarity, quantity and alphabetically. You'll also notice that items can be stacked infinity (goodbye 64!)</p>
            <p>To quickly view items of a certain type you can use the filters along the top of the screen. These include Mobs, Construction, Nature, Equipment, and Items (for everything else).</p>
            <h3>Hotbar</h3>
            <p>Along the bottom of the screen you'll notice there are 7 slots. This area is called your hotbar.</p>
            <img src="/img/wooden_sword.png" class="rounded mx-auto d-block img">
            <p>The items in your hotbar will be those that you take into adventures with you. Be careful though, as if you die in an adventure you will lose these items! (More on this in the adventure guide)</p>
            <button onclick="window.location.href='/#inventory'">Go Back</button>
        </div>
    </div>
</body>
</html>