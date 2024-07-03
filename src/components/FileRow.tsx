import { Table } from '@mantine/core';
import React from 'react';
import { FileData } from '../types';

interface Props {
    file: FileData;
}

const FileRow: React.FC<Props> = ({ file }) => {
    // fancy logic here
    const supplierDisplay = file.supplierIds.join(', ');
    const providerDisplay = file.providers.join(', ');

    return (
        <>
            <Table.Tr key={file.id}>
                <Table.Td>{file.filename}</Table.Td>
                <Table.Td>{supplierDisplay}</Table.Td>
                <Table.Td>{providerDisplay}</Table.Td>
                <Table.Td>{file.foundAt}</Table.Td>
            </Table.Tr>
        </>
    );
    // TODO: Add a download button in the table ^^
    // <Button style={{ float: 'left' }}>DL-ICON</Button>
};

export default FileRow;
