type Domain = {
    id: number,
    name: string,
    isActive: boolean,
    lastChecked: string,
    createdAt: string
}

export const domains: Domain[] = [
    {
        id: 1,
        name: 'http://facebook.com',
        isActive: true,
        lastChecked: '2025-12-27',
        createdAt: '2025-12-27'
    },
    {
        id: 2,
        name: 'http://youtube.com',
        isActive: true,
        lastChecked: '2025-12-26',
        createdAt: '2025-12-26'
    }
]