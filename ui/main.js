console.log('Loaded!');
var button=document.getElementbyId("clickme");
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechanged=function(){
        if(request.readystate===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementbyId("span");
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open("http://sanathvobilisetty.imad.hasura-app.io/counter",true);
    request.send(null);
};