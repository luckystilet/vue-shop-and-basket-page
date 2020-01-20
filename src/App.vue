<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  // mounted() {
  //   setTimeout(()=>{
  //       var x, i, j, selElmnt, a, b, c;
  //       /* Look for any elements with the class "custom-select": */
  //       x = document.getElementsByClassName("custom-select");
  //       for (i = 0; i < x.length; i++) {
  //           selElmnt = x[i].getElementsByTagName("select")[0];
  //           /* For each element, create a new DIV that will act as the selected item: */
  //           a = document.createElement("DIV");               // <------ Титул
  //           a.setAttribute("class", "select-selected");
  //           a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  //           x[i].appendChild(a);
  //           /* For each element, create a new DIV that will contain the option list: */
  //           b = document.createElement("DIV");
  //           b.setAttribute("class", "select-items select-hide");
  //           for (j = 1; j < selElmnt.length; j++) {
  //               /* For each option in the original select element,
  //               create a new DIV that will act as an option item: */
  //               c = document.createElement("DIV");
  //               c.innerHTML = selElmnt.options[j].innerHTML;
  //
  //
  //
  //
  //
  //               c.addEventListener("click", function(e) {
  //                 // console.log("zzzzzzzzz",    select   );
  //                 /* When an item is clicked, update the original select box,
  //                 and the selected item: */
  //
  //
  //                 var y, i, k, s, h;
  //                 s = this.parentNode.parentNode.getElementsByTagName("select")[0];
  //                 h = this.parentNode.previousSibling;
  //                 for (i = 0; i < s.length; i++) {
  //                   if (s.options[i].innerHTML == this.innerHTML) {
  //                     s.selectedIndex = i;
  //                     h.innerHTML = this.innerHTML;
  //                     y = this.parentNode.getElementsByClassName("same-as-selected");
  //                     for (k = 0; k < y.length; k++) {
  //                       y[k].removeAttribute("class");
  //                     }
  //                     this.setAttribute("class", "same-as-selected");
  //                     break;
  //                   }
  //                 }
  //                 h.click();
  //               });
  //
  //               b.appendChild(c);
  //           }
  //           x[i].appendChild(b);
  //           a.addEventListener("click", function(e) {
  //               /* When the select box is clicked, close any other select boxes,
  //               and open/close the current select box: */
  //               e.stopPropagation();
  //               closeAllSelect(this);
  //               this.nextSibling.classList.toggle("select-hide");
  //               this.classList.toggle("select-arrow-active");
  //           });
  //       }
  //
  //       function closeAllSelect(elmnt) {
  //           /* A function that will close all select boxes in the document,
  //           except the current select box: */
  //
  //
  //
  //           var x, y, i, arrNo = [];
  //           x = document.getElementsByClassName("select-items");
  //           y = document.getElementsByClassName("select-selected");
  //           for (i = 0; i < y.length; i++) {
  //               if (elmnt == y[i]) {
  //                   arrNo.push(i)
  //               } else {
  //                   y[i].classList.remove("select-arrow-active");
  //               }
  //           }
  //           for (i = 0; i < x.length; i++) {
  //               if (arrNo.indexOf(i)) {
  //                   x[i].classList.add("select-hide");
  //               }
  //           }
  //       }
  //
  //       /* If the user clicks anywhere outside the select box,
  //       then close all select boxes: */
  //       document.addEventListener("click", closeAllSelect);
  //   },0)
  // }
}
</script>

<style lang="scss">
  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.6rem;
  }
  .container{
    max-width: 1150px;
    padding: 0 20px;
    margin: 0 auto;
  }
  /*###### Select ######*/

  .custom-select {
    position: relative;
  }
  .custom-select select {
    display: none;
  }
  .select-selected {
    position: relative;
    padding: 8px 50px;
    color: #ffffff;
    cursor: pointer;
    user-select: none;
    font-size: 2.4rem;
    &:before{
      content: '';
      bottom: 0px;
      left: 36px;
      width: 61px;
      height: 3px;
      background: #fff;
      position: absolute;
    }
    &:after{
        content: '';
        position: absolute;
        top: 24px;
        right: 38px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #fff transparent transparent transparent;
    }
  }
  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 16px;
  }
  .select-items div {
    color: #ffffff;
    cursor: pointer;
    user-select: none;
    border-radius: 4px;
    font-size: 2.4rem;
    line-height: 3.5rem;
    width: 3.5rem;
    text-align: center;
    margin-top: 9px;
  }
  .select-items {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
    max-height: 187px;
    overflow-y: scroll;
    background-color: rgba(0,0,0,.2);
    padding: 7px 14px;
    transition: all linear .3s;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    &::-webkit-scrollbar{
      width: 3px;
    }
    &::-webkit-scrollbar-thumb{
      background-color: rgba(0,0,0,.1);
      height: 40px;
    }
  }
  .select-hide {
      opacity: 0;
      visibility: hidden;
  }
  .select-items div:hover, .same-as-selected {
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
