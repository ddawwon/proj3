$(function(){

    //sec3 탭
    
    $('.tabSet').each(function(){
        var anchor_all = $(this).find('.tabs a'); //모든 .tabs a 
        var panels_all = $(this).find('.panel'); //모든 .panel(dis)
        var anchor_active = $(this).find('.tabs a.active'); //모든 a.active만 검색
        var panels_active = anchor_active.attr('href'); // a.active의 href 값을 기억함 = 패널 id

        $(panels_active).show(); //초기화면 열림

        anchor_all.each(function(){ //.tabs a
            var panels_active = $(this).attr('href');

            $(this).click(function(){ //.tabs a
                panels_all.hide();
                anchor_all.removeClass('active'); //전부다 없앰
                $(this).addClass('active');
                $(panels_active).show();

            })
        })
    })


    //네비버튼
    //slider
    

    //네비 엑스버튼
    var sta = 1 //상태1번: 팝업창이 안 열여있는 상태

$('#nav_pop_btn').click(function(){
  //  $(this).toggleClass('on');//단순 디자인 변경시에만 이용!! (on/off)꺼졌다 켜졌다 반복임,지금처럼 창이 같이 켜질때는 적절하지 않음.

  if(sta == 1) {
      $(this).addClass('on'); //엑스모양 버튼으로 보여짐=> on
      $('#nav_pop').slideDown(); //박스가 보여야함

      sta = 2; //상태2번: 상태가 바뀜

  } else{ //상태2번 일때는 다 빼줘야함
      $(this).removeClass('on');
      $('#nav_pop').slideUp();
      sta = 1; //원래 상태로 돌아옴
  }

})


    // 네비 탑 아코디언
	// 1.아코디언별로 수행하라(each??)
	// 2.dd들을 안보이게 해야한다---> css에서 수정하기(위로)
	$('.accordion1').each(function(){
        var alldt = $(this).find('dt'); //한 아코디언 안에서만 해당이 되도록 한것
        var alldd = $(this).find('dd'); //한 아코디언 안에서만 해당이 되도록 한것
        //var ondt = $(this).find('dt.active'); 참고 
    
        //기본상태에서 액티브가 있는 dt들은 다음에 있는 것을 미리 열어두게 만들음
        //$('dt.active').next().show();
    
        // 3.dt중에 하나를 클릭하면
        alldt.click(function(){
        // 4.*(혹여나 다른 dt를 클릭할 수 있으니)dd들을 안보이게 하라
        //   3번에서 클릭한 dt다음의 dd를 보여라 
            alldd.slideUp();
            alldt.removeClass('active'); //alldt의 dt를 리무브 하여라, 전체를 다 정리하고,클릭한거만 색 표시
            $(this).addClass('active');
            $(this).next().slideDown(); //prev()프리뷰
        })
        }) 


    // 네비 탑 아코디언
	// 1.아코디언별로 수행하라(each??)
	// 2.dd들을 안보이게 해야한다---> css에서 수정하기(위로)
	$('.accordion2').each(function(){
        var alldt = $(this).find('dt'); //한 아코디언 안에서만 해당이 되도록 한것
        var alldd = $(this).find('dd'); //한 아코디언 안에서만 해당이 되도록 한것
        //var ondt = $(this).find('dt.active'); 참고 
    
        //기본상태에서 액티브가 있는 dt들은 다음에 있는 것을 미리 열어두게 만들음
        //$('dt.active').next().show();
    
        // 3.dt중에 하나를 클릭하면
        alldt.click(function(){
        // 4.*(혹여나 다른 dt를 클릭할 수 있으니)dd들을 안보이게 하라
        //   3번에서 클릭한 dt다음의 dd를 보여라 
            alldd.slideUp();
            alldt.removeClass('active'); //alldt의 dt를 리무브 하여라, 전체를 다 정리하고,클릭한거만 색 표시
            $(this).addClass('active');
            $(this).next().slideDown(); //prev()프리뷰
        })
        })

})//jq end