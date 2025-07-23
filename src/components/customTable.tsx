
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import 'primereact/resources/themes/lara-light-teal/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import OverlayDropdown from './inputOverlay';
import '../App.css'
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
    selectedProducts: any[];
    setSelectedProducts: (data: any[]) => void;
    rowClick: boolean;
    setRowClick: (val: boolean) => void;
}


const CustomTable = ({ fetchApiData, selectedProducts, setSelectedProducts, rowClick, setRowClick, }: Props) => {
    return (
        <>
            <div className="card">
                <div className="flex justify-content-center align-items-center mb-4 gap-2">
                    <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e) => setRowClick(e.value)} />
                    <label htmlFor="input-rowclick">Row Click</label>
                </div>

                <DataTable value={fetchApiData} selectionMode={rowClick ? null : 'checkbox'} selection={selectedProducts} onSelectionChange={(e: any) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                    <Column field="title"
                        header={() => (
                            <div className="flex align-items-center gap-2" style={{ display: 'flex', marginLeft: "-20px" }}>
                                <OverlayDropdown className="mr-5 overlay" />
                                <span>Title</span>
                            </div>
                        )}
                        body={(rowData) => (
                            <div className="custom-title-cell">
                                {rowData.title}
                            </div>
                        )}
                    />
                    <Column field="place_of_origin" header="Place_Of_Origin"></Column>
                    <Column field="artist_display" header="Artist_Display"></Column>
                    <Column field="inscriptions" header="Inscriptions"></Column>
                    <Column field="date_start" header="Date_Start"></Column>
                    <Column field="date_end" header="date_end"></Column>
                </DataTable>
            </div>
        </>
    )
}

export default CustomTable

