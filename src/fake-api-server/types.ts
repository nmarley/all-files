export interface MockFileData {
    id: number;
    filename: string;
    suppliers: string[];
    providers: string[];
    foundAt: Date;
}

export interface MockFilesResponse {
    // this response will be paginated so totalCount !== files.length
    totalCount: number;
    files: MockFileData[];
}
