
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-teal/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
interface Data_Format {
    title: string;
    place_of_origin: string;
    artist_display: string;
    inscriptions: string;
    date_start: number;
    date_end: number;
}

interface Props {
    fetchApiData: Data_Format[];
}
const CustomTable = ({ fetchApiData }: Props) => {
    return (
        <>
            <DataTable value={fetchApiData} tableStyle={{ minWidth: '50rem' }}>
                <Column field="title" header="Title"></Column>
                <Column field="place_of_origin" header="Place_Of_Origin"></Column>
                <Column field="artist_display" header="Artist_Display"></Column>
                <Column field="inscriptions" header="Inscriptions"></Column>
                <Column field="date_start" header="Date_Start"></Column>
                <Column field="date_end" header="date_end"></Column>
            </DataTable>
        </>
    )
}

export default CustomTable

