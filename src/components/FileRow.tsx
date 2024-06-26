import type React from 'react';
// import { Table } from '@mantine/core';

export interface FileData {
    id: number;
    filename: string;
    supplierIds: string[];
    providers: string[];
    foundAt: string;
}

interface Props {
    file: FileData;
}

const FileRow: React.FC<Props> = ({ file }) => {
    // fancy logic here
    const supplierDisplay = file.supplierIds.join(', ');
    const providerDisplay = file.providers.join(', ');

    return (
        <>
            <div key={file.id}>
                <span>{file.filename}</span>
                <span>{supplierDisplay}</span>
                <span>{providerDisplay}</span>
                <span>{file.foundAt.toString()}</span>
            </div>
            <br />
        </>
        // <Table.Tr key={file.id}>
        // 	<Table.Td>{file.filename}</Table.Td>
        // 	<Table.Td>{supplierDisplay}</Table.Td>
        // 	<Table.Td>{providerDisplay}</Table.Td>
        // 	<Table.Td>{file.foundAt}</Table.Td>
        // </Table.Tr>
    );
};

export default FileRow;
