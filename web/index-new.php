<html> 
    <?php include "php/head.php"; ?>
<body style="margin-bottom: 0;">
    <div class="wrapper">
    <?php include "php/header.php"; ?>
    <div class="content">
        <div class="index-item clearfix">
            <img class="index-item-image" src="/img/crafting-table.png">
            <h3 class="index-item-title">Introduction to Minecraft Earth</h3>
        </div>
        
        <div class="index-item clearfix">
            <img class="index-item-image" src="/img/door.png">
            <h3 class="index-item-title">Getting started</h3>
        </div>
        
        <div class="index-item clearfix">
            <img class="index-item-image" src="/img/muddy-pig.png">
            <h3 class="index-item-title">Welcome to Minecraft Earth</h3>
        </div>
        
        <div class="index-item clearfix">
            <img class="index-item-image" src="/img/backpack.png">
            <h3 class="index-item-title">Your inventory</h3>
        </div>
        
        <div class="index-item clearfix">
            <img class="index-item-image" src="/img/chest.png">
            <h3 class="index-item-title">Introduction to tappables</h3>
        </div>
        
        <div class="index-item clearfix">
            <img class="index-item-image" src="/img/item-types.png">
            <h3 class="index-item-title">Types of item</h3>
        </div>
        
        <div class="index-item">
            <img class="index-item-image" src="/img/build-plate.png">
            <h3 class="index-item-title">Introduction to build plates</h3>
        </div>
        
        <div class="index-item">
            <img class="index-item-image" src="/img/friends.png">
            <h3 class="index-item-title">Building with friends</h3>
        </div>
        
        <div class="index-item">
            <img class="index-item-image" src="/img/beacon.png">
            <h3 class="index-item-title">Placing your build</h3>
        </div>

        <div class="index-item">
                <img class="index-item-image" src="/img/diamond_pickaxe.png">
                <h3 class="index-item-title">Adventures</h3>
            </div>
        
        <div class="clearfix"></div>        
        <div style="background: rgba(0, 0, 0, 0.3);" class="list-item">
            <img style="max-width: 100px; max-height: 100px;" class="index-item-image" src="/img/clock.png">
            <h3 class="index-item-title">New guides coming soon!</h3>
            <p class="index-item-description">As we learn more about Minecraft Earth, more guides will be published and updated! The game is still new and lacks many of its final features.</p>
        </div>
            <a style="padding: 5px 40px;" class="back-button" href="about.php">About</a>
    </div>
    <footer> </footer>
    </div>
</body>
<!--<script>
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
</script>-->
</html>