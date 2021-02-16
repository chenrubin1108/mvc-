

import $ from 'jquery'
import './cheng.css'

const $square=$('.square')
$square.on('click',()=>{
   $square.toggleClass('active')
})
