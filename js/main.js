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
        const data = ev.dataTransfer.getData("text");
        if (document.getElementById(data).parentNode.getAttribute("id")==="cart"){
            document.getElementById("showcase").appendChild(document.getElementById(data));
        }else{
            document.getElementById("cart").appendChild(document.getElementById(data));
            const elementPrice = document.getElementById(data).childNodes;
            console.log (elementPrice[1].innerHTML);
            const totalPrice = document.getElementById("price").innerHTML.split(" ");
            console.log(totalPrice[1]);
            document.getElementById("price").innerHTML = totalPrice[0]+" "+ (Number(totalPrice[1]) + Number(elementPrice[1].innerHTML));
            //console.log( elementPrice[1].innerHTML +  );    
        }
        //console.log(document.getElementById(data).parentNode.getAttribute("id"));    
    }