// Blocks Iframes EU Compliance (germany)
coreFunctions.init({
  copyright: ['copyright', 'de'], //Container, Language
  enablethirdpartycleaner: true, // enable or disable the Iframe blocker
  tpcDomainsToBlock: [ // list of domains you want to block for this website
    "youtube.com",
    "youtube-nocookie.com",
    "widget.bandsintown.com",
    "www.eventim.de",
    "eventim.de",
    "forms.sonymusicfans.com",
    "www.tiktok.com",
    "tiktok.com",
    "connect.facebook.net",
    "facebook.net",
    "embed.music.apple.com",
    "maps.googleapis.com"
  ],
  thirdpartycleaner: { // some basic styling
    backgroundColor: "rgba(0,0,0,0.8)", // background color of the disclaimer
    textColor: "white", // text color of the disclaimer
    buttonBackgroundColor: "white", // background color of the allow button
    buttonTextColor: "black" // text color of the allow button
  }

})