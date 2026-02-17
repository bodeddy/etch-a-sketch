# Overall project

Build a browser version of something between a sketchpad and an Etch-A-Sketch.

## Create general set up

    Reference a container for the grid and create a grid square

## Create the initial grid

### High-level description of routine

    This routine creates a default 16x16 grid.

### High-level pseudocode

    Create a 16x16 grid
    Append grid to container

### Mid-level pseudocode

    Create function that generates grid with number parameter
        For number given multiply to create squares
        Append grids to parent container
        Add event listener to squares for hover effect
            Change colour of squares


## Add a clear button

### High-level description of routine

    This routine will allow the user to click a clear button to clear the grid of any colours from the hover effect.

### High-level pseudocode

    Create a button that clears the grids of colour

### Mid-level pseudocode

    Create a button that displays clear
    Remove colour from hover from squares when clicked

## User-created grid

### High-level description of the routine

    This routine asks the user to input a number, which will then generate a grid depending on that number.

### High-level pseudocode

    Create a button for the user
    Ask the user to input a number
    Create a grid using the user's given number

### Mid-level pseudocode

    Create a button for the user
    Ask the user to input a number
        If the number is less than 0 or greater than 100
            Ask the user to input another number
        Else remove the current grid and replace with new grid




