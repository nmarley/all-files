import type React from "react";
import { useState } from "react";
// import { Table } from '@mantine/core';
import FileRow from "./FileRow";

import mockData from "../mockData";

export interface FileData {
	id: number;
	filename: string;
	suppliers: string[];
	providers: string[];
	foundAt: Date;
}

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
		<>
            <div>
            User: {user}<br />
            SupplierIds: {supplierIds.join(", ")}<br />
            Total files: {count}<br />
            </div>

            <div className="filesTable">
                {files.map((file) => (
                    <FileRow key={file.id} file={file} />
                ))}
            </div>
		</>
	);
};

export default AllFilesView;
