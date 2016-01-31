// from http://papermashup.com/read-url-get-variables-withjavascript/
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

$.getJSON( "json/revclass.json", function( data ) {
    var vars = getUrlVars()["vars"];
    var cls = getUrlVars()["cls"];
    var repr = getUrlVars()["repr"];
    var ecls = _.select( data[vars][cls], function( c ) { return c["repr"] == repr; } )[0];
    _.each( ecls["circuits"], function( c ) {
        $(".revclass-grid").append( '<div class="grid-item"><a href="http://www.informatik.uni-bremen.de/~msoeken/revclass/' + c["perm"] + '.real"><img src="http://www.informatik.uni-bremen.de/~msoeken/revclass/' + c["perm"] + '.png" border=""/></a><div class="perm">' + c["perm"] + '</div></div>' );
    } );
} );
