<html> 
    <?php include "php/head.php"; ?>
<body style="margin-bottom: 0;">
    <div class="wrapper">
    <?php include "php/header.php"; ?>
    <div class="content">
        <div class="list-item">
            <img class="list-item-image" src="/img/crafting-table.png">
            <h3 class="list-item-title">Introduction to Minecraft Earth</h3>
            <p class="list-item-description">Learn the basics about Minecraft Earth. New players should start here.</p>
            <a href="/1-start-here.php"><button>start here!</button></a>
        </div>
        
        <div class="list-item">
            <img class="list-item-image" src="/img/door.png">
            <h3 class="list-item-title">Getting started</h3>
            <p class="list-item-description">Get started in Minecraft Earth. Learn how to get signed up and start playing now!</p>
            <a href="/2-getting-started.php"><button>learn more</button></a>
        </div>
        
        <div class="list-item">
            <img class="list-item-image" src="/img/muddy-pig.png">
            <h3 class="list-item-title">Welcome to Minecraft Earth</h3>
            <p class="list-item-description">A welcome to the game and a short introduction of what's to come.</p>
            <a href="/3-welcome-to-minecraft-earth.php"><button>learn more</button></a>
        </div>
        
        <div class="list-item">
            <img class="list-item-image" src="/img/backpack.png">
            <h3 class="list-item-title">Your inventory</h3>
            <p class="list-item-description">Learn about your player's inventory and navigation, and also how to customise your skin.</p>
            <a href="/4-inventory.php"><button>learn more</button></a>
        </div>
        
        <div class="list-item">
            <img class="list-item-image" src="/img/chest.png">
            <h3 class="list-item-title">Introduction to tappables</h3>
            <p class="list-item-description">Learn what tappables are and why they're so useful.</p>
            <a href="/5-tappables.php"><button>learn more</button></a>
        </div>
        
        <div class="list-item">
            <img class="list-item-image" src="/img/item-types.png">
            <h3 class="list-item-title">Types of item</h3>
            <p class="list-item-description">Learn about the new types of items in Minecraft Earth and how you can collect them.</p>
            <a href="/6-item-types.php"><button>learn more</button></a>
        </div>
        
        <div class="list-item">
            <img class="list-item-image" src="/img/build-plate.png">
            <h3 class="list-item-title">Introduction to build plates</h3>
            <p class="list-item-description">Learn what build plates are and how to use and unlock them.</p>
            <a href="/7-introduction-to-build-plates.php"><button>learn more</button></a>
        </div>
        
        <div class="list-item">
            <img class="list-item-image" src="/img/friends.png">
            <h3 class="list-item-title">Building with friends</h3>
            <p class="list-item-description">Learn about building together with your friends, and how you can do it.</p>
            <a href="/8-building-with-friends.php"><button>learn more</button></a>
        </div>
        
        <div class="list-item">
            <img class="list-item-image" src="/img/beacon.png">
            <h3 class="list-item-title">Placing your build</h3>
            <p class="list-item-description">Learn how to place your build in the real world, and how to interact with it at life-size.</p>
            <a href="/9-place-your-build.php"><button>learn more</button></a>
        </div>

        <div class="list-item">
                <img class="list-item-image" src="/img/diamond_pickaxe.png">
                <h3 class="list-item-title">Adventures</h3>
                <p class="list-item-description">Learn what adventures are, what you can find and how you can play them with friends!</p>
                <a href="/10-adventures.php"><button>learn more</button></a>
            </div>
        
        <div style="background: rgba(0, 0, 0, 0.3);" class="list-item">
            <img style="max-width: 100px; max-height: 100px;" class="list-item-image" src="/img/clock.png">
            <h3 class="list-item-title">More guides coming soon!</h3>
            <p class="list-item-description">As we learn more about Minecraft Earth, more guides will be published and updated! The game is still new and lacks many of its final features.</p>
        </div>

        
            <a style="padding: 5px 40px;" class="back-button" href="about.php">About</a>
    </div>
    <footer> </footer>
    </div>
</body>
<script>
// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
</script>
</html>