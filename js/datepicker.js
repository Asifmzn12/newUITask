$(document).ready(function () {
   $('#arrival ,#departure').datepicker({
      dateFormat: 'yy-mm-dd'
   });

   $('.calendar').on('click', function () {
      $('#arrival').focus();
   });
});
