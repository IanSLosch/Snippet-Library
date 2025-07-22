
  // Apple popup
  $('#apple-btn').on('click', function (e) {
    e.preventDefault();
    $.magnificPopup.open({
      items: {
        src: '#apple-popup',
        type: 'inline'
      }
    });
    var sm = new SMEAppleMusic({

      // REPLACE THIS
      ae: {
        ae: "db1275a443487a733c0a9127248d15de1f9e914d0e58fb57d1e3dbf16b7d6167",
        brand_id: "3448125",
        segment_id: "1991789",
        activities: '{"actions":{"presave":120882},"mailing_list_optins":{"a0S0800000tmzIGEAY":120883}}'
      },
      am: {
        dev_token: "",
        save_mode: "library",
        custom_playlist_name: "",
        new_apple_presave: true,
        resources: {
          playlists: [],
          albums: []
        }
      },
      sf: {
        form: "337318",
        default_mailing_list: ""
      },
      smf: {
        campaign_id: "337318",
        campaign_key: "d8adf06284576022124dca830845fa97"
      }
    });

    //apple music form
    document.getElementById("apple_music_form").addEventListener("submit", function (e) {
      e.preventDefault();
      // Grab the email address value.
      var email = document.getElementById("apple_music_email_address").value;
      // Pass the email address and opt in status
      // This can be true or false depending on if the user is forced into the list, or chooses via a checkbox or similar.
      sm.doActions(email, false, ["a0S0800000tmzIGEAY"]).then(function (res) {
        // REPLACE THIS ^

        $.magnificPopup.open({
          items: {
            src: '#thanks',
            type: 'inline'
          }
        });
      }).catch(function (err) {
        console.log(err);
      });
    });
  });

  //Spotify / Deezer
  let SMEPreSave = {
    state: null,
    spotify_user: null,
    url_vars: [],
    getURLVars: function (callback, form_id) {
      let hash;
      let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for (let i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        this.url_vars.push(hash[0]);
        this.url_vars[hash[0]] = hash[1];
      }
      this.state = 'state' in this.url_vars ? this.url_vars['state'] : null;
      this.ae_member_id = 'ae_member_id' in this.url_vars ? this.url_vars['ae_member_id'] : null;
      this.spotify_user = 'spotify_user' in this.url_vars ? this.url_vars['spotify_user'] : null;
      this.deezer_user = 'deezer_user' in this.url_vars ? this.url_vars['deezer_user'] : null;
      this.message = 'message' in this.url_vars ? this.url_vars['message'] : null;
      if (typeof callback === 'function') {
        callback(this.state, this.ae_member_id, this.spotify_user, this.deezer_user, this.message);
      }
    }
  };
  /* String state
  *  The status of the pre-save.
  *  Int ae_member_id
  *  The Appreciation Engine member ID. This can be passed to the forms processor.
  *  String spotify_user
  *  An encrypted string identifying the Spotify user. Can be passed to the pre-save forms processor.
  *  String deezery_user
  *  An encrypted string identifying the Deezer user. Can be passed to the pre-save forms processor.
  */
  SMEPreSave.getURLVars(function (state, ae_member_id, spotify_user, deezer_user, message) {
    // Check the state of the pre-save. If it was successful, the state will either be success or thank-you.
    if (state === 'success' || state === 'thank-you') {
      $.magnificPopup.open({
        items: {
          src: '#thanks',
          type: 'inline'
        }
      });
    }
  });
