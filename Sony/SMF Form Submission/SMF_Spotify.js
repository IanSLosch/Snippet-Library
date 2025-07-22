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
    $('.thank-you').fadeIn();
  }
});