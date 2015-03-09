// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

myApp.onPageInit('random', function (page) {
    var links = [
    "http://files.podsnack.com/iframe/embed.html?hash=a13yvqwy&t=1425852316",
    "http://files.podsnack.com/iframe/embed.html?hash=avtmy3f5&t=1425689167",
    "http://files.podsnack.com/iframe/embed.html?hash=a1p8v02e&t=1424996505",
    "http://files.podsnack.com/iframe/embed.html?hash=av1968al&t=1424997514",
    "http://files.podsnack.com/iframe/embed.html?hash=a1jeh6rb&t=1425007657",
    "http://files.podsnack.com/iframe/embed.html?hash=a19yugvo&t=1425007793",
    "http://files.podsnack.com/iframe/embed.html?hash=avp01wb6&t=1425008707",
    "http://files.podsnack.com/iframe/embed.html?hash=a1kax2g4&t=1425007448",
    "http://files.podsnack.com/iframe/embed.html?hash=avz968al&t=1425003790",
    "http://files.podsnack.com/iframe/embed.html?hash=avt3blqa&t=1425003639",
    "http://files.podsnack.com/iframe/embed.html?hash=av15rayq&t=1425006610",
    "http://files.podsnack.com/iframe/embed.html?hash=a1ul7e42&t=1425006452",
    "http://files.podsnack.com/iframe/embed.html?hash=avt8v02e&t=1425007053",
    "http://files.podsnack.com/iframe/embed.html?hash=av7mgf0s&t=1425006870",
    "http://files.podsnack.com/iframe/embed.html?hash=a1j01wb6&t=1425004581",
    "http://files.podsnack.com/iframe/embed.html?hash=avh5rayq&t=1425004399",
    "http://files.podsnack.com/iframe/embed.html?hash=a1hp8unk&t=1425008830",
    "http://files.podsnack.com/iframe/embed.html?hash=a1m2cbdr&t=1425008645",
    "http://files.podsnack.com/iframe/embed.html?hash=avt5rayq&t=1425005646",
    "http://files.podsnack.com/iframe/embed.html?hash=a1cl7e42&t=1425005524",
    "http://files.podsnack.com/iframe/embed.html?hash=avc8v02e&t=1425002799",
    "http://files.podsnack.com/iframe/embed.html?hash=avhmgf0s&t=1425002829",
    "http://files.podsnack.com/iframe/embed.html?hash=avpax2g4&t=1425006041",
    "http://files.podsnack.com/iframe/embed.html?hash=avkszy6w&t=1425005855",
    "http://files.podsnack.com/iframe/embed.html?hash=a1pszy6w&t=1425004186",
    "http://files.podsnack.com/iframe/embed.html?hash=avxmgf0s&t=1425004044",
    "http://files.podsnack.com/iframe/embed.html?hash=av1iose0&t=1425005643",
    "http://files.podsnack.com/iframe/embed.html?hash=avkl7e42&t=1425005387",
    "http://files.podsnack.com/iframe/embed.html?hash=avhfdqwy&t=1425007489",
    "http://files.podsnack.com/iframe/embed.html?hash=a1p01wb6&t=1425007285"
];
var random = 0;
function randomPlaylist() {
    var temp = random;
    while (temp == random)
    temp = Math.floor(Math.random() * links.length);
    random = temp;
    document.getElementById("randomPlaylist").src = links[random];
};
randomPlaylist();
    
    document.getElementById("randbutton").onclick = function() {
        randomPlaylist();
    };

});

/* For more than two playlists, add url3, url4, etc... and put right amount of links in specified html pages (order of W has to be changed
too, so it can go in a cycle!!)  Make sure original link gets put last in setURL list so that the user sees every other playlist before 
repeating the original*/
var W = 0;
function setURL(url,url2){
    if (W == 0) {
        document.getElementById('iframe').src = url;
        W = 1;
    } else {
        document.getElementById('iframe').src = url2;
        W = 0;
    };
};





/* ===== Login screen page events ===== */
$$('.login-screen').find('.list-button').on('click', function () {
    var username = $$('.login-screen').find('input[name="username"]').val();
    var password = $$('.login-screen').find('input[name="password"]').val();
   /*
 myApp.alert('Username: ' + username + ', password: ' + password, function () {
        myApp.closeModal('.login-screen');
    });
*/        
	myApp.closeModal('.login-screen');	
});

/* ===== Color themes ===== */
var body_swag = $.cookie('body_swag');
if (body_swag) {
  $('body').addClass(body_swag);
};
var color_swag = $.cookie('color_swag');
if (color_swag) {
  $('body').addClass(color_swag);
}

var themes = 'theme-white theme-black theme-yellow theme-red theme-blue theme-green theme-pink theme-lightblue theme-orange theme-gray';
var layouts = 'layout-dark layout-white';    
    
$$('.toggle').find('.color-theme').click(function () {
    $$('body').removeClass(themes).addClass('theme-' + $$(this).attr('data-theme'));
    $.cookie('color_swag', 'theme-' + $$(this).attr('data-theme'));
});

$$('.toggle').find('.layout-theme').click(function () {
    $$('body').removeClass(layouts).addClass('layout-' + $$(this).attr('data-theme'));
    $.cookie('body_swag', 'layout-' + $$(this).attr('data-theme'));
});


/* =========== WOOPRA TRACKING CODE ============ */
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

  $(".version_a").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("a_mood_click");
    woopra.track("a_activity_click");
    woopra.track("a_genre_click");
  })

  $(".version_b").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("b_mood_click");
    woopra.track("b_activity_click");
    woopra.track("b_genre_click");
      console.log("swag");

  })

};






