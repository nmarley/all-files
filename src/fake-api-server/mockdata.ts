import { MockFilesResponse } from './types';

export const mockFilesResponse: MockFilesResponse = {
    totalCount: 9001,
    files: [
        {
            id: 1,
            filename: 'file1.txt',
            suppliers: ['supplier1', 'supplier2'],
            providers: ['provider1', 'provider2'],
            foundAt: new Date(),
        },
        {
            id: 2,
            filename: 'file2.txt',
            suppliers: ['supplier3', 'supplier4'],
            providers: ['provider3', 'provider4'],
            foundAt: new Date(),
        },
    ],
};
