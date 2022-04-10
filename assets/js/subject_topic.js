var mod_url=window.location.protocol+'//'+window.location.hostname;if(window.location.hostname=='localhost')
{mod_url='http://localhost/fvl';}
$('.suc_fav').hide();$('.err_fav').hide();$('.suc_com').hide();$('.err_com').hide();$(document).on('click','.add_compare',function(){var c_id=$(this).data('id');var count_compare=parseInt($('.count_compare').html());var same=$(this);$.ajax({type:"POST",url:mod_url+'/ajaxFunctions.php',data:"function=add_compare&c_id="+c_id,success:function(data){if(data!="success")
{alert(data);}
else
{$('.msg_badge').hide();same.siblings('.suc_com').show();same.addClass('remove_compare');same.removeClass('add_compare');if(count_compare==0)
{$('#count_compare').show();$('.fixed-bottom').show();}
$('.count_compare').html(count_compare+1);}}});});$(document).on('click','.remove_compare',function(){var c_id=$(this).data('id');var count_compare=parseInt($('.count_compare').html());var same=$(this);$.ajax({type:"POST",url:mod_url+'/ajaxFunctions.php',data:"function=remove_compare&c_id="+c_id,success:function(data){if(data!="success")
{alert(data);}
else
{$('.msg_badge').hide();same.siblings('.err_com').show();same.addClass('add_compare');same.removeClass('remove_compare');if(count_compare==1)
{$('#count_compare').hide();$('.fixed-bottom').hide();}
$('.count_compare').html(count_compare-1);}}});});$(document).on('click','.add_fav',function(){var c_id=$(this).data('id');var count_fav=parseInt($('.count_fav').html());var same=$(this);$.ajax({type:"POST",url:mod_url+'/ajaxFunctions.php',data:"function=add_fav&c_id="+c_id,success:function(data){if(data!="success")
{alert(data);}
else
{$('.msg_badge').hide();same.siblings('.suc_fav').show();same.addClass('remove_fav');same.removeClass('add_fav');if(count_fav==0)
{$('#count_fav').show();}
$('.count_fav').html(count_fav+1);}}});});$(document).on('click','.remove_fav',function(){var c_id=$(this).data('id');var count_fav=parseInt($('.count_fav').html());var same=$(this);$.ajax({type:"POST",url:mod_url+'/ajaxFunctions.php',data:"function=remove_fav&c_id="+c_id,success:function(data){if(data!="success")
{alert(data);}
else
{$('.msg_badge').hide();same.siblings('.err_fav').show();same.addClass('add_fav');same.removeClass('remove_fav');if(count_fav==1)
{$('#count_fav').hide();}
$('.count_fav').html(count_fav-1);}}});});