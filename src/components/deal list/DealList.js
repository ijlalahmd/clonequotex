import React from 'react'
import { DownArrow } from '../../Asset/svg/Downsvg'
import "./DealList.css"
export const DealList = () => {
    return (
        <div className="deal-list ">
            <div className="deal-list__tabs">
                <div className="deal-list__tab  active">
                    <div>Trades</div>
                    <div className="deal-list__tab-count">0</div>
                </div>
                <div className="deal-list__tab ">
                    <svg className="icon-deal-list-orders">
                        <use xlinkHref="#spritemap_icon-deal-list-orders" />
                    </svg>
                    <div className="deal-list__tab-count">0</div>
                </div>
            </div>
            <div className="deal-list__items">
                <div className="trades-list__date">
                    10 February<span>1</span>
                </div>
                <div className="trades-list__item trades-list-item trades-list-item__close">
                    <div className="trades-list-item__title">
                        {/* <svg className="icon-caret trades-list-item__caret">
                            <use xlinkHref="#spritemap_icon-caret" />
                        </svg> */}
                        <DownArrow />
                        <div className="flags trades-list-item__flags flags">
                            {/* <svg className="flag-eur">
                                <use xlinkHref="#flags_flag-eur" />
                            </svg>
                            <svg className="flag-jpy">
                                <use xlinkHref="#flags_flag-jpy" />
                            </svg> */}
                              <DownArrow />
                        </div>
                        <div className="trades-list-item__name">EUR/JPY</div>
                        <div className="trades-list-item__countdown">00:00:48</div>
                        <div className="trades-list-item__delta trades-list-item__delta--up">
                        <DownArrow />
                            1,000 $
                            <div className="trades-list-item__delta-right trades-list-item__delta--up">
                                +1,100.00 $
                            </div>
                        </div>
                    </div>
                    {/* <ul className="trades-list-item__details close">
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">ID:</div>
                            <div className="trades-list-item__details-content__text">
                                bff49fe2-e4cd-4c7e-a801-9471f35067dc
                            </div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Trade Pair:
                            </div>
                            <div className="trades-list-item__details-content__text">
                                EUR/JPY<div className="trades-list-item__percent">10%</div>
                            </div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Open Price:
                            </div>
                            <div className="trades-list-item__details-content__text">132.116</div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Close Price:
                            </div>
                            <div className="trades-list-item__details-content__text">132.15</div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Open time:
                            </div>
                            <div className="trades-list-item__details-content__text">
                                2022-02-10 06:25:12.42
                            </div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Close Time:
                            </div>
                            <div className="trades-list-item__details-content__text">
                                2022-02-10 06:26:00.156
                            </div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Duration:
                            </div>
                            <div className="trades-list-item__details-content__text">00:00:48</div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Difference:
                            </div>
                            <div className="trades-list-item__details-content__text">34</div>
                        </li>
                    </ul> */}
                </div>
                {/* <div className="trades__placeholder">
                    <svg className="icon-trades-empty">
                        <use xlinkHref="#spritemap_icon-trades-empty" />
                    </svg>
                    <p>
                        You don't have a trade history yet. You can open a trade using the form
                        above.
                    </p>
                </div> */}
            </div>
        </div>
    )
}
