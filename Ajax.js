function ajax(){
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
      if(this.readyState==4&&this.status==200){
          var response=JSON.parse(this.responseText);
           var jpeople=response.people;
           console.log(jpeople);
              var output="";
              for(var i=0;i<jpeople.length;i++){
                  output+="<tr>";
                  output+="<td>"+jpeople[i].userId+"</td>";
                  output+="<td>"+jpeople[i].id+"</td>";
                  output+="<td>"+jpeople[i].title+"</td>";
                  var x=jpeople[i].completed;
                  if(x==true){
                      output+="<td><input type='checkbox' checked id='chk"+i+"'/>"+"</td>";
                    }
                  else{
                      output+="<td id='check'><input type='checkbox'  id='checkbox"+i +"'/>"+"</td>"
                  }  
              }
              }
               document.getElementById("mytable").innerHTML=output;
          }
  xhttp.open("GET","main.json",true);
  xhttp.send();}
  $(document).ready(function(){
         var count=0;
         $("#mytable").click(function(){
             count+=1;
             if(count==5){
                 alert("Congrats 5 Tasks have been successfully completed");
             }
            
             
             
             
             
         })    });
