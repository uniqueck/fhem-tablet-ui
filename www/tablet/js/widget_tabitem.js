function widget_button_clicked(target, type) {
    switch(type) {
        case 'url':
            document.location.href = target;
            break;
        case 'url-xhr':
            $.get(target);
            break;
        case 'fhem-cmd':
            var fhem = $("meta[name='fhemweb_url']").attr("content") || "../fhem";
            $.get(fhem + '?cmd='+ target +'&XHR=1');
            break;
    }
    return 1;
}

var widget_tabitem= {
    widgetname : 'tabitem',
    init: function () {
      base=this;
      this.elements = $('div[data-type="'+this.widgetname+'"]');
      this.elements.each(function(index) {
          var elem_url=$(this).data('url');
          var isCurrent=false;
          if (elem_url.indexOf(filename)>-1)
              isCurrent=true;

          var elem = $(this).famultibutton({
              backgroundIcon: 'fa-circle',
              onColor: '#222222',
              onBackgroundColor: '#606060',
              offColor: '#606060',
              offBackgroundColor: 'transparent',
              mode: 'toggle',

              // Called in toggle on state.
              toggleOn: function( ) {
                  document.location.href = elem_url;
              },

           });

          if (isCurrent)
              $(this).data('famultibutton').setOn();
          else
              $(this).data('famultibutton').setOff();
        });
    },
  
    update: function (dev,par) {

    }       
};
