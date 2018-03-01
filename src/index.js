// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let h; let q; let d; let n; let p;
       let ERROR = {
        	error: "You are rich, my friend! We don't have so much coins for exchange"
        }
          

    let empty = {
       
        }    

         if(currency >= 10000){
        	return(ERROR)
        }
        else if(currency <=0){
        	return (empty)
        }
        else if(currency <=10000){
        	h = currency/50;       currency %=50;
    q = currency/25;       currency %=25;
    d = currency/10;       currency %=10;
    n = currency/5;        currency %=5;
    p = currency/1;        
      let current = {
    	H:Math.floor(h),
    	Q:Math.floor(q),
    	D:Math.floor(d),
    	N:Math.floor(n),
    	P:Math.floor(p)
    }
    if(current.H == 0 ){
    	delete current.H
    }
    if(current.Q == 0){
    	delete current.Q
    }
    if(current.D == 0){
    	delete current.D
    }
    if(current.N == 0){
    	delete current.N
    }
    if(current.P == 0){
    	delete current.P
    }
        	return(current)
        }


 

    
    




   
        

    	
           
    	
   
}
