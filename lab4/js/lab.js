// Summary. A code meant to create a words search that the user can play within a browser.
// Description. Creates a words search based on randomly chosen words, then fills the blank spaces with random letters. The user can then use their mouse and play it in real time.
// @link   https://ryanpalmberg.github.io/art101/
// @file   This file defines the WordSearch class.
// @author Ryan Palmberg.
// @since  10.13.21

// Creating a word search game:
  // Print a board with a distinct number of randomized letters
    // Create a 12x12 grid
  // Print a “word list” for the user
    // Make a list of 6 randomized words from a pre-written word bank
  // Randomly insert words from the list horizontally, vertically, and diagonally
    // In the remaining spaces, fill each with a randomized letter
  // Accept user input
  // Validate user move
    // Allow the user to use their mouse to interact with the page
  // Draw a line through words on the board and on “word list”
    // Allow use of the mosue to draw a line
      // Line locked to 8 cardinal directions
      // Whichever cells the line touches are considered part of the attempt
        // If the letters selected match correctly, then answer is validated
    // Repeat for all words
  // Show “complete” and play confetti animation over the board when all words from list are crossed
