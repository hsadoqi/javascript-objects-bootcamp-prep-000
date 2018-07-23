<<<<<<< HEAD
var playlist = {Drake: "God's Plan"}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign (playlist, {[artistName]: songTitle})
  return playlist
}

updatePlaylist(playlist, 'Phil Ochs', 'Slowdive')

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
=======
var playlist = {Drake: "God's Plan", Frank: "New York, New York"}

function updatePlaylist(playlist, artist, song){
  Object.assign (playlist, {[artist]: song})
  return playlist
}

function removeFromPlaylist(){
  delete playlist.Drake
>>>>>>> caeea2bcb7bfc351366b9ea96309aa97c27f2365
  return playlist
}



