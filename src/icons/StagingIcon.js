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
            <rect width={20} height={20} x={2} y={2} fill="#EF6C00" rx={2} />
            <path
                fill="#FFF"
                d="M9.5 7A1.5 1.5 0 0 1 11 8.5v1h-1v-1h-.012a.626.626 0 0 0-.488-.487V8h-2V7h2ZM11 5v1H7.5v.013a.626.626 0 0 0-.462.398l-.026.089c.05.245.243.438.488.487V8a1.5 1.5 0 0 1 0-3H11Zm-5 6v-1h3.499l.001-.012a.626.626 0 0 0 .487-.488H11A1.5 1.5 0 0 1 9.5 11H6ZM18 5v1h-2v5h-1V6h-2V5h5ZM14.5 18h1.999l.001-.012a.626.626 0 0 0 .487-.488H17V16h-2v-1h3v2.5a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-3h1v2.999l.012.001c.05.245.243.438.488.487v.308V18Zm3.5-5v1h-3.5v.013a.626.626 0 0 0-.487.487H13a1.5 1.5 0 0 1 1.5-1.5H18ZM9.5 13a1.5 1.5 0 0 1 1.493 1.356L11 14.5V19h-1v-2H7v2H6v-4.5h1V16h3v-1.5h-.012a.626.626 0 0 0-.488-.487V14h-2v-1h2Zm-2 0v1.013a.626.626 0 0 0-.487.487H6a1.5 1.5 0 0 1 1.356-1.493L7.5 13Z"
            />
        </g>
    </svg>
)
export default SvgComponent
