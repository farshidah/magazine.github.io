//toggler rotate

$('#btn-toggle').on('click', function() {
  if ($('#toggle').hasClass('fa-navicon')) {
    $('#toggle')
      .css({ transform: 'rotate(' + 90 + 'deg)', transition: '.3s' })
      .removeClass('fa-navicon')
      .addClass('fa-remove');
  } else {
    $('#toggle')
      .css({ transform: 'rotate(' + 90 + 'deg)', transition: '.3s' })
      .removeClass('fa-remove')
      .addClass('fa-navicon')
      .css({ transform: '', transition: '' });
  }
});
//این کد میگه وقتی روی ایکون منوی فوتر کلیک کرد اونو بچرخونه و با ایکون X جایگزینش بکنه
$('#btn-toggle1').on('click', function() {
  if ($('#toggle1').hasClass('fa-navicon')) {
    $('#toggle1')
      .css({ transform: 'rotate(' + 90 + 'deg)', transition: '.3s' })
      .removeClass('fa-navicon')
      .addClass('fa-remove');
  } else {
    $('#toggle1')
      .css({ transform: 'rotate(' + 90 + 'deg)', transition: '.3s' })
      .removeClass('fa-remove')
      .addClass('fa-navicon')
      .css({ transform: '', transition: '' });
  }
});
//end toggler rotate


//rating fixer
$(document).ready(function() {
  var star_rating_width = $('.fill-ratings span').width();
  $('.star-ratings').width(star_rating_width);
});

var width = $('.store-img').width();
$('.store-img').each(function() {
  $(this).css('height', width);
});



function showSelected(str) {
  $('.tutorial').hide();
  $('.template').hide();
  $(str).show();
}
function showAll() {
  $('.tutorial').show();
  $('.template').show();
}


function showOrderBox() {
  $('#collapseOrder').removeClass('d-none');
}

function hideOrderBox() {
  $('#collapseOrder').addClass('d-none');
}
