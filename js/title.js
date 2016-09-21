(function(){
  var fiftyfifty = Math.random() > 0.5;

  if(fiftyfifty){
    var brandElement = document.getElementsByClassName('brand')[0];

    oldHtml = brandElement.innerHtml;
    newHtml = olHtml.replace('Y k', 'A l e');
    brandElement.innerHtml = newHtml;

  }
}());
