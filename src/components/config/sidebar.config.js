import { GitHub, KeyboardArrowDown, LinkedIn, Photo, StarOutline, } from "@mui/icons-material";

export const SIDEBAR_DATA = [
    {
        name:'inbox',
        title:'Inbox',
        icon: Photo
    },
    {
        name:'github',
        title:'GitHub',
        icon: GitHub,
        url : 'https://github.com/aksharkh'
    },
    {
        name:'linkdin',
        title:'Linkdin',
        icon: LinkedIn,
        url : 'https://www.linkedin.com/in/akshar-k-h-1b404521b/'
    },
    {
        name:'starred',
        title:'Starred',
        icon: StarOutline
    },
    {
        name:'more',
        title:'More',
        icon: KeyboardArrowDown
    },
]