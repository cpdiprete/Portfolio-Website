
// import { useRef } from "react";
// import BTHTF from "../assets/Albums/BTHTF.png";
// import inRainbows from "../assets/Albums/inRainbows.png";
// import scrugg from "../assets/Albums/Songs/Scruggyt.mp3";
// // import coldcountry from "../assets/Albums/songs/coldcountrydup.mp3";
// import jigsaw from "../assets/Albums/songs/Jigsaw.mp3";

// const Music = () => {
//     const song = useRef(null);

//     const handleMouseEnter = (s) => {
//         if (!song.current) {
//             song.current = new Audio(s); // Create the audio object if it doesn't exist
//         } else {
//             song.current.src = s; // Set the new source for the audio
//         }
//         song.current.play();
//     };

//     const handleMouseLeave = () => {
//         if (song.current) {
//             song.current.pause();
//             song.current.currentTime = 0; // Reset for when the song is played again
//         }
//     };

//     return (
//         <div className="p-4 flex flex-wrap items-center justify-center">
//             <div>
//                 <h1 className="text-4xl font-bold text-purple-600">Music</h1>
//             </div>
//             <div className="flex justify-center">
//                 <p className="mt-2 text-xl w-1/2 text-neutral-600">
//                     In my free time, one of the things I enjoy the most is going to see local concerts, or my favorite artists when they play nearby.
//                     Below are a list of a few of my favorite albums
//                 </p>
//             </div>
//             <div>
//                 <div className="flex flex-col w-1/2">
//                     <h2 className="text-xl font-bold text-red-800">
//                         UPCHUCK
//                         <p>
//                             This group is a local punk rock band from Atlanta/Athens Georgia.
//                             I have been to a few of their shows, from Atlanta to Paris, and this year they took over my streaming on Spotify. This album, "Bite the Hand That Feeds," was one of my most played this past year.
//                         </p>
//                     </h2>
//                     <div>
//                         <img
//                             src={BTHTF}
//                             alt="BTHTF Album Cover"
//                             onMouseEnter={() => handleMouseEnter(scrugg)} // Pass argument using arrow function
//                             onMouseLeave={handleMouseLeave}
//                             className="w-1/2 h-auto rounded-lg object-cover hover:scale-110 transition-transform border b border-black p-2 bg-black"
//                         />
//                     </div>

//                     <h2 className="text-xl font-bold text-blue-800 pt-12">
//                         RadioHead
//                         <p>
//                             This is my favorite band/artist of all time and has been very influential on my music taste as a whole.
//                             The pictured album, In Rainbows, is my favorite of theirs and is one of my favorites in general.
//                         </p>
//                         <div>
//                             <img
//                                 src={inRainbows}
//                                 alt="In Rainbows Album Cover"
//                                 onMouseEnter={() => handleMouseEnter(jigsaw)} // Pass argument using arrow function
//                                 onMouseLeave={handleMouseLeave}
//                                 className="w-1/2 h-auto rounded-lg object-cover hover:scale-110 transition-transform border b border-black p-2 bg-black"
//                             />
//                         </div>
//                     </h2>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Music;
