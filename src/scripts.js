//JS to populate Helpful Contacts Table
var information = [{'Name': 'John Doe', 'Position': 'Technology Specialist', 'Phone Number': '000-111-2222', 'Area of Expertise': 'Website, Internet connection, Navitgation'},
                    {'Name': 'Jane Doe', 'Position': 'Registered Nurse', 'Phone Number': '333-444-5555', 'Area of Expertise': 'Medications, Appointment scheduling, Health questions'},
                    {'Name': 'James Doe', 'Position': 'Insurance Representative', 'Phone Number': '600-777-8888', 'Area of Expertise': 'Medicare, Medicaid, Billing'},
                    ];
information.forEach(function (item, index) {
  $('#data-table tr:last').after('<tr><td>' + item['Name'] + '</td><td>' + item['Position'] + '</td><td>' + item['Phone Number'] + '</td><td>' + item['Area of Expertise'] + '</td></tr>');
    });

//JS for filtering function in Helpful Contacts Table
$(document).ready(function(){
  $("#Input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#data-table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});