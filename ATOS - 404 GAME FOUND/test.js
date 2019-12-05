function generate(lvl){

          var M=[];
          var r = random(50,H-50,H/2,0);
          M.push(r);

          while(M.length<lvl)
          {
              var overl=false;
              var r = random(50,H-50,H/2,0);
              for(var j=0; j<M.length; j++){
                    var v = M[j];
                    
                    if (distance(r,v)<=50) {
                      overl=true;  
                    };
              }
              if (!overl) {
                M.push(r);
              };
}
return M;
}


function random(a,b,p,d){
  var r= a+ Math.random()*(b-a);
  while(distance(r,p)<=d){
      r = a+ Math.random()*(b-a);
  };
  return r
}