$(document).ready(function(){
  //When Get Quote button in clicked, retrieve random quote
  //from api and update html elements
  var quote = "";
  var title = "";
  
  $.ajaxSetup({cache:false});
  $(".source").html("");
  
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json){
    console.log(JSON.stringify(json));
    $(".put-quote-here").html(json[0].content);
    $(".title").html("- " + json[0].title);
    if(json[0].hasOwnProperty("custom_meta")){
      $(".source").html(json[0].custom_meta["Source"]);
    }
    quote = $(".put-quote-here").text();
    title= $(".title").text();
  });
  
  $(".get-quote").on("click", function(){
    //clear cache for new random quote and clear
    //source element
    $.ajaxSetup({cache:false});
    $(".source").html("");
    
    //retrieve json and update elements
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",           function(json) {
      console.log(JSON.stringify(json));
      $(".put-quote-here").html(json[0].content);
      $(".title").html("- " + json[0].title);
      if(json[0].hasOwnProperty("custom_meta")){
        $(".source").html(json[0].custom_meta["Source"]);
      }
     quote = $(".put-quote-here").text();
     title = $(".title").text();
    });
  });
  
  //When twitter button is clicked, open compose tweet window with the
  //quote added to the text box
  $(".twitter-share").on("click", function(){
    console.log(quote);
    if(quote.length <= 140){
      window.open("https://twitter.com/intent/tweet?text=" + quote + " - " + title);
      console.log("short enough: " + quote.length + " characters");
    } else {
      window.open("https://twitter.com/intent/tweet?text=" + quote.slice(0, (133 - title.length)) + "... - " + title);
      console.log("too long: " + quote.length + " characters");
    }
    
  });
});