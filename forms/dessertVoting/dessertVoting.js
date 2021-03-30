var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
 for(i = 0; i < dessertList.length; i++)
     drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
// this 'if' kicks user out if they  just clicked on control 
// but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
        /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
        lblPrompt.value = `you picked ${s}- that is a great choice!`
    }
}

Button1.onclick=function(){
  ChangeForm(describeYou)
}
