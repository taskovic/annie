import "./no-data.scss"

interface INoData {
    children: any;
}

export default function NoData({
    children
}: INoData) {

    return (
        <div className="annie-no-data-root">
            {children}
        </div>
    )
}