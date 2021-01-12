var Links = {
    setColor:function (color){
    //     var alist = document.querySelectorAll('a');

    // var i = 0;
    // while(i < alist.length){
    // alist[i].style.color = color;
    // i = i+1;    
    // }
    $('a').css('color',color);
}
}
var Body = {
    SetColor:function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color',color);
    },
    SetBackgroundColor:function (color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
        
    }
}

function nightdayhandler(self){
    var target = document.querySelector('body');

    if(self.value === 'night'){
        Body.SetColor('white');
        Body.SetBackgroundColor('black');
        self.value = 'day';

        Links.setColor('powderblue');
        
    }else{
        Body.SetColor('black');
        Body.SetBackgroundColor('white');
        self.value = 'night';

        Links.setColor('green');
        
    }
}