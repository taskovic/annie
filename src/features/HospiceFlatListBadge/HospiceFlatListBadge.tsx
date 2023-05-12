import { LinearProgress } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import ThreeDotsCircleIcon from "~/components/icons/Badge/Badge";
import CircleXCloseWhiteIcon from "~/components/icons/CircleXCloseWhite/CircleXCloseWhite";

interface Props {
    value: number;
    open: boolean;
    handleOpen: Function;
    handleClose: Function;
}

export default function HospiceFlatListBadge({ value, open, handleOpen, handleClose }: Props) {

    const bgColor = value < 7.0 ? "bg-green" : "bg-blue";

    return (
        <>
            <div className="annie-badge">
                <div className={`badge-content ${bgColor}`}>
                    {value.toFixed(1)}
                    <ThreeDotsCircleIcon onClick={handleOpen} />
                </div>
                <div className="annie-badge-score-wrapper">
                    {
                        open &&
                        <div className="annie-badge-score" style={{}}>
                            <div className="badge-score-header">
                                <div>
                                    <div className="badge-score-label">
                                        Quality Score
                                    </div>
                                    <div>
                                        Excellent
                                    </div>
                                </div>
                                <div>
                                    <div className="annie-badge">
                                    <div className={`badge-content ${bgColor}`}>
                                        {value.toFixed(1)}
                                        <CircleXCloseWhiteIcon onClick={handleClose} />
                                    </div>
                                    </div>
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
            </div>

        </>
    )
}