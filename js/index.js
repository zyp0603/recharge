
$(function(){

    document.body.addEventListener('touchstar',function(){});

    $('.btn').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        if($(this).hasClass('last')){//选择最后一个
            $(this).children('input').focus();//下面子元素是input的输入框自动聚焦
        }
    });

    //活动规则弹窗
    $('.huodong').click(function(){
        $('.tc1').removeClass('d-none');
    });

    $('.know').click(function(){
        $('.tc1').addClass('d-none');
    });

    //支付
    $('.btn_pay').click(function(){
        var tel1 = $('.tel').val();
        var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

        if(tel1 === ''){
            return alert('请输入手机号');
        }

        if(reg.test(tel1)){
            $('.tc2').removeClass('d-none');
        }
    });

    //取消
    $('.judge_cancel').click(function(){
        $('.tc2').addClass('d-none');
    });

    //确定
    $('.judge_yes').click(function(){

        var tel1 = $('.tel').val();
        var tel2 = $('.addtel').val();

        if(tel2 === tel1){
            $('.tc2').addClass('d-none');
            $('.tc3').removeClass('d-none');
        }else{
            window.location.href='index3.html'
        }
    });

    //一致
    $('.same_yes').click(function(){
        window.location.href='index2.html'
    });

    //取消
    $('.same_cancel').click(function(){
        $('.tc3').addClass('d-none');
    });




























});







