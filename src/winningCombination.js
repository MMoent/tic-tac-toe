export const WINNING_COMBINATIONS = [
    // Horizontal Wins
    [
        {rowIdx: 0, colIdx: 0},
        {rowIdx: 0, colIdx: 1},
        {rowIdx: 0, colIdx: 2},
    ],
    [
        {rowIdx: 1, colIdx: 0},
        {rowIdx: 1, colIdx: 1},
        {rowIdx: 1, colIdx: 2},
    ],
    [
        {rowIdx: 2, colIdx: 0},
        {rowIdx: 2, colIdx: 1},
        {rowIdx: 2, colIdx: 2},
    ],
    // Vertical Wins
    [
        {rowIdx: 0, colIdx: 0},
        {rowIdx: 1, colIdx: 0},
        {rowIdx: 2, colIdx: 0},
    ],
    [
        {rowIdx: 0, colIdx: 1},
        {rowIdx: 1, colIdx: 1},
        {rowIdx: 2, colIdx: 1},
    ],
    [
        {rowIdx: 0, colIdx: 2},
        {rowIdx: 1, colIdx: 2},
        {rowIdx: 2, colIdx: 2},
    ],
    // Diagonal Wins
    [
        {rowIdx: 0, colIdx: 0},
        {rowIdx: 1, colIdx: 1},
        {rowIdx: 2, colIdx: 2},
    ],
    [
        {rowIdx: 0, colIdx: 2},
        {rowIdx: 1, colIdx: 1},
        {rowIdx: 2, colIdx: 0},
    ]
];
