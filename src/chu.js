import $ from 'jquery'
import './chu.css'
const $circle=$('.circle')
$circle.on('mouseenter',()=>{
    
    $circle.addClass('active')
    
    
    console.log('鼠标进入')
})
$circle.on('mouseleave',()=>{
    $circle.removeClass('active')
})

