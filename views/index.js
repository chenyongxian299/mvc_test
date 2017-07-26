$(document).ready(function(){
    setTimeout(function () {
        $('.full-div').css({
            backgroundColor: '#ffffff'
        });
    },1000);
});
function views_index_get(){
    $.ajax({
        url: '/test/test/get.do',
        type: 'POST',
        dataType: 'JSON',
        success: function(res){
            console.log(res);
        }
    })
}
function views_index_add(){
    $.ajax({
        url: '/test/test/add.do',
        type: 'POST',
        data: {
            id : $('[name="views_index_ipt_test_name"]').val()
        },
        dataType: 'JSON',
        success:function(res){
            console.log(res);
        }
    })
}