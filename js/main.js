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
        console.log(ev);
        const data = ev.dataTransfer.getData("text");
        const elementPrice = document.getElementById(data).childNodes;
        const totalPrice = document.getElementById("price").innerHTML.split(" ");
        const price = elementPrice[1].innerHTML.split("€");
        //console.log(document.getElementById(data).parentNode.getAttribute("id"))
        if (document.getElementById(data).parentNode.getAttribute("id")=="cart"){
            document.getElementById("showcase").appendChild(document.getElementById(data));
            document.getElementById("price").innerHTML = `${totalPrice[0]} ${Number(totalPrice[1]) - Number(price[0])} €`;
        }else{
            document.getElementById("cart").appendChild(document.getElementById(data));
            document.getElementById("price").innerHTML = `${totalPrice[0]} ${Number(totalPrice[1]) + Number(price[0])} €`; 
        }
        const totalElements = document.getElementById("elements").innerHTML.split(" ");
        const c = document.getElementById("cart").children.length + 1;
        document.getElementById("elements").innerHTML = `${totalElements[0]} ${Number(c-1)}`; 
    }