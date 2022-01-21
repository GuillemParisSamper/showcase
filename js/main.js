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

    function dropToCart(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.table(data);
        //ev.target.appendChild(document.getElementById(data));
        document.getElementById("cart").appendChild(document.getElementById(data));
    }