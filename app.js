let ttl = gsap.timeline();
let ttl2 = gsap.timeline();
ttl
.from('#coll_logo', {
    opacity: 0,
    y: 25,
    duration:2

})
.from('#coll_text', {
    
    opacity:0,
    onStart: function () {
        $('#coll_text').textillate({
            in: {
                effect: 'fadeInUp' 
            }
            
        });
    }
    
    
})
.from('#pre_text',{
opacity:0,
    onStart: function () {
        $('#pre_text').textillate({
            in: {
                effect: 'fadeInUp' 
            }
            
        });
    },
    delay:3.2
})
.from('#jag_dp',{
opacity:0,
    y:20,
    delay:0.5
})


// right
ttl2
.from('#one',{
    onStart:function(){
        $('#one').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#one').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
})
.from('#two',{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#two').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#two').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
})
.from('#three',{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#three').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#three').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
}).from('#four',{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#four').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#four').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
}).from('#five',{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#five').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#five').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
}).from('#six',{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#six').textillate({
            in: {
                effect: 'fadeInUp'
                
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
}).to('#loader',{
   y:"-100%",
   duration:1,
   delay:1
})