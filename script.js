$('.filters ul li').each(function(){
    $(this).on("click", function(){
        if ($(this).hasClass('milk')) {
            $(".fl-ser").removeClass('active');
            $(".fl-ser.milk").addClass('active');
        }else if ($(this).hasClass('cheese')) {
            $(".fl-ser").removeClass('active');
            $(".fl-ser.cheese").addClass('active');
        }else if ($(this).hasClass('syrok')) {
            $(".fl-ser").removeClass('active');
            $(".fl-ser.syrok").addClass('active');
        }else if ($(this).hasClass('cto')) {
            $(".fl-ser").removeClass('active');
            $(".fl-ser.cto").addClass('active');
        }
        $('.filters').removeClass('active'); 
        $(this).addClass('active');
    });
});
$('#header ul li').each(function(){
    $(this).on("click", function(){
        if ($(this).hasClass('product')) {
            $(".list").removeClass('activel');
            $(".list.product").addClass('activel');
            $(".w-product").addClass('w-active');
            $(".w-zakaz").removeClass('w-active');
            $(".w-registration").removeClass('w-active');
            $(".w-author").removeClass('w-active');
        }else if ($(this).hasClass('zakaz')) {
            $(".list").removeClass('activel');
            $(".list.zakaz").addClass('activel');       
            $(".w-zakaz").addClass('w-active');
            $(".w-product").removeClass('w-active');       
            $(".w-registration").removeClass('w-active');       
            $(".w-author").removeClass('w-active');       
        }else if ($(this).hasClass('registr')) {
            $(".list").removeClass('activel');
            $(".list.registr").addClass('activel');
            $(".w-registration").addClass('w-active');
            $(".w-product").removeClass('w-active');       
            $(".w-zakaz").removeClass('w-active');  
            $(".w-author").removeClass('w-active');  
        }else if ($(this).hasClass('author')) {
            $(".list").removeClass('activel');
            $(".list.author").addClass('activel');
            $(".w-author").addClass('w-active');
            $(".w-product").removeClass('w-active');       
            $(".w-zakaz").removeClass('w-active');  
            $(".w-registration").removeClass('w-active');
        }
        $('#header').removeClass('activle'); 
        $(this).addClass('activel');
    });
});


