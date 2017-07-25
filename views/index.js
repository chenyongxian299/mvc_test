$(document).ready(function(){
    setTimeout(function () {
        $('.full-div').css({
            backgroundColor: '#ffffff'
        });
    },1000);
});
function views_index_get(){
    $.ajax({
        url: 'index/get.do',
        type: 'POST',
        data: {
            id : $('[name="views_index_ipt_id"]').val()
        },
        dataType: 'JSON',
        success:function(res){
            console.log(res);
        }
    })
}