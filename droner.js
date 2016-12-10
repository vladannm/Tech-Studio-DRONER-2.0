// all the assets
var videos = [
"https://media.giphy.com/media/3o85xt08p2Y0hanhwQ/giphy.gif", // default state
"https://media.giphy.com/media/l2SqcWByj8h7w0TEk/source.gif", // glitch
"https://media.giphy.com/media/sIfLhexLUqwik/giphy.gif",      // vid 1
"https://media.giphy.com/media/l396Uasr95XqhSFJm/giphy.gif",  // vid 2
];


var playlist = [
    videos[0] // default state
];


// flag for sequence
var playingSequence = false;


// main animation loop to call the main function
// video.addEventListener( 'ended', playVideo );
var mainAnimInterval = setInterval( playVideo, 5000 ); // on ended for video


// loop default state until mouse clicks
// plays videos from the playlist aray
function playVideo() {
	// play the first video in the playlist array
  document.querySelector('#main').src = playlist[0];
	// if playing sequence, remove items from array
	if( playingSequence ) {
    console.log('playing sequence');
    playlist.shift();
    // once removed all videos, set back to default
    if( playlist.length == 0 ) {
    	playlist = [ videos[0] ];
      playingSequence = false;
    }
  } else {
 		console.log('playing default');
  }
}


// on click
document.addEventListener('click',mouseClicked);
function mouseClicked() {
  // then generate random sequence
  // (vid1, vid2)
  var say = [videos[3], videos[2]];
  playlist = [ videos[1] ].concat( say ).concat( [ videos[1] ] );
  // playlist = [ videos[1], videos[3], videos[2], videos[1] ];
  //            glitch      random videos (1,2)    glitch
  playingSequence = true;
  // send a fake event as if the current video is done playing
  var fakeEvent = new Event("ended");
  document.querySelector('#main').dispatch( fakeEvent );
}


// after sequence go back to default
