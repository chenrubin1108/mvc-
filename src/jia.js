// 每个文件都要引入
import $ from "jquery";

const $button1=$('#jia')
const $button2=$('#jian')
const $button3=$('#cheng')
const $button4=$('#chu')
const $number=$('#number')
const n= localStorage.getItem("n") 
console.log(n,'这是n')
$number.text(n || 100);

$button1.on("click", function(){
   let n=Number($number.text()) 
    n+=1
    localStorage.setItem("n",n)
    $number.text(n);
  
  });
$button2.on("click", function(){
    let n=Number($number.text()) 
     n-=1
     localStorage.setItem("n",n)
     $number.text(n);
   
});
$button3.on("click", function(){
    let n=Number($number.text()) 
     n*=2
     localStorage.setItem("n",n)
     $number.text(n);
   
   });
$button4.on("click", function(){
    let n=Number($number.text()) 
     n/=2
     localStorage.setItem("n",n)
     $number.text(n);
   
   });
 