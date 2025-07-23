import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import type { OverlayPanel as OverlayPanelType } from 'primereact/overlaypanel';
import { InputText } from 'primereact/inputtext';

interface OverlayDropdownProps {
    className?: string; 
}

const OverlayDropdown: React.FC<OverlayDropdownProps> = ({ className }) => {
    const op = useRef<OverlayPanelType>(null);

    return (
        <div className={className}>
            <i className="pi pi-chevron-down"
                style={{ cursor: 'pointer' }}
                onClick={(e) => op.current?.toggle(e)}
            ></i>
            <OverlayPanel ref={op}>
                <InputText/>
                <ul className="list-none m-0 p-2">
                    <li className="mb-2 cursor-pointer">Test</li>
                </ul>
            </OverlayPanel>
        </div>
    );
};

export default OverlayDropdown;