 import $ from 'jquery'



 const $tabBar=$('.tab-bar')
 const $tabContent=$('.tab-content')
 const $jian1=$('.jian-1')
 const $jian2=$('.jian-2')
 $tabBar.on("click", "li", e => {
    const $li = $(e.currentTarget);
    $li
      .addClass("selected")
      .siblings()
      .removeClass("selected");
      const index = $li.index();
    console.log(
        $tabContent
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass("active")
        )


  });