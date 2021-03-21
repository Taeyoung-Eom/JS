
        var Links = {
            setColor:function(color){
            // var alist = document.querySelectorAll('a');
            // var i = 0;
            // while(i < alist.length){
            //     alist[i].style.color = color;
            //     i = i +1
            //     }
            $('a').css('color', color);
            }
        }
        var Body = {
            setColor:function (color){
                //document.querySelector('body').style.color = color;
                $('body').css('color',color); //color값을 파라미터color로 한다.
            },
            setBackgroundColor:function (color){
                //document.querySelector('body').style.backgroundColor = color;
                $('body').css('background', color);
            }
        }
        function nightDayHandler(self){
            var target = document.querySelector('body');
            if(self.value === 'night'){
                Body.setBackgroundColor('black');
                Body.setColor('white');
                Links.setColor('powderblue');
                self.value = 'day';
            } 
            else{
                Body.setBackgroundColor('white');
                Body.setColor('black');
                Links.setColor('hotpink')
                self.value = 'night';
                }
            }