import React from 'react';
import { useState } from 'react';
import { Button, Container, Table, ScrollArea } from '@mantine/core';
import { FileData } from '../types';
import FileRow from './FileRow';

import mockData from '../mockData';

interface Props {
    // TODO: make this the full Supplier object from Core instead of breaking
    // this out, this is just a quick mock placeholder
    supplierIds: string[];
    user: string;
}

const AllFilesView: React.FC<Props> = ({ supplierIds, user }) => {
    // state thing for files
    // const [files, setFiles] = useState<FileData[]>([]);

    // The the API here using the filters in the state
    // const getFiles = async () => {
    // };
    // files = getFiles();

    const { count, files } = mockData;

    // TODO: table or something here to display the files

    // const fileDatas = mockData.files.map((file) => {
    //     return FileData {
    //         id: file.id,
    //         filename: file.filename,
    //         supplierIds: file.supplierIds,
    //         providers: file.providers,
    //         foundAt: file.foundAt,
    //     }
    // });

    return (
        <Container>
            <h3>
            Files for {supplierIds.length === 0 ? 'all suppliers' : 'suppliers' + supplierIds.join(', ')}
            Total files: {count}
            </h3>
            <Table
                stickyHeader
                striped
                withColumnBorders
                verticalSpacing="xl"
                miw={700}
            >
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Filename</Table.Th>
                        <Table.Th>Supplier</Table.Th>
                        <Table.Th>Source</Table.Th>
                        <Table.Th>Found At</Table.Th>
                    </Table.Tr>
                </Table.Thead>
            {files ? (
                <Table.Tbody>
                    {
                        files.map(
                            (file: FileData) => (
                                <FileRow key={file.id} file={file} />
                            )
                        )
                    }
                </Table.Tbody>
            ) : (
                <p>No data available.</p>
            )}
            </Table>
        </Container>
    );
};

export default AllFilesView;
