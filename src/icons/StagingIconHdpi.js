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
            <rect width={40} height={40} x={4} y={4} fill="#EF6C00" rx={4} />
            <path
                fill="#FFF"
                d="M12 13h2v1h.025c.1.49.485.875.974.975l.001.329V15h4a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-7v-2h6.999l.001-.025c.49-.1.875-.485.975-.974L20 19v-1h-.025c-.1-.49-.485-.875-.974-.975L19 17h-4a3 3 0 0 1-3-3v-1Zm3-.975c-.49.1-.875.485-.975.974L12 13a3 3 0 0 1 3-3v1.123V10h7v2h-7v.025ZM19 26a3 3 0 0 1 3 3v9h-2v-4h-6v4h-2v-9h2v3h6v-3h-.025c-.1-.49-.485-.875-.974-.975L19 28h-4v-2h4Zm-4 0v2.025c-.49.1-.875.485-.975.974L12 29a3 3 0 0 1 3-3ZM26 12v-2h10v2h-4v10h-2V12h-4ZM36 35a3 3 0 0 1-3 3h-4v-2h3.999l.001-.025c.49-.1.875-.485.975-.974L36 35Zm-7.975 0c.1.49.485.875.974.975L29 38a3 3 0 0 1-3-3h2.025ZM28 29v6h-2v-6h2Zm8 2v4h-2v-2h-4v-2h6Zm0-5v2h-7v.025c-.49.1-.875.485-.975.974L26 29a3 3 0 0 1 3-3v.659V26h7Z"
            />
        </g>
    </svg>
)
export default SvgComponent
