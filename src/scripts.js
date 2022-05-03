<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>

// COOKIES
// When a user submits the profile creation form, set a cookie
$('#submit-input').click(function () {
  // Set profile info from inputs
  var userName = $('#name-input').val();
  var phone = $('#phone-input').val();
  // Create profile cookie
  Cookies.set('userName', userName);
  Cookies.set('phone', phone);
  // Reload page so that cookie can take effect
  location.reload();
});
// If there is a cookie, show welcome message
var userName = Cookies.get('userName');
if (userName) {
  // Hide new user input form
  $('#new-user-input').hide();
  // Show welcome message
  $('#welcome-text').text('Welcome, ' + userName);
}