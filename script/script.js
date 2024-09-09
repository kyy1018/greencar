$(document).ready(function(){

    var i = 0;
    $('#m-wrap').click(function(){
        i++;
        if(i>2){i=0;}
        $(this).animate({
            left: -1920 * i
        })
    });

    setInterval(function(){
        $('#m-wrap').trigger('click');
    },3000);
    // 메인이미지 자동 루프

    $('.pager').each(function(index){
        $(this).attr('pager-index',index);
    }).click(function(){
        var index = $(this).attr('pager-index');
        $('.pager[pager-index=' + index + ']').addClass('clicked_pager');
        $('.pager[pager-index!=' + index + ']').removeClass('clicked_pager');

        $('#m-wrap').animate({
            left: -1920 * i
        });

/*         $('.pager').removeClass('active');
        $('.pager').eq(i).addClass('active'); */
    });
    // 메인이미지 pager 버튼 색상 코딩




    $('#s-banner li').hover(function() { 
        $('.overinfo', this).slideDown(200); 
        }, function() { 
        $('.overinfo', this).slideUp(200);
    });
    // 배너 hover

    $(window).scroll(function(){
        sct = $(window).scrollTop();
        console.log(sct);

        if(sct>1300){
            $('#number>img').animate({
                top: 0,
                opacity: 1
            },200, function(){
                $('.num-item').animate({
                    opacity: 1
                });
            });
        }
        if(sct>1900){
            $('.mv-banner:nth-child(1)').animate({
                top: 0,
                opacity: 1
            }, 200, function(){
                $('.mv-banner:nth-child(2)').animate({
                    top: 0,
                    opacity: 1 
                })
            });
        }
    });
    // 배너 올라오기 효과

    $('.nums').each(function(){
        const $this = $(this),
            countTo =  $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },{
                duration: 1700,
                easing: 'linear',
                step: function(){
                    $this.text(Math.floor(this.countNum));
                },
                complete: function(){
                    $this.text(this.countNum);
                }
            },200);
    });
    // 숫자 카운트 효과


    var j = 0;
    $('#mark').click(function(){
        j++;
        if(j>5){j=0;}
        $(this).animate({
            left: -200 * j
        })
    });
    
    setInterval(function(){
        $('#mark').trigger('click');
    },3000);
    // 맨 밑 배너 제어

    $('#topBox').click(function(){
        $('html').animate({
            scrollTop : 0
        });
    });
});