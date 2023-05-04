import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ThreeDotsCircleIcon from "~/components/icons/Badge/Badge";
import CircleXCloseWhiteIcon from "~/components/icons/CircleXCloseWhite/CircleXCloseWhite";

interface Props {
    value: number;
}

export default function HospiceFlatListBadge({ value }: Props) {

    const [open, setOpen] = useState(false)
    const [bgColor, setBgColor] = useState("bg-blue")

    useEffect(() => {
        console.log(value, value < 7)
        if (value < 7.0)
            setBgColor("bg-green")
    })

    return (
        <>
            <div className="annie-badge">
                <div className={`badge-content ${bgColor}`}>
                    {value.toFixed(1)}
                    <ThreeDotsCircleIcon onClick={() => { setOpen(true) }} />
                </div>
                {
                    open &&
                    <div className="annie-badge-score">
                        <div className="badge-score-header">
                            <div>
                                <div className="badge-score-label">
                                    Quality Score
                                </div>
                                <div>
                                    Excellent
                                </div>
                            </div>
                            <div className={`badge-content ${bgColor}`}>
                                {value.toFixed(1)}
                                <CircleXCloseWhiteIcon onClick={() => { setOpen(false) }} />
                            </div>
                        </div>
                        <div className="badge-score-content">
                            <div className="score-content-item">
                                <div>
                                    <div className="badge-score-label">
                                        Pain Management
                                    </div>
                                    <div>
                                        10
                                    </div>
                                </div>
                                <div>
                                    <LinearProgress className="score-item-value" value={10 * 10} variant="determinate" />
                                </div>
                            </div>
                            <div className="score-content-item">
                                <div>
                                    <div className="badge-score-label">
                                        Visits in Last Days of Life
                                    </div>
                                    <div>
                                        5
                                    </div>
                                </div>
                                <div>
                                    <LinearProgress className="score-item-value" value={5 * 10} variant="determinate" />
                                </div>
                            </div>
                            <div className="score-content-item">
                                <div>
                                    <div className="badge-score-label">
                                        Emergency Responsiveness
                                    </div>
                                    <div>
                                        7
                                    </div>
                                </div>
                                <div>
                                    <LinearProgress className="score-item-value" value={7 * 10} variant="determinate" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </>
    )
}