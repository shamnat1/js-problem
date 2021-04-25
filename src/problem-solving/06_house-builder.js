 /**
 * Your function should print a house according to the following specification
 *
 * Param 1: height
 * Param 2: width
 * If width is not provided width = height
 *
 * Doors:
 * A door is always 3 fields wide and min 2 and max 3 field high.
 * It is always on the bottom center of the house and always has at least 1 free row above.
 * If it does not fit into the house, there is no door.
 *
 * Windows:
 * There is either (a) no window (not enough space in the house) or (b) two windows in the house.
 * Each window has a height of 3x3.
 * They always have the same distance from each other as from the left and right wall of the house.
 * If the math does not work out the adjustment is done in the center between both windows.
 * Vertically they are always in the center between the top of the door and the bottom of the roof.
 *
 * We rather have a door in the house, then windows.
 *
 * Please implement it generic, not just to fulfill the test.
 * See the test to find the charakters to use and to answer your questions.
 */



 const house = (height = 3,width = height) => {
     const top =`^`;
     const roofLeft = `/`;
     const roofRight = `\\`;
     const wall = `|`;
     const floor = `_`;
     const space = ' '
     const newLine = `\n`
     let homeO = `${newLine}`;

     let roofBar = Math.ceil(width/2)+1;
     let beginSpace = width>1?Math.ceil(width/2):1;
     let middleSpace = 0;

     for(let i=0;i<roofBar;i++){
         if(width%2 !== 0 && i==0){
             homeO += `${space.repeat(beginSpace)}${top}${newLine}`;
             middleSpace++;
         }else{
             homeO += `${space.repeat(beginSpace)}${roofLeft}${space.repeat(middleSpace)}${roofRight}${newLine}`
             middleSpace +=2;
         }
         beginSpace--;
     }

     //Door definition
     const doorFrame = ['| |','_']
     let doorHeight = 0;
     const doorWidth = 3;
     if(width >= 3 && height >= 3 ){
         doorHeight = 3;
     }
     if(width >= 3 && height == 2){
         doorHeight = 2;
     }
     let doorSpace = ((width-doorWidth)/2)+1;


     //Window definition
     const windowFrame = ['|_|','_']
     let windowSize = 0;
     let windowSpace = 0
     let windowBwSpace = 0
     let windowHeightSpace = 0;
     if(width >=5 && height >=5 && (width-6)%2===0 && (height-5)>=0 ){
         windowSize = 3;
         windowBwSpace = ((width-2)/2);
         windowSpace = (windowBwSpace/2)
         windowHeightSpace = 2;
     }

     for(let i=height-1;i>0;i--){

         if(doorHeight>0 && i<doorHeight){
             homeO += `${wall}${space.repeat(Math.ceil(doorSpace))}${doorFrame[(doorHeight-i)%2]}${space.repeat(doorSpace)}${wall}${newLine}`
             doorSpace--;
         }
         else if(windowSize>0 && windowHeightSpace > 0){
             homeO += `${wall}${space.repeat(Math.ceil(windowSpace))}${windowFrame[windowHeightSpace-1]}${space.repeat(windowBwSpace)}${windowFrame[windowHeightSpace-1]}${space.repeat(Math.ceil(windowSpace))}${wall}${newLine}`
             windowSpace--;
             windowBwSpace -= 2;
             windowHeightSpace--
         }
         else
             homeO += `${wall}${space.repeat(width)}${wall}${newLine}`
     }

     if(doorHeight>0){
         doorSpace = ((width-doorWidth)/2);
         homeO += `${wall}${floor.repeat(Math.ceil(doorSpace))}${doorFrame[0]}${floor.repeat(doorSpace)}${wall}`
     }
     if(doorHeight === 0)
         homeO += `${wall}${floor.repeat(width)}${wall}`

     return homeO;

 }

export default house;

