//JS to populate Helpful Contacts Box
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
//Algorithim for interpreting scores from the games
$("#calc-alz").click(function() {
//Threshold for Alzheimer's Disease based on MoCA grading scale (adjusted)
  var dScore = 6;
//Threshold for Alzheimer's Disease based on research regarding years (disease runs its course in a maximum of 20 years)
  var dYears = 20;
  var score = $("#score").val();
  var years = $("#years").val();
//Prescription medication for memory issues question
  var medication = $("#medication").is(":checked");
  
  if (score < dScore && years < dYears) {
      alert("CALL NEUROLOGIST - Potential for Cognitive Impairment");
  } else if (score < dScore) {
      if (medication) {
          alert("CALL NEUROLOGIST - Potential for Cognitive Impairment");
      } else {
          alert("MONITOR - Visit primary care physician regularly");
      }
  } else {
      alert("MONITOR - Visit primary care physician regularly");
  }
  
});