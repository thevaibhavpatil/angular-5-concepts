Step 1: Creating new project

    Create a new project using command ng new gmaps-ng5

Step 2: Install Google Maps types for typescript support.

    Run command npm install — save @types/googlemaps

Step 3: Link Google Maps JavaScript CDN inside index.html

    <script src=”http://maps.googleapis.com/maps/api/js"></script>

    With above steps, you are all set to start working with Google Maps (GMap).

Step 4: Next, let’s add a placeholder <div> for GMap

    <div #gmap style=”width:100%;height:400px”></div>