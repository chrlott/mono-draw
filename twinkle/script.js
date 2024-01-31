
// letter
$(".show1").click(function () {
    $("#body").css("filter", "blur(5px)");
    var flashDiv = $(
      "<div class='G1'><img src='assets/word/letter-word.png'></img></div>"
    );
    $("body").append(flashDiv);
    var close = $(
      "<div style='bottom:10px;left:calc(50vw - 25px);width:50px;height:50px;position:fixed;user-select:none;display:block;cursor:pointer;color:MediumSeaGreen;font-size:2rem;text-align:center;line-height:46px;'>×</div>"
    );
    $("body").append(close);
    close.click(function () {
    //   flashDiv.css("animation", "clipCircleOut .5s");
      flashDiv.css("background-color", "rgba(0,0,0,0)");
      $(".fade").css("opacity", 0);
      setTimeout(() => {
        flashDiv.remove();
      }, 500);
      close.remove();
      $("#body").css("filter", "none");
    });
  });

// cat
$(".show2").click(function () {
    $("#body").css("filter", "blur(5px)");
    var flashDiv = $(
      "<div class='G1'><img src='assets/word/nyan-word.png' style='width:90%;'></img></div>"
    );
    $("body").append(flashDiv);
    var close = $(
      "<div style='bottom:10px;left:calc(50vw - 25px);width:50px;height:50px;position:fixed;user-select:none;display:block;cursor:pointer;color:MediumSeaGreen;font-size:2rem;text-align:center;line-height:46px;'>×</div>"
    );
    $("body").append(close);
    close.click(function () {
    //   flashDiv.css("animation", "clipCircleOut .5s");
      flashDiv.css("background-color", "rgba(0,0,0,0)");
      $(".fade").css("opacity", 0);
      setTimeout(() => {
        flashDiv.remove();
      }, 500);
      close.remove();
      $("#body").css("filter", "none");
    });
  });

  // flower
$(".show3").click(function () {
    $("#body").css("filter", "blur(5px)");
    var flashDiv = $(
      "<div class='G1'><img src='assets/word/flower-word.png' style='width:90%;'></img></div>"
    );
    $("body").append(flashDiv);
    var close = $(
      "<div style='bottom:10px;left:calc(50vw - 25px);width:50px;height:50px;position:fixed;user-select:none;display:block;cursor:pointer;color:MediumSeaGreen;font-size:2rem;text-align:center;line-height:46px;'>×</div>"
    );
    $("body").append(close);
    close.click(function () {
    //   flashDiv.css("animation", "clipCircleOut .5s");
      flashDiv.css("background-color", "rgba(0,0,0,0)");
      $(".fade").css("opacity", 0);
      setTimeout(() => {
        flashDiv.remove();
      }, 500);
      close.remove();
      $("#body").css("filter", "none");
    });
  });

    // computer
$(".show4").click(function () {
    $("#body").css("filter", "blur(5px)");
    var flashDiv = $(
      "<div class='G1'><img src='assets/word/computer-word.png' style='width:90%;'></img></div>"
    );
    $("body").append(flashDiv);
    var close = $(
      "<div style='bottom:10px;left:calc(50vw - 25px);width:50px;height:50px;position:fixed;user-select:none;display:block;cursor:pointer;color:MediumSeaGreen;font-size:2rem;text-align:center;line-height:46px;'>×</div>"
    );
    $("body").append(close);
    close.click(function () {
    //   flashDiv.css("animation", "clipCircleOut .5s");
      flashDiv.css("background-color", "rgba(0,0,0,0)");
      $(".fade").css("opacity", 0);
      setTimeout(() => {
        flashDiv.remove();
      }, 500);
      close.remove();
      $("#body").css("filter", "none");
    });
  });

      // love
$(".show5").click(function () {
    $("#body").css("filter", "blur(5px)");
    var flashDiv = $(
      "<div class='G1'><img src='assets/word/love-word.png' style='width:90%;'></img></div>"
    );
    $("body").append(flashDiv);
    var close = $(
      "<div style='bottom:10px;left:calc(50vw - 25px);width:50px;height:50px;position:fixed;user-select:none;display:block;cursor:pointer;color:MediumSeaGreen;font-size:2rem;text-align:center;line-height:46px;'>×</div>"
    );
    $("body").append(close);
    close.click(function () {
    //   flashDiv.css("animation", "clipCircleOut .5s");
      flashDiv.css("background-color", "rgba(0,0,0,0)");
      $(".fade").css("opacity", 0);
      setTimeout(() => {
        flashDiv.remove();
      }, 500);
      close.remove();
      $("#body").css("filter", "none");
    });
  });

        // cat1
$(".show6").click(function () {
    $("#body").css("filter", "blur(5px)");
    var flashDiv = $(
      "<div class='G1'><img src='assets/word/cat1-word.png' style='width:90%;'></img></div>"
    );
    $("body").append(flashDiv);
    var close = $(
      "<div style='bottom:10px;left:calc(50vw - 25px);width:50px;height:50px;position:fixed;user-select:none;display:block;cursor:pointer;color:MediumSeaGreen;font-size:2rem;text-align:center;line-height:46px;'>×</div>"
    );
    $("body").append(close);
    close.click(function () {
    //   flashDiv.css("animation", "clipCircleOut .5s");
      flashDiv.css("background-color", "rgba(0,0,0,0)");
      $(".fade").css("opacity", 0);
      setTimeout(() => {
        flashDiv.remove();
      }, 500);
      close.remove();
      $("#body").css("filter", "none");
    });
  });

// cat2
$(".show7").click(function () {
    $("#body").css("filter", "blur(5px)");
    var flashDiv = $(
        "<div class='G1'><img src='assets/word/cat2.png' style='width:90%;'></img></div>"
    );
    $("body").append(flashDiv);
    var close = $(
        "<div style='bottom:10px;left:calc(50vw - 25px);width:50px;height:50px;position:fixed;user-select:none;display:block;cursor:pointer;color:MediumSeaGreen;font-size:2rem;text-align:center;line-height:46px;'>×</div>"
    );
    $("body").append(close);
    close.click(function () {
    //   flashDiv.css("animation", "clipCircleOut .5s");
        flashDiv.css("background-color", "rgba(0,0,0,0)");
        $(".fade").css("opacity", 0);
        setTimeout(() => {
        flashDiv.remove();
        }, 500);
        close.remove();
        $("#body").css("filter", "none");
    });
    });

// cat3
$(".show8").click(function () {
    $("#body").css("filter", "blur(5px)");
    var flashDiv = $(
        "<div class='G1'><img src='assets/word/cat3.png' style='width:90%;'></img></div>"
    );
    $("body").append(flashDiv);
    var close = $(
        "<div style='bottom:10px;left:calc(50vw - 25px);width:50px;height:50px;position:fixed;user-select:none;display:block;cursor:pointer;color:MediumSeaGreen;font-size:2rem;text-align:center;line-height:46px;'>×</div>"
    );
    $("body").append(close);
    close.click(function () {
    //   flashDiv.css("animation", "clipCircleOut .5s");
        flashDiv.css("background-color", "rgba(0,0,0,0)");
        $(".fade").css("opacity", 0);
        setTimeout(() => {
        flashDiv.remove();
        }, 500);
        close.remove();
        $("#body").css("filter", "none");
    });
    });