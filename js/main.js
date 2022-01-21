  /**
   * --------------------------------------------------------------------------
   * Showcase JavaScript - EcmaScript6
   * --------------------------------------------------------------------------
   */

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (document.getElementById(data).parentNode.getAttribute("id")==="cart"){
            document.getElementById("showcase").appendChild(document.getElementById(data));
        }else{
            document.getElementById("cart").appendChild(document.getElementById(data));
        }
        //console.log(document.getElementById(data).parentNode.getAttribute("id"));    
    }