let friends = ['Don', 'Leo', 'Mikey', 'Raph', 'Splinter']; //Arguably my only remaining childhood friends.

/* 
Go to your code where you are "singing the song" and accomplish the following using DOM:
For every one of your friends, create a div with class friend
Put an h3 containing your friend's name in the div
Then, instead of using console.log to put the song lyrics in the console, create a paragraph for each song lyric line and put that paragraph in the friend div.
*/

function linesOfCodeSong() {

    for (let i = 0; i < friends.length; i++) {
        let friendsTurn = friends[i];
        let friendDiv = document.createElement('div');
        friendDiv.className = friendsTurn.toLowerCase();
        let friendH3 = document.createElement('h3');
        friendH3.innerHTML = (friendsTurn.toUpperCase() + ":");
        friendDiv.appendChild(friendH3);
        document.body.append(friendDiv);


        // for (let i = 0; i < friends.length; i++) { // Select the friend from the array 'friends', repeats once for each friend and ends after one full rotation.

        for (let linesOfCode = 99; linesOfCode >= 0; linesOfCode--) {

            // This will solve the grammar for lines of code (except when lines == 0, which is hard-coded as the sentence structure is different.)
            let lineGrammar = 'lines';
            let newNumberOfLines = linesOfCode - 1;
            if (linesOfCode == 1) {
                lineGrammar = 'line';
            } else {
                lineGrammar = 'lines';
            }

            if (linesOfCode > 2) { // Runs from 99-2 lines
                let songLyrics = document.createElement('p');
                let songLines = document.createElement('p');
                songLines = ((linesOfCode + " " + lineGrammar + " of code in the file, " + linesOfCode + " " + lineGrammar + " of code... " + friends[i] + " strikes one down, clears it all out, " + newNumberOfLines + " " + lineGrammar + " of code in the file..."));
                songLyrics.innerHTML = songLines;
                friendDiv.appendChild(songLyrics);
            } else if (linesOfCode == 2) { // Runs at 2 lines left, accounting for plural grammar for 2 lines and single grammar for 1 line
                let songLyrics = document.createElement('p');
                let songLines = document.createElement('p');
                songLines = ((linesOfCode + " " + lineGrammar + " of code in the file, " + linesOfCode + " " + lineGrammar + " of code... " + friends[i] + " strikes one down, clears it all out, " + newNumberOfLines + " line of code in the file..."));
                songLyrics.innerHTML = songLines;
                friendDiv.appendChild(songLyrics);

            } else if (linesOfCode == 1) { // Runs at 1 line left, accounting for no lines left afterwards.
                let songLyrics = document.createElement('p');
                let songLines = document.createElement('p');
                songLines = ((linesOfCode + " " + lineGrammar + " of code in the file, " + linesOfCode + " " + lineGrammar + " of code... " + friends[i] + " strikes it down, clears it all out, " + "no more lines of code in the file..."));
                songLyrics.innerHTML = songLines;
                friendDiv.appendChild(songLyrics);

            }
        }
        // console.log(""); // blank line for visual readability
        // }
    }
}

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });


let singButton = document.getElementById('singButton');
singButton.addEventListener('click', linesOfCodeSong)