function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px" ;
  
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}



$(document).ready(function () {
  $(".showcaps").click(function showcaps() {
    $("#capsbtn").show();
    $("#corebtn").hide();
    $("#shipbtn").hide();
  })
});
$(document).ready(function () {
  $(".showcores").click(function showcores() {
    $("#corebtn").show();
    $("#capsbtn").hide();
    $("#shipbtn").hide();
   
  })
});
$(document).ready(function () {
  $(".showships").click(function showships() {
    $("#shipbtn").show();
    $("#capsbtn").hide();
    $("#corebtn").hide();

  })
});


$(document).ready(function () {
  $("#caps").click(function () {
    $.ajax({
      url: "https://api.spacexdata.com/v3/capsules",
      type: "get",
      success: function (response) {
        console.log("response1", response);

        let str = "";
        response.map(item => {

          str += `<div class="card">
                            <h2>Serial: ${item.capsule_serial}</h2>
                            <button class="detailsbtn" id="capsule-details_${item.capsule_serial}" data-id="${item.capsule_serial}">Details</button>
                           </div>`;
        });

        $("#capsule-data").html(str);

      }
    })

  })
});

$(document).on("click", "button[id^=capsule-details_]", function () {
  let id = $(this).attr("data-id");
  $.ajax({
    url: "https://api.spacexdata.com/v3/capsules/" + id,
    type: "get",
    success: function (response) {

      console.log("response2", response);
      $(".capsule_serial").text(response.capsule_serial);
      $(".status").text(response.status);
      $(".capsule_id").text(response.capsule_id);
      $(".details").text(response.details);
      $(".type").text(response.type);
      $("#capsule-details").show();
      $("#ship-details").hide();
    }


  });
});




$(document).ready(function () {
  $("#upcoming").click(function () {
    $.ajax({
      url: "https://api.spacexdata.com/v3/capsules/upcoming",
      type: "get",
      success: function (response) {
        console.log("response3", response);

        let str = "";
        response.map(item => {

          str += `<div class="card">
                            <h2>Serial: ${item.capsule_serial}</h2>
                            <button class="detailsbtn" id="capsule-details_${item.capsule_serial}" data-id="${item.capsule_serial}">Details</button>
                           </div>`;
        });

        $("#capsule-data").html(str);

      }
    })

  })
});
$(document).ready(function () {
  $("#past").click(function () {
    $.ajax({
      url: "https://api.spacexdata.com/v3/capsules/past",
      type: "get",
      success: function (response) {
        console.log("response3", response);

        let str = "";
        response.map(item => {

          str += `<div class="card">
                            <h2>Serial: ${item.capsule_serial}</h2>
                            <button class="detailsbtn" id="capsule-details_${item.capsule_serial}" data-id="${item.capsule_serial}">Details</button>
                           </div>`;
        });

        $("#capsule-data").html(str);

      }
    })

  })
});
//cores Jquery start
$(document).ready(function () {
  $("#core").click(function () {
    $.ajax({
      url: "https://api.spacexdata.com/v3/cores",
      type: "get",
      success: function (response) {
        console.log("responseCores", response);

        let str = "";
        response.map(item => {

          str += `<div class="card">
                         <h2>Serial: ${item.core_serial}</h2>
                         <button class="detailsbtn" id="capsule-details_${item.core_serial}" data-id="${item.core_serial}">Details</button>
                        </div>`;
        });

        $("#capsule-data").html(str);

      }
    })

  })
});

$(document).on("click", "button[id^=capsule-details_]", function () {
  let id = $(this).attr("data-id");
  $.ajax({
    url: "https://api.spacexdata.com/v3/cores/" + id,
    type: "get",
    success: function (response) {

      console.log("responseCores1", response);
      $(".capsule_serial").text(response.core_serial);
      $(".status").text(response.status);
      $(".capsule_id").text(response.water_landing);
      $(".details").text(response.details);
      $(".type").text(response.missions.flight);
      $("#capsule-details").show();
      $("#ship-details").hide();
    }


  });
});
$(document).ready(function () {
  $("#upcore").click(function () {
    $.ajax({
      url: "https://api.spacexdata.com/v3/cores/upcoming",
      type: "get",
      success: function (response) {
        console.log("responsecoreup", response);

        let str = "";
        response.map(item => {

          str += `<div class="card">
                            <h2>Serial: ${item.core_serial}</h2>
                            <button class="detailsbtn" id="capsule-details_${item.core_serial}" data-id="${item.core_serial}">Details</button>
                           </div>`;
        });

        $("#capsule-data").html(str);

      }
    })

  })
});
$(document).ready(function () {
  $("#pastcore").click(function () {
    $.ajax({
      url: "https://api.spacexdata.com/v3/cores/past",
      type: "get",
      success: function (response) {
        console.log("responsecorepast", response);

        let str = "";
        response.map(item => {

          str += `<div class="card">
                            <h2>Serial: ${item.core_serial}</h2>
                            <button class="detailsbtn" id="capsule-details_${item.core_serial}" data-id="${item.core_serial}">Details</button>
                           </div>`;
        });

        $("#capsule-data").html(str);

      }
    })

  })
});

//Ships Div Start Here
$(document).ready(function () {
  $("#allship").click(function () {
    $.ajax({
      url: "https://api.spacexdata.com/v3/ships",
      type: "get",
      success: function (response) {
        console.log("responseshipsall", response);

        let str = "";
        response.map(item => {

          str += `<div class="shipcard">
                            <img class="image-path"  src="${item.image} " onerror="if (this.src != './assets/img/error.jpg') this.src = './assets/img/error.jpg';">
                            <h2>Serial: ${item.ship_id}</h2>
                            <button class="detailsbtn" id="ship-details_${item.ship_id}" data-id="${item.ship_id}">Details</button>
                           </div>`;
        });

        $("#capsule-data").html(str);

      }
    })

  })
});


$(document).on("click", "button[id^=ship-details_]", function () {
  let id = $(this).attr("data-id");
  $.ajax({
    url: "https://api.spacexdata.com/v3/ships/" + id,
    type: "get",
    success: function (response) {

      console.log("response2", response);
      $(".ship_id").text(response.ship_id);
      $(".ship_name").text(response.ship_name);
      $(".status").text(response.status);
      $(".home_port").text(response.home_port);
      $(".ship_type").text(response.ship_type);
      $("#ship-details").show();
      $("#capsule-details").hide();
    }


  });
});