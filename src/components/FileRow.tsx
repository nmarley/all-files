import React from 'react';
import { Table } from '@mantine/core';

export interface FileData {
    id: number;
    filename: string;
    suppliers: string[];
    providers: string[];
    foundAt: Date;
}

interface Props {
    entry: FileData;
}

const FileRow: React.FC<Props> = ({ entry }) => {
    return (
        <Table.Tr key={entry.id}>
            <Table.Td>{entry.id}</Table.Td>
            <Table.Td>{entry.food}</Table.Td>
            <Table.Td>{entry.quantity}</Table.Td>
            <Table.Td>{entry.measure}</Table.Td>
            <Table.Td>{entry.calories}</Table.Td>
            <Table.Td>{entry.consumedAt}</Table.Td>
        </Table.Tr>
    );
};

export default Entry;
