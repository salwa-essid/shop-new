var clicks = 1;
var clicks1 = 1;
var clicks2 = 1;
var total=549;
var total1=870;
var total2=349;
                function onClick() {
                clicks ++;
                total=549*clicks;
                sommetotal=total+total1+total2;
                document.getElementById("clicks").innerHTML = clicks;
                document.getElementById("total").innerHTML = total;
                document.getElementById("sommetotal").innerHTML = sommetotal;
                }

                function onClickmin() {
                    if(clicks>0){
                clicks --;
                total=549*clicks;
                sommetotal=total+total1+total2;
                document.getElementById("clicks").innerHTML = clicks;
                document.getElementById("total").innerHTML = total;
                document.getElementById("sommetotal").innerHTML = sommetotal;
                };}


                
                function onClick1() {
                clicks1 ++;
                total1=870*clicks1;
                sommetotal=total+total1+total2;
                document.getElementById("clicks1").innerHTML = clicks1;
                document.getElementById("total1").innerHTML = total1;
                document.getElementById("sommetotal").innerHTML = sommetotal;
                }

                function onClickmin1() {
                    if(clicks>0){
                clicks1 --;
                total1=870*clicks1;
                sommetotal=total+total1+total2;
                document.getElementById("clicks1").innerHTML = clicks1;
                document.getElementById("total1").innerHTML = total1;
                document.getElementById("sommetotal").innerHTML = sommetotal;
                };}


                
                function onClick2() {
                clicks2 ++;
                total2=349*clicks2;
                sommetotal=total+total1+total2;
                document.getElementById("clicks2").innerHTML = clicks2;
                document.getElementById("total2").innerHTML = total2;
                document.getElementById("sommetotal").innerHTML = sommetotal;
                }

                function onClickmin2() {
                    if(clicks>0){
                clicks2 --;
                total2=349*clicks2;
                sommetotal=total+total1+total2;
                document.getElementById("clicks2").innerHTML = clicks2;
                document.getElementById("total2").innerHTML = total2;
                document.getElementById("sommetotal").innerHTML = sommetotal;
                };}



                

 