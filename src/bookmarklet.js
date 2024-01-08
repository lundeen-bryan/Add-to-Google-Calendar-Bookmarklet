javascript:(function(GCAB, d, sel, open){
if(!d.getElementById(GCAB)){var s=d.createElement('script'); s.id=GCAB; s.src='https://gist.githubusercontent.com/lundeen-bryan/ac9b2305dba64b911c84a1f35a52858c/raw/6e7085e4d13b0ad82d6aa1abd8fff1ea0b0e9732/Gcal_selected_text.js';d.head.appendChild(s);}
setTimeout(function(){new GoogleCalenderAddBookmarklet().popup(sel, open)}, 500);
})('GoogleCalenderAddBookmarklet', document, window.getSelection()+'', window.open)