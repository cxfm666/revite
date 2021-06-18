import styled from "styled-components";
import { Info } from "@styled-icons/feather";
import { Children } from "../../types/Preact";

export const TipBase = styled.div`
	display: flex;
    padding: 12px;
    overflow: hidden;
    align-items: center;

    font-size: 14px;
    border-radius: 7px;
    background: var(--primary-header);
    border: 2px solid var(--secondary-header);

    a {
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    
    svg {
        flex-shrink: 0;
        margin-right: 10px;
    }
`;

export default function Tip(props: { children: Children }) {
    return (
        <TipBase>
            <Info size={20} strokeWidth={2} />
            <span>{ props.children }</span>
        </TipBase>
    )
}