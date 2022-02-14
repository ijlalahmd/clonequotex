import { CloseOutlined } from '@material-ui/icons'
import React from 'react'

export const Depoist = () => {
    return (
        <>
            <a
                className="depositBtn button"
                href="https://qxbroker.com/en/deposit"
            >
                <div className="button__icon">
                <CloseOutlined sx={{ fontSize: 20}}  className="icon-plus" />
                </div>
                <span>Deposit</span>
            </a>

        </>
    )
}
