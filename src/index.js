module.exports = function getZerosCount(number, base){  
  
  var  count,num,CountZeros = 0; 
  var zeros = number;

  for (var i = 2; i <= base;i++)
  {
    if (base % i == 0)
    {   
      count = 0;
      while (base % i == 0)
      {
        count++;
        base = Math.floor(base / i);  
      }
      var CountZeros = 0;
      num = number;

      while (Math.floor(num / i) > 0)
      {
        CountZeros += Math.floor(num / i);
        num = Math.floor(num / i);
      }
      zeros = Math.min (zeros , Math.floor(CountZeros / count));
    }
}        
  return zeros;
}