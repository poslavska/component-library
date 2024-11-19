import './Badge.css'

export default function Badge({color="gray", border="pill", children="badge"}) {

    return (
        <div className={`badge ${border} ${color}`}>
            {children}
        </div>
    )
}