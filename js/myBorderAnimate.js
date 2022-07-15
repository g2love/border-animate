/**
 * Created by g2love on 2022/7/14.
 */
function ZeroBorderAnimate(DATA) {//div:盒子，bgColor:边框颜色，type:边框类型，bgImage:边框图片 width:边框宽度
    var DIV=DATA.div,_bgColor=DATA.bgColor,_type=DATA.type,_bgImage=DATA.bgImage,_w=DATA.width;
    _bgColor ? _bgColor : _bgColor = "#ff0000";
    var box_width = $(DIV).width();
    var box_height=$(DIV).height();
    var box_border_width = _w ? _w : 2;
    $(DIV).css({'position': 'relative', 'overflow': 'hidden'});
    var iCss = {
        'display': 'block', 'position': 'absolute','top':0,'left': 0,
        'width':'100%','height':'100%',
        'border-color':_bgColor, 'border-width':_w+'px', 'border-style':'solid', 'border-radius':'50%', 'box-sizing':'border-box',
        '-webkit-transition': 'all .5s ease-in-out 0s',
        '-moz-transition': 'all .5s ease-in-out 0s',
        '-ms-transition': 'all .5s ease-in-out 0s',
        '-o-transition': 'all .5s ease-in-out 0s',
        'transition': 'all .5s ease-in-out 0s'
    };

    if(_bgImage&&box_width==box_height){
        iCss["background"]="url("+_bgImage+") no-repeat";
        iCss["background-size"]="contain";
        iCss["border-color"]="transparent";
    }else if(_bgImage&&box_width!=box_height){
        return console.warn("当前"+DIV+"div不是圆形。不能用图片做边框！请把div设置成圆形");
    }
    var _box1=$('<i></i>'),_box2=$('<i></i>'),_box3=$('</i><i>'),_box4=$('<i></i>');
    _box1.css(iCss);_box2.css(iCss); _box3.css(iCss);_box4.css(iCss);
    if(!_type||_type==1){
        _box1.css({clip:"rect(0px,"+(box_width/2)+"px,"+box_height+"px,0px)"});
        _box2.css({clip:"rect(0px,"+box_width+"px,"+box_height+"px,"+(box_width/2)+"px)"});
        $(DIV).hover(function () {
            _box1.css({clip:"rect("+(box_height)+"px,"+(box_width/2)+"px,"+(box_height)+"px,0px)"});
            _box2.css({clip:"rect(0px,"+(box_width)+"px,0px,"+(box_width/2)+"px)"});
        },function(){
            _box1.css({clip:"rect(0px,"+(box_width/2)+"px,"+box_height+"px,0px)"});
            _box2.css({clip:"rect(0px,"+box_width+"px,"+box_height+"px,"+(box_width/2)+"px)"});
        });
        $(DIV).append(_box1,_box2);
    }else if(_type==2){
        _box1.css({clip:"rect(0px,"+(box_width)+"px,"+(box_height/2)+"px,0px)"});
        _box2.css({clip:"rect("+(box_height/2)+"px,"+box_width+"px,"+box_height+"px,"+(0)+"px)"});
        $(DIV).hover(function () {
            _box1.css({clip:"rect("+(0)+"px,"+(0)+"px,"+(box_height/2)+"px,"+(0)+"px)"});
            _box2.css({clip:"rect("+(box_height/2)+"px,"+box_width+"px,"+box_height+"px,"+(box_width)+"px)"});
        },function(){
            _box1.css({clip:"rect(0px,"+(box_width)+"px,"+(box_height/2)+"px,0px)"});
            _box2.css({clip:"rect("+(box_height/2)+"px,"+box_width+"px,"+box_height+"px,"+(0)+"px)"});
        });
        $(DIV).append(_box1,_box2);
    }else if(_type==3){
        _box1.css({clip:"rect(0px,"+(box_width/2)+"px,"+(box_height/2)+"px,0px)"});
        _box2.css({clip:"rect(0px,"+box_width+"px,"+box_height/2+"px,"+(box_width/2)+"px)"});
        _box3.css({clip:"rect("+(box_height/2)+"px,"+box_width+"px,"+box_height+"px,"+(box_width/2)+"px)"});
        _box4.css({clip:"rect("+(box_height/2)+"px,"+box_width/2+"px,"+box_height+"px,0px)"});

        $(DIV).hover(function () {
            _box1.css({clip:"rect("+(0)+"px,"+(0)+"px,"+(box_height/2)+"px,"+(0)+"px)"});
            _box2.css({clip:"rect(0px,"+box_width/2+"px,0px,"+(box_width/2)+"px)"});
            _box3.css({clip:"rect("+(box_height/2)+"px,"+box_width+"px,"+box_height+"px,"+(box_width)+"px)"});
            _box4.css({clip:"rect("+(box_height/2)+"px,"+box_width/2+"px,"+box_height+"px,"+(box_width/2)+"px)"});
        },function(){
            _box1.css({clip:"rect(0px,"+(box_width/2)+"px,"+(box_height/2)+"px,0px)"});
            _box2.css({clip:"rect(0px,"+box_width+"px,"+box_height/2+"px,"+(box_width/2)+"px)"});
            _box3.css({clip:"rect("+(box_height/2)+"px,"+box_width+"px,"+box_height+"px,"+(box_width/2)+"px)"});
            _box4.css({clip:"rect("+(box_height/2)+"px,"+box_width/2+"px,"+box_height+"px,0px)"});
        });
        $(DIV).append(_box1,_box2,_box3,_box4);
    }else if(_type==4){
        _box1.css({clip:"rect(0px,"+(box_width)+"px,"+(box_height)+"px,0px)"});
        $(DIV).hover(function () {
            _box1.css({clip:"rect("+(box_width)+"px,"+(box_width)+"px,"+(box_height)+"px,"+(0)+"px)"});
        },function(){
            _box1.css({clip:"rect(0px,"+(box_width)+"px,"+(box_height)+"px,0px)"});
        });
        $(DIV).append(_box1);
    }
}
function SquareBorderAnimate(DATA){//div:盒子，bgColor:边框颜色，bgImage:边框图片 width:边框宽度
    var DIV=DATA.div,_bgColor=DATA.bgColor,_bgImage=DATA.bgImage,_w=DATA.width,_RLG=DATA.RLG;
    _bgColor?_bgColor:_bgColor="#ff0000";
    var box_width=$(DIV).width();
    var box_height=$(DIV).height();
    var box_border_width=_w?_w:2;
    $(DIV).css({
        'position':'relative',
        'overflow': 'hidden'
    });
    var _box1=$('<i></i>'),_box2=$('<i></i>'),_box3=$('<i></i>'),_box4=$('<i></i>');
    var iCss= {
        'display': 'block',
        'position': 'absolute',
        '-webkit-transition': 'all .5s ease-in-out 0s',
        '-moz-transition': 'all .5s ease-in-out 0s',
        '-ms-transition': 'all .5s ease-in-out 0s',
        '-o-transition': 'all .5s ease-in-out 0s',
        'transition': 'all .5s ease-in-out 0s'

    };
    if(_bgImage){
        iCss["background-origin"]="content-box";
        iCss["background-color"]="transparent";
        iCss["background-repeat"]="round";

        _box1.css({"background":"url("+_bgImage[0]+") no-repeat"});
        _box2.css({"background":"url("+(_bgImage[1]?_bgImage[1]:_bgImage[0])+") no-repeat"});
        _box3.css({"background":"url("+(_bgImage[2]?_bgImage[2]:_bgImage[0])+") no-repeat"});
        _box4.css({"background":"url("+(_bgImage[3]?_bgImage[3]:_bgImage[0])+") no-repeat"});
    }else if(_RLG){
        _box1.css({  'background-color': _bgColor,'background-image':'repeating-linear-gradient(245deg,'+_bgColor+',white 100%)' });
        _box2.css({  'background-color': _bgColor,'background-image':'repeating-linear-gradient(45deg,'+_bgColor+',white 100%)' });
        _box3.css({  'background-color': _bgColor,'background-image':'repeating-linear-gradient(90deg,'+_bgColor+',white 100%)' });
        _box4.css({  'background-color': _bgColor,'background-image':'repeating-linear-gradient(0deg,'+_bgColor+',white 100%)' });
    }else{
        iCss['background-color']=_bgColor;
    }
    _box1.css(iCss);_box2.css(iCss);_box3.css(iCss);_box4.css(iCss);
    _box1.css({'top':0, 'left': 0, 'width': '100%', 'height':box_border_width+'px',clip:"rect(0px,"+box_width+"px,"+box_border_width+"px,0px)"});
    _box2.css({'top':0, 'right': 0 , 'width':box_border_width+'px', 'height': '100%',clip: 'rect(0px,'+box_border_width+'px,'+box_height+'px,0px)'});
    _box3.css({'bottom':0,  'left': 0,  'width': '100%', 'height': box_border_width+'px',clip: 'rect(0px,'+box_width+'px,'+box_border_width+'px,0px)'});
    _box4.css({'top':0,  'left': 0, 'width':box_border_width+'px', 'height': '100%',clip: 'rect(0px,'+box_border_width+'px,'+box_height+'px,0px)'});

    $(DIV).hover(function(){
        _box1.css({clip: 'rect(0px, 0,'+ box_border_width+'px, 0px)'});
        _box2.css({clip: 'rect(0px,'+box_border_width+'px,0px,0px)'});
        _box3.css({clip: 'rect(0px,'+box_width+'px,'+box_border_width+'px,'+box_width+'px)'});
        _box4.css({clip: 'rect('+box_height+'px,'+box_border_width+'px,'+ box_height+'px,0px)'});
    }, function () {
        _box1.css({clip:"rect(0px,"+box_width+"px,"+box_border_width+"px,0px)"});
        _box2.css({clip: 'rect(0px,'+box_border_width+'px,'+box_height+'px,0px)'});
        _box3.css({clip: 'rect(0px,'+box_width+'px,'+box_border_width+'px,0px)'});
        _box4.css({clip: 'rect(0px,'+box_border_width+'px,'+box_height+'px,0px)'});
    });
    $(DIV).append(_box1,_box2,_box3,_box4);
}

