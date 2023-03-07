import type { ReactElement } from "react";
import appStyles from '@styles/App.module.css';

interface DrehenProps {

}

export default function Drehen(props: DrehenProps): ReactElement {
    return (
        <div className={ appStyles.container}>
            <p>ab und an drehe ich etwas an der drechselbank.</p>
        </div>    
    );
}