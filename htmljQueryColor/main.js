$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  const pTags = $('p')[0].innerText;
  const preSpanTags = pTags.split(' ');

  // for (var i = 0; i < preSpanTags.length; i++) {
  //   preSpanTags[i] = '<span>' + preSpanTags[i] + '</span>';
  // }

  const appendSpan = () => {
    var randomColor = () => {
      return 'rgb('
      + (Math.floor(Math.random() * 256)) + ','
      + (Math.floor(Math.random() * 256)) + ','
      + (Math.floor(Math.random() * 256)) + ')';
    }
    for (var i = 0; i < preSpanTags.length; i++) {
      preSpanTags[i] = '<span style="color:' + randomColor() + '">' + preSpanTags[i] + '</span>';
    }
    $('p').html(preSpanTags);
  }

  setTimeout(appendSpan, 1000)
  // $('span').animate({color:"green"}, 1000);

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

});
