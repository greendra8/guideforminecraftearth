<html> 
    <?php include "php/head.php"; ?>
<body>
<header>Guide For Minecraft Earth</header>
<header class="hidden">Guide For Minecraft Earth</header>

<div class="wrapper-index">
   <h1 class="index-title">featured articles</h1>
       <a href="1-start-here.php">
        <div class="small-article left">
            <img class="small-image" src="img/thumbs/crafting-table.png">
            <h3>Start Here</h3>
        </div>
        </a>
        <a href="3.1-profile.php">
         <div class="small-article right">
            <img class="small-image" src="img/thumbs/skins.png">
            <h3>Profile &amp; Skins</h3>
        </div>
        </a>
    <h1 class="index-title">popular guides</h1>
       <a href="4-inventory.php">
        <div class="wide-article">
            <img class="wide-image" src="img/thumbs/inventory.png">
            <h3>Inventory</h3>
        </div>
        </a>
        <a href="5-tappables.php">
        <div class="wide-article">
            <img class="wide-image" src="img/thumbs/grass-tappable.png">
            <h3>Tappables</h3>
        </div>
        </a>
    <h1 class="index-title">beginners guides</h1>
       <a href="3">
        <div class="small-article left">
            <img class="small-image" src="img/thumbs/skins.png">
            <h3>Profile &amp; Skins</h3>
        </div>
        </a>
        <a href="4-inventory.php">
         <div class="small-article right">
            <img class="small-image" src="img/thumbs/inventory.png">
            <h3>Inventory</h3>
        </div>
        </a>
        <a href="5-tappables.php">
        <div class="small-article left">
            <img class="small-image" src="img/thumbs/grass-tappable.png">
            <h3>Tappables</h3>
        </div>
        </a>
        <a href="6-item-types.php">
        <div class="small-article right">
            <img class="small-image" src="img/thumbs/item-types.png">
            <h3>Item Rarities</h3>
        </div>
        </a>
        <a href="7-introduction-to-build-plates.php">
        <div class="small-article left">
            <img class="small-image" src="img/thumbs/build-plate.png">
            <h3>Build Plates</h3>
        </div>
        </a>
        <a href="8-build-modes.php">
        <div class="small-article right">
            <img class="small-image" src="img/thumbs/switches.png">
            <h3>Build Modes</h3>
        </div>
        </a>
        <a href="9-multiplayer.php">
        <div class="small-article left">
            <img class="small-image" src="img/thumbs/friends.png">
            <h3>Multiplayer</h3>
        </div>
        </a>
        <a href="10-rubies.php">
        <div class="small-article right">
            <img class="small-image" src="img/thumbs/ruby.png">
            <h3>Rubies &amp; Store</h3>
        </div>
        </a>
        <a href="11-adventures.php">
        <div class="small-article left">
            <img class="small-image" src="img/thumbs/diamond-pickaxe.png">
            <h3>Adventures</h3>
        </div>
        </a>
        <br> <br> <br>
        <a style="padding: 5px 40px;" class="back-button" href="about.php">About</a>
</div>
<div class="clearfix"></div>
</body>

<!--
<script>
// Check that service workers are registered
if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(function(reg) {
        // updatefound is fired if sw.js changes.
        reg.onupdatefound = function() {
          var installingWorker = reg.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  // At this point, the old content will have been purged and the fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is available; please refresh."
                    
                  // alert pop up
                    let timerInterval
                        Swal.fire({
                          title: 'Update Downloaded!',
                          html: 'Restart the app to see changes. Closes in <strong></strong> milliseconds.',
                          timer: 6000,
                          onBeforeOpen: () => {
                            Swal.showLoading()
                            timerInterval = setInterval(() => {
                              Swal.getContent().querySelector('strong')
                                .textContent = Swal.getTimerLeft()
                            }, 100)
                          },
                          onClose: () => {
                            clearInterval(timerInterval)
                          }
                        }).then((result) => {
                          if (
                            /* Read more about handling dismissals below */
                            result.dismiss === Swal.DismissReason.timer
                          ) {
                            console.log('I was closed by the timer')
                          }
                        })
                     
                } else {
                  // At this point, everything has been precached.
                  // It's the perfect time to display a "Content is cached for offline use." message.
                  console.log('Content is now available offline!');
                }
                break;

              case 'redundant':
                console.error('The installing service worker became redundant.');
                break;
            }
          };
        };
      }).catch(function(e) {
        console.error('Error during service worker registration: ', e);
      });
    }
</script> -->
<html> 