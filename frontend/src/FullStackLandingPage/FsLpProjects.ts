interface IProject {
  title: string;
  githubLink: string;
  projectDesc: string;
}
export const projects : IProject[] = [
  {
    title:'Gis-Data-Visualizer',
    githubLink:'https://github.com/KirSpaceB/GIS-Data-Visualizer',
    projectDesc:'Web Application that visualizes population and county employment level on an interactive 2D map of the world.',
  },
  {
    title:'Personal-Investment-Helper',
    githubLink:'https://github.com/KirSpaceB/Personal-Investment-Helper',
    projectDesc:'Dashboard that links multiple financial Web APIs together leveraged for investment decisions',
  },
  {
    title:'Maze Solver',
    githubLink:'https://github.com/KirSpaceB/MazeSolver',
    projectDesc:'Interactive application that lets users draw a maze with obstacles, and solve with algorithms such as BFS and DFS.',
  },
]