// adding a onclick listener to status toggle button
function change(e){
    console.log( e.children[0].value);
//if class is firstly then do it check
   if(e.children[0].value==" "){
     e.children[0].value="done";
   
   e.className="fa fa-check";
   console.log( e.children[0].value);

   

   }
//if habit is mark as done

  else if(e.children[0].value=="done"){

  e.children[0].value="notDone";
   
   e.className="fa fa-times";
   console.log( e.children[0].value);

  }

//   if habit is mark as not done 
 else  if(e.children[0].value=="notDone"){
  e.children[0].value=" ";
   e.className="fa fa-ban";
   console.log( e.children[0].value);
  }

}
