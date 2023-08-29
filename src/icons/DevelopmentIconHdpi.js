import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        {...props}
    >
        <g fill="none" fillRule="evenodd">
            <rect width={40} height={40} x={4} y={4} fill="#43A047" rx={4} />
            <path
                fill="#FFF"
                d="M12 26h2v6h-2zM36 10v2h-8v3h8v2h-8v3h8v2H26V10h10ZM36 26v2h-8v3h8v2h-8v3h8v2H26V26h10ZM20 26h2v6h-2zM22 19a3 3 0 0 1-3 3h-7V10h7a3 3 0 0 1 3 3v6Zm-2 0v-6h-.025c-.1-.49-.485-.875-.974-.975L19 12h-5v8h4.999l.001-.025c.49-.1.875-.485.975-.974L20 19Z"
            />
            <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 31v2l-4 4-4-4v-2"
            />
        </g>
    </svg>
)
export default SvgComponent
