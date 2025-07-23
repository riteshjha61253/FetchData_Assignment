import { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import type { OverlayPanel as OverlayPanelType } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import '../style/overlayDropdown.css';

interface Props {
    onAutoSelectRows: (count: number) => void;
}

const OverlayDropdown = ({ onAutoSelectRows }: Props) => {
    const op = useRef<OverlayPanelType>(null);
    const [count, setCount] = useState<number | null>(null);

    const handleSubmit = () => {
        if (count && count > 0) {
            onAutoSelectRows(count);
            op.current?.hide();
        }
    };

    return (
        <div className="mr-5 overlay">
            <i
                className="pi pi-chevron-down"
                style={{ cursor: 'pointer' }}
                onClick={(e) => op.current?.toggle(e)}
            ></i>

            <OverlayPanel ref={op}>
                <div className="overlay-panel-content">
                    <InputNumber
                        placeholder="Number of rows"
                        value={count}
                        onValueChange={(e) => setCount(e.value ?? null)}
                        min={1}
                        inputClassName="custom-input"
                        showButtons={false}
                        inputStyle={{
                            width: '100%',
                            height: '40px',
                            boxShadow: 'none'
                        }}
                    />
                    <Button
                        label="Submit"
                        onClick={handleSubmit}
                        className="custom-submit-btn"
                    />
                </div>
            </OverlayPanel>
        </div>
    );
};

export default OverlayDropdown;
