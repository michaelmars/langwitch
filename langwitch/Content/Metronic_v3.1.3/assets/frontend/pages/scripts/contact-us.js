var ContactUs = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
			    lat:51.219297, 
			    lng: 7.645672,
			  });
			   var marker = map.addMarker({
			       lat: 51.219297,
			       lng: 7.645672,
			       title: 'LangWitch, Inc.',
		            infoWindow: {
		                content: "<b>LangWitch</b>58511 Luedenscheid, Germany"
		            }
		        });

			   marker.infoWindow.open(map, marker);
			});
        }
    };

}();