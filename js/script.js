let productCategory;
$(".ui-category li").click(function (param) {
  if ($(this).data('list') == "more") {
    dataThis = $(this).data('list')
    productCategory = dataThis
    $(".ui-category").addClass('d-none')
    $(".ui-product").removeClass('d-none')
      rute = $(".ui-rute > *")
      $(rute[1]).addClass('active-under')
      $(rute[2]).addClass('active-item')
  }
  if ($(this).data('list') !== undefined && $(this).data('list') != "more" ) {
    dataThis = $(this).data('list')
    subseThis = $("ul[data-parent-list='" + dataThis + "']")
    if (subseThis.length != 0) {
      productCategory = dataThis
      $(this).parent().hide()
      subseThis.removeClass('d-none')
    } else {
      productCategory = dataThis
      $(".ui-category").addClass('d-none')
      $(".ui-product").removeClass('d-none')
      rute = $(".ui-rute > *")
      $(rute[1]).addClass('active-under')
      $(rute[2]).addClass('active-item')
    }
  }
})

$("#productBack").click(function () {
      $(".ui-category").removeClass('d-none')
      $(".ui-product").addClass('d-none')
      rute = $(".ui-rute > *")
      $(rute[1]).removeClass('active-under')
      $(rute[2]).removeClass('active-item')
})

function onInputChange(event){
  $('.ui-product-images').html(" ")
  $(".ui-product-remove-image").append( `<button type="button" class="btn btn-danger d-block w-100">حذف عکس ها</button>`)
  files = event.target.files
  var reader = [];
  for (let index = 0; index < files.length; index++) {
      reader[index] = new FileReader();
      reader[index].onload = function(){
        $('.ui-product-images').append(`
        <div class="ui-product-image">
          <a href="`+reader[index].result+`" target="_blank"> <img src="`+reader[index].result+`" alt=""></a>
        </div>
        `)
      }
      reader[index].readAsDataURL(files[index]);
    }
}

$(".ui-product-remove-image").on('click', 'button', function () {
  $('.ui-product-images').html(" ")
  $('.ui-product-remove-image').html(" ")
  $("#productImage").val('')
})

$("#productNext").click(function () {
  if ($("#productHeader").val() == "") {
    alert("لطفا نام محصول مورد نظر خود را وارد کنید")
    $("#productHeader").focus();
  } else {
      if ($("#productImage").val() == "") {
        alert("لطفا عکس محصول مورد نظر خود را وارد کنید")
        // $("#productImage").focus();
        $('#productImage').trigger('click')
      } else {
          $(".ui-user").removeClass('d-none')
          $(".ui-product").addClass('d-none')
          rute = $(".ui-rute > *")
          $(rute[3]).addClass('active-under')
          $(rute[4]).addClass('active-item')
      }
  }
})

$("#userBack").click(function () {
  $(".ui-user").addClass('d-none')
  $(".ui-product").removeClass('d-none')
  rute = $(".ui-rute > *")
  $(rute[3]).removeClass('active-under')
  $(rute[4]).removeClass('active-item')
})

$("#userNext").click(function () {
  if ($("#userName").val() == "") {
    alert("لطفا نام و نام خانوادگی خود را وارد کنید.")
    $("#userName").focus()
  } else {
    if ($("#userNumber").val() == "") {
      alert("لطفا شماره تلفن خود را وارد کنید.")
      $("#userNumber").focus()
    } else {
      $(".ui-user").addClass('d-none')
      $(".ui-completed").removeClass('d-none')
      rute = $(".ui-rute > *")
      $(rute[5]).addClass('active-under')
      $(rute[6]).addClass('active-item')
    }
  }
})