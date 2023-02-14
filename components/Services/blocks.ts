export interface IBlock {
    title: string,
    list: string[]
}

export const blocks: IBlock[] = [
    {
        title: 'Development',
        list: [
            'Layout of a landing page',
            'Website development',
            'SPA application development',
            'React application development'
        ]
    },
    {
        title: 'Design',
        list: [
            'Design for landing pages',
            'Design for communities',
            'Design for personal websites',
            'UI & UX design',
            'Design of logos, banners, covers and another'
        ]
    }
]