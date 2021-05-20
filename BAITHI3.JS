
   let b1 = "4";
  
   let dem =0
function dudoan(){
    let b = document.getElementById("b").value;
 
    if ( b == b1 ){
        alert("Bạn đã trúng thưởng")
    }
    else{
        while(b != b1 ){
           if( dem == 3 ){
               alert("Chúc bạn may mắn lần sau")
           
              
           } 
           if(dem > 3 ){
                alert("mời đoán lại ");
                return dem;
                
            }
           else{
               dem++;alert("mời đoán lại");
              break
              

           }
        }
    }
    
   

    
} 




  

