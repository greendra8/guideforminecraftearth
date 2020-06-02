<!DOCTYPE html>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/head.php"); ?>

<body ontouchstart>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/nav.php"); ?>
    <div class="container menu">
        <div class="row">
            <li class="active"><a href="/"><i class="fas fa-home"></i> General</a></li>
            <li><a href="/pages/adventures/index.php"><i class="fas fa-hiking"></i> Adventures</a></li>
            <li><a href="/items.php"><i class="fas fa-th"></i> Items</a></li>
        </div>
    </div>
    <div class="container main">
        <hr>
        <div class="clearfix" id="google_translate_element"></div>
        <a href="/pages/general/introduction.php">
            <div class="row listing">
                <img src="/img/earth.png" class="rounded float-left icon" alt="...">
                <h3 id="introduction">Introduction</h3>
                <p>A simple, short and sweet introduction to Minecraft Earth! Everything you need to know.</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/tappables.php">
            <div class="row listing">
                <img src="/img/stone-tappable.png" class="rounded float-left icon" alt="...">
                <h3 id="tappables">Tappables</h3>
                <p>What are tappables and how can you collect them? Plus what do tappable rarities mean?</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/inventory.php">
            <div class="row listing">
                <img src="/img/backpack.png" class="rounded float-left icon" alt="...">
                <h3 id="inventory">Inventory</h3>
                <p>How does your inventory work in Minecraft Earth and how can you access it?</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/profile.php">
            <div class="row listing">
                <img src="/img/profile.png" class="rounded float-left icon" alt="...">
                <h3 id="profile">Profile</h3>
                <p>What does your profile tell you and how can you view it in Minecraft Earth.</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/adventures.php">
            <div class="row listing">
                <img src="/img/adventure_crystals.png" class="rounded float-left icon" alt="...">
                <h3 id="adventures">Adventures</h3>
                <p>What are adventures and adventure crystals and how you can play them in Minecraft Earth.</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/journal.php">
            <div class="row listing">
                <img src="/img/journal.png" class="rounded float-left icon" alt="...">
                <h3 id="journal">Journal</h3>
                <p>What is the journal and how can you use it in Minecraft Earth.</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/challenges.php">
            <div class="row listing">
                <img src="/img/challenges.png" class="rounded float-left icon" alt="...">
                <h3 id="challenges">Challenges</h3>
                <p>How do daily challenges and tappable challenges work in Minecraft Earth?</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/seasons.php">
            <div class="row listing">
                <img src="/img/seasons.png" class="rounded float-left icon" alt="...">
                <h3 id="seasons">Seasons</h3>
                <p>What are seasons in Minecraft Earth and how can you complete them.</p>
                <button>Learn More</button>
            </div>
        </a>
        <div class="row listing soon">
            <img src="/img/purple_cat.png" class="rounded float-left icon" alt="...">
            <h3>More Coming Soon!</h3>
            <p>Stay tuned for more Minecraft Earth guides coming soon!</p>
        </div>
    </div>

    <div class="container menu footer">
        <div class="row">
            <li><a href="/about.php">About</a></li>
            <li><a href="/">Terms</a></li>
            <li><a href="mailto:greendra8@hotmail.co.uk">Contact</a></li>
        </div>
    </div>
</body>
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
                  window.location.reload(true);
                  // alert pop up
                    let timerInterval
                        Swal.fire({
                          title: 'Updating...',
                          html: 'The app is restarting. Please wait <br> Closes in <strong></strong> milliseconds.',
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
</script>
</html>