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
            <rect width={40} height={40} x={4} y={4} fill="#2196F3" rx={4} />
            <path
                fill="#FFF"
                d="M22 36v2h-7v-2h7Zm-7.975-1c.1.49.485.875.974.975L15 38a3 3 0 0 1-3-3h2.025ZM14 29v6h-2v-6h2Zm1-.975c-.49.1-.875.485-.975.974L12 29a3 3 0 0 1 3-3v1.123V26h7v2h-7v.025ZM12 22V10h2v10h8v2H12ZM36 19a3 3 0 0 1-3 3h-4v-2h3.999l.001-.025c.49-.1.875-.485.975-.974L36 19Zm-7.975 0c.1.49.485.875.974.975L29 22a3 3 0 0 1-3-3h2.025ZM28 13v6h-2v-6h2Zm5.975 0c-.1-.49-.485-.875-.974-.975L33 12h-4v.025c-.49.1-.875.485-.975.974L26 13a3 3 0 0 1 3-3v.659V10h4a3 3 0 0 1 3 3v6h-2v-6h-.025ZM33 26a3 3 0 0 1 3 3v9h-2v-4h-6v4h-2v-9h2v3h6v-3h-.025c-.1-.49-.485-.875-.974-.975L33 28h-4v-2h4Zm-4 0v2.025c-.49.1-.875.485-.975.974L26 29a3 3 0 0 1 3-3Z"
            />
        </g>
    </svg>
)
export default SvgComponent
