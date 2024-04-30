window.onload = function () {
  document.querySelector('#github').onclick = MyFunction;
  document.querySelector('#lkdn').onclick = MyFunction;
  document.querySelector('#learn').onclick = MyFunction;

  //scrolling to  a particular section of the window
  document.querySelectorAll('.navigation-list li').forEach(function (listItem) {
    listItem.addEventListener('click', function () {
      document.querySelector('.navigation-pane').classList.add('show');
      let topPosition =
        document.querySelector('#' + this.getAttribute('data-id')).offsetTop -
        60;
      window.scrollTo({
        top: topPosition,
        left: 0,
        behavior: 'smooth',
      });
      // Hide the navigation menu after click
      document.querySelector('.navigation-pane').style.dipslay = 'none';
    });
  });
};

function MyFunction() {
  alert('Work In Progress ...');
}
