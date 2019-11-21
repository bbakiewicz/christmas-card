function createSnowflake() {
  
    var snowflake = document.createElement("div");
    snowflake.className = "snow-flake";
    var snow = document.querySelector(".snow").appendChild(snowflake);
  
    function getLeftMargin(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    snowflake.style.left = getLeftMargin(5, 645) + "px";
    snowflake.style.top = "0";
  }
  
  var snowFall = setInterval(createSnowflake, 500);
  setTimeout(function() {clearInterval(snowFall)}, 10000);