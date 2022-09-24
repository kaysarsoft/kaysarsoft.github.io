//document.oncontextmenu = function(){return false;};
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
$(document).ready(function(){
    //选项卡切换
    $('.tab').live('click',function () {
        $(this).addClass('pressed').siblings().removeClass('pressed');
        $($(this).attr('tab')).show().siblings().hide();
    });
    //密码保护
    $('.pass_box input[type=button]').live('click',function () {
        var box = $(this).parents('.pass_box');
        if ( box.data('pass') == box.find('input[type=text]').val()){
            box.find('.pass_content').show();
            box.find('.pass_input').hide();
        }else{
            alert('密码错误!');
        }
    });
    //响应回车
    $('.pass_box input[type=text]').live('keypress',function(event){
        if(event.keyCode == 13)
        {
            var box = $(this).parents('.pass_box');
            box.find('input[type=button]').click();
        }
    });

    //生成页面
    var tab_head_html = '<div class="tab_head">';
    var tab_main_html = '<div class="tab_main">';
    //输入框
    $.each(pay_list, function (index, obj) {
        if (obj.qr){
            obj.qr = '<img class="qrcode" src="' + obj.qr + '" />';
        }
        if (obj.text){
            obj.text = '<h2>' + obj.text + '</h2>';
        }
        head_html = '<span id="t_' + obj.type + '" tab="#tab_' + obj.type + '" class="tab">' + obj.name + '</span>';
        main_html = obj.text + obj.qr;
        if (obj.pass){
            main_html = "<div data-pass='"+ obj.pass +"' class='pass_box'><div class='pass_input'><input type='text' placeholder='请输入访问密码' class='input' /><input type='button' class='btn' value='提交' /></div><div class='pass_content'>" + main_html + "</div></div>"
        }
        tab_head_html = tab_head_html + head_html;
        tab_main_html = tab_main_html + '<div id="tab_' + obj.type + '" class="hidden">' + main_html + '</div>';
    });
    tab_head_html += '</div>';
    tab_main_html += '</div>';
    $('#tab').html(tab_head_html + tab_main_html);

    //默认选中的
    var pay_type = getUrlParam('type') || pay_list[0].type;
    $('#t_' + pay_type).click();
    //传递了密码
    pass = getUrlParam('pass');
    if(pass){
        $('#tab_' + pay_type).find('input[type=text]').val(pass);
        $('#tab_' + pay_type).find('input[type=button]').click();
    }

});