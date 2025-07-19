/* START of dblclick.js
 * /apps/gnb/components/content/artbank/clientlibs/js/dblclick.js
 */
$('table tbody tr  td').on('dblclick', function () {
  $('#artbank_modal').modal('show');
  $('#modal_title').text('Modal Title');
  var artist = '<%=artist_key%> : ' + $(this).closest('tr').children()[0].textContent;
  var title = '<%=title_key%> : ' + $(this).closest('tr').children()[2].textContent;
  var category = 'Category : ' + $(this).closest('tr').children()[3].textContent;
  var created = 'Year Created : ' + $(this).closest('tr').children()[4].textContent;
  var purchased = 'Year Purchased : ' + $(this).closest('tr').children()[5].textContent;
  var art_image =
    '/content/dam/gnb/Departments/thc-tpc/images/artbank_search/' +
    $(this).closest('tr').children()[1].textContent +
    '.jpg/_jcr_content/renditions/cq5dam.web.600.400.jpeg';

  $('#artist').text(artist);
  $('#title').text(title);
  $('#category').text(category);
  $('#created').text(created);
  $('#purchased').text(purchased);
  //$("#art_image").src(art_image);
  $('#art_image').attr('src', art_image);
});
/* END of dblclick.js*/
