	
	'use strict';	
	
	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});
	
	
	//INITIALIZE MAP
	function initialize() {
		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 12,		
			mapTypeId: google.maps.MapTypeId.ROADMAP,	
    		center: new google.maps.LatLng(40.77246, -73.98348),
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,
			
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';

		var pinIcon = {
			url: "map-icons/pin.png",
			scaledSize: new google.maps.Size(50, 50), // scaled size
			origin: new google.maps.Point(0,0), // origin
			anchor: new google.maps.Point(0, 0) // anchor
		}

		var test = {
			url: '<div class="de-icon circle small-size" style="background-color:#f0394d; border:1px solid #f0394d"><i class="de-icon-bell-alt" style="color:#fff"></i></div>',
			scaledSize: new google.maps.Size(50, 50), // scaled size
			origin: new google.maps.Point(0,0), // origin
			anchor: new google.maps.Point(0, 0) // anchor
		}
		
		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});
		
		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(-12.042559, -77.027426),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/
		
		
		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(40.74106, -73.98013),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d; border:1px solid #f0394d"><i class="de-icon-bell-alt" style="color:#fff"></i></div>',
       		labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels", // the CSS class for the label
			labelSize: new google.maps.Size(20, 32)
     		});
    
		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(40.8275, -73.97749),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e;"><i class="de-icon-food"></i></div>',
       		labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels" // the CSS class for the label
     		});
			
		var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(40.80683, -73.98992),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#67a80e"><i class="de-icon-home-1"></i></div>',
       		labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels" // the CSS class for the label
     		});
			
		var marker4 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-12.046617, -77.030567	),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#c89d1b"><i class="de-icon-coffee"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});
			
		var marker5 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-12.045857, -77.032538),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d"><i class="de-icon-basket"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});	
		
		var marker6 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-12.046053, -77.028732),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-paper-plane"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});	
			
		var marker7 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-12.045363, -77.029939),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-tree"></i></div>',
       		labelAnchor: new google.maps.Point(0, 0),
       		labelClass: "labels" // the CSS class for the label
     		});			
    	//marker.setMap( map );
		
		
		//INFO WINDOWS
		//=======================================================================================

		var contentString1 = 
		"</div>" +
		'<h4 id="firstHeading" class="firstHeading" style="text-align:center;">CEREMONY</h4>' +
		'<div id="bodyContent">' +
		"Location: St. Illuminator's Armenian Apostolic Cathedral" + "<br><br>" +
		"Address: 221 E 27th St, New York, NY 10016" + "<br><br>" +
		"Time: 4:00pm" + "<br><br>" +
		"<a href='https://goo.gl/maps/8G1AWpFX8Jww3s9g8' target='_blank' class='custom-link-style'>Get Directions</a>";
		
		var infowindow1 = new google.maps.InfoWindow({
			content: contentString1
		});

		var contentString2 = 
		"</div>" +
		'<h4 id="firstHeading" class="firstHeading" style="text-align:center;">RECEPTION</h4>' +
		'<div id="bodyContent">' +
		"Location: Palisadium, USA" + "<br><br>" +
		"Address: 700 Palisadium Dr, Cliffside Park, NJ 07010" + "<br><br>" +
		"Time: 6:30pm" + "<br><br>" +
		"<a href='https://goo.gl/maps/d6EJvbAzx6escQpr8' target='_blank' class='custom-link-style'>Get Directions</a>";

		var infowindow2 = new google.maps.InfoWindow({
			content: contentString2
		});

		var contentString3 = 
		"</div>" +
		'<h4 id="firstHeading" class="firstHeading" style="text-align:center;">ACCOMODATION</h4>' +
		'<div id="bodyContent">' +
		"Location: Homewood Suites by Hilton Edgewater" + "<br><br>" +
		"Address: 10 The Promenade, Edgewater, NJ 07020" + "<br><br>" +
		"Phone: (201) 941-4700" + "<br><br>" +
		"<a href='https://goo.gl/maps/o6y9NWvbZYkUDYqZ9' target='_blank' class='custom-link-style'>Get Directions</a>";

		var infowindow3 = new google.maps.InfoWindow({
			content: contentString3
		});
		
		
		//OPEN INFO WINDOWS ON LOAD
		//=======================================================================================
  		// infowindow.open(map,marker1);
		
		//ON CLICK MARKER, OPEN INFO WINDOWS
		//=======================================================================================
		google.maps.event.addListener(marker1, 'click', function() {
  			infowindow1.open(map,marker1);
  		});

		google.maps.event.addListener(marker2, 'click', function() {
			infowindow2.open(map,marker2);
		});

		google.maps.event.addListener(marker3, 'click', function() {
			infowindow3.open(map,marker3);
		});

		//ON MARKER CLICK EVENTS
		//=======================================================================================
  		/*google.maps.event.addListener(marker, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow.open(map,marker);
  		});
		
		google.maps.event.addListener(marker1, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker1);
  		});
		
		google.maps.event.addListener(marker2, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow1.open(map,marker2);
  		});*/
		
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
	
	