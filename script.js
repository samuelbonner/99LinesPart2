let friends = ['Don', 'Leo', 'Mikey', 'Raph', 'Splinter']; //Arguably my only remaining childhood friends.

function linesOfCodeSong() {

    for (let i = 0; i < friends.length; i++) { // Select the friend from the array 'friends', repeats once for each friend and ends after one full rotation.
        console.log(friends[i].toUpperCase() + ":"); // List the friend's name in UPPERCASE who is about to 'sing'.

        // Below is the inner loop which generates the lines of code count.
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
                console.log(linesOfCode + " " + lineGrammar + " of code in the file, " + linesOfCode + " " + lineGrammar + " of code... " + friends[i] + " strikes one down, clears it all out, " + newNumberOfLines + " " + lineGrammar + " of code in the file...");
            } else if (linesOfCode == 2) { // Runs at 2 lines left, accounting for plural grammar for 2 lines and single grammar for 1 line
                console.log(linesOfCode + " " + lineGrammar + " of code in the file, " + linesOfCode + " " + lineGrammar + " of code... " + friends[i] + " strikes one down, clears it all out, " + newNumberOfLines + " line of code in the file...");
            } else if (linesOfCode == 1) { // Runs at 1 line left, accounting for no lines left afterwards.
                console.log(linesOfCode + " " + lineGrammar + " of code in the file, " + linesOfCode + " " + lineGrammar + " of code... " + friends[i] + " strikes it down, clears it all out, " + "no more lines of code in the file...");
            }
        }
        console.log(""); // blank line for visual readability
    }
}