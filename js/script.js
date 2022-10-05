
$(() => {
  var scrollLink = $(".nav-link-scroll");

  //smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $("html").animate(
      {
        scrollTop: $(this.hash).offset().top,
        
      },
      2000
    );
  });
});
