export default function getLocation() {
    navigator.geolocation.getCurrentPosition((position)=>{
      setXcoords(position.coords.latitude)
      setYcoords(position.coords.longitude)
    });

}
