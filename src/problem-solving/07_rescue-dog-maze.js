/**
 * Please find a path to rescue the dog (d) from the maze
 * The maze is a 2 dimensional array which path is ' ' (space) and blocks are '#'
 * you can move left, right, top, up
 *
 * return path should be the array of position numbers order from start to reach dog.
 * 
 * what is the position number?
 * It is the number we assign for each cell in the maze from left to right and top to bottom in an incremented value.
 * which start from 0 to (size of the maze - 1)
 *
 * example for calculating position
 * maze size 8 x 6 (row x column)
 * a[0][1] = 1 
 * a[1][1] = 7
 * a[7][5] = 47
 *
 * If you cannot find the path please return undefined.
 *
 * See the test if you have questions.
 */

export const rescuePrincessPath = (details)=>
{
    const {rows,columns,startPosition,maze} = details;

    const queue = [];
    const position = [Math.floor(startPosition/rows),startPosition%columns];

    maze[position[0]][position[1]] = 1;
    queue.push([position]);

    while (queue.length > 0) {
        let path = queue.shift();
        const pos = path[path.length-1];
        const direction = [
            [pos[0] + 1, pos[1]],
            [pos[0], pos[1] + 1],
            [pos[0] - 1, pos[1]],
            [pos[0], pos[1] - 1]
        ];

        for (let i = 0; i < direction.length; i++) {
            if (direction[i][0]>=0 && direction[i][0] < rows && direction[i][1]>=0 && direction[i][1] < columns && maze[direction[i][0]][direction[i][1]] == 'd') {
                path = path.concat([direction[i]]);
                return path.map(item => item[0]*columns+item[1])
            }


            if (direction[i][0] < 0 || direction[i][0] >= rows
                || direction[i][1] < 0 || direction[i][1] >= columns
                || maze[direction[i][0]][direction[i][1]] != 0) {
                continue;
            }

            maze[direction[i][0]][direction[i][1]] = 1;
            queue.push(path.concat([direction[i]]));
        }
    }

}