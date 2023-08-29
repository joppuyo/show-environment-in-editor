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
            <rect width={40} height={40} x={4} y={4} fill="#F44336" rx={4} />
            <path
                fill="#FFF"
                d="M15 38a3 3 0 0 1-3-3v-6h2v6h.025c.1.49.485.875.974.975l.001.633V36h4v.608l.001-.633c.489-.1.874-.485.974-.974L20 35v-6h-.025c-.1-.49-.485-.875-.974-.975L19 28h-4v.025c-.49.1-.875.485-.975.974L12 29a3 3 0 0 1 3-3v.659V26h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4ZM22 15a3 3 0 0 1-3 3h-5v4h-2V10h7a3 3 0 0 1 3 3v2Zm-2 0v-2h-.025c-.1-.49-.485-.875-.974-.975L19 12h-5v4h4.999l.001-.025c.49-.1.875-.485.975-.974L20 15ZM36 15a3 3 0 0 1-3 3h-5v4h-2V10h7a3 3 0 0 1 3 3v2Zm-2 0v-2h-.025c-.1-.49-.485-.875-.974-.975L33 12h-5v4h4.999l.001-.025c.49-.1.875-.485.975-.974L34 15ZM36 35a3 3 0 0 1-3 3h-7V26h7a3 3 0 0 1 3 3v6Zm-2 0v-6h-.025c-.1-.49-.485-.875-.974-.975L33 28h-5v8h4.999l.001-.025c.49-.1.875-.485.975-.974L34 35Z"
            />
            <path fill="#FFF" d="m30 18 4 4h3l-5-5h-2z" />
        </g>
    </svg>
)
export default SvgComponent
