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
            <rect width={20} height={20} x={2} y={2} fill="#43A047" rx={2} />
            <path
                fill="#FFF"
                d="M6 13h1v3H6zM18 5v1h-4v1h4v1h-4v2h4v1h-5V5h5ZM18 13v1h-4v1h4v1h-4v2h4v1h-5v-6h5ZM10 13h1v3h-1zM11 9.5A1.5 1.5 0 0 1 9.5 11H6V5h3.5A1.5 1.5 0 0 1 11 6.5v3Zm-1 0v-3h-.012a.626.626 0 0 0-.488-.487V6H7v4h2.499l.001-.012a.626.626 0 0 0 .487-.488H10Z"
            />
            <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 15.5v1l-2 2-2-2v-1"
            />
        </g>
    </svg>
)
export default SvgComponent
