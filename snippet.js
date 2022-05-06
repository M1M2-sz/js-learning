// variant 1 - construction if - else //

var 
x0 = 0 , 
y0 = 0 , 
R = 10 ,
x1 = 10 ,
y1 = 10 ;

if ( x1 >= R + x0 , y1 >= R + y0 ) 
{console.log ( 'The value is not included in the circle' );} 

else 
{console.log ( 'The value enters in the circle!' );}


// variant 2 - construction else if //

var 
x0 = 0 , 
y0 = 0 , 
R = 10 ,
x1 = 10 ,
y1 = 10 ;

if ( x1 >= R + x0 , y1 >= R + y0 ) 
{console.log ( 'The value is not included in the circle' );} 

else if ( x1 <= R + x0 , y1 <= R + y0 ) 
{console.log ( 'The value enters in the circle!' );} 

else 
{console.log ( 'WOW!' );}


// variant 3 - construction '?' - true/false //

var 
x0 = 0 , 
y0 = 0 , 
R = 10 ,
x1 = 10 ,
y1 = 10 ;


let result = ( x1 >= R + x0 , y1 >= R + y0 ) ? false : true ;

result;


// variant 4 -  double construction '?' //

var 
x0 = 0 , 
y0 = 0 , 
R = 10 ,
x1 = 10 ,
y1 = 10 ;

let result2 = 
( x1 >= R + x0 , y1 >= R + y0 ) ? 'The value is not included in the circle' :
( x1 <= R + x0 , y1 <= R + y0 ) ? 'The value enters in the circle!' :
'WOW!';

result2;

// square problem - new methood Math.sqrt - square rooting //

var 
x0 = 0 , 
y0 = 0 , 
R = 10 ,
x1 = 10 ,
y1 = 10 ;

if ( Math.sqrt ( x1 * x1 + y1 * y1 ) >= R ) 
{console.log ( 'The value is not included in the circle' );} 

else 
{console.log ( 'The value enters in the circle!' );}
