import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        {...props}
    >
        <g fill="none" fillRule="evenodd">
            <rect width={20} height={20} x={2} y={2} fill="#2196F3" rx={2} />
            <path
                fill="#FFF"
                d="M16.5 13a1.5 1.5 0 0 1 1.493 1.356L18 14.5V19h-1v-2h-3v2h-1v-4.5h1V16h3v-1.5h-.012a.626.626 0 0 0-.488-.487V14h-2v-1h2Zm-2 0v1.013a.626.626 0 0 0-.487.487H13a1.5 1.5 0 0 1 1.356-1.493L14.5 13ZM11 18v1H7.5v-1H11Zm-4-3.5v2.999l.012.001c.05.245.243.438.488.487V19A1.5 1.5 0 0 1 6 17.5v-3h1Zm4-1.5v1H7.5v.013a.626.626 0 0 0-.487.487H6A1.5 1.5 0 0 1 7.5 13H11ZM6 11V5h1v5h4v1H6ZM17 9.5v-3h-.012a.626.626 0 0 0-.488-.487V6h-2v.013a.626.626 0 0 0-.487.487H13A1.5 1.5 0 0 1 14.5 5h2A1.5 1.5 0 0 1 18 6.5v3a1.5 1.5 0 0 1-1.5 1.5h-2v-1h1.999l.001-.012a.626.626 0 0 0 .487-.488H17Zm-3-3v2.999l.012.001c.05.245.243.438.488.487V11A1.5 1.5 0 0 1 13 9.5v-3h1Z"
            />
        </g>
    </svg>
)
export default SvgComponent
