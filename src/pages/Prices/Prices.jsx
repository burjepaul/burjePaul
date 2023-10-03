import React from "react";

import './Prices.styles.scss'

const PricePage = () => {
    return(
        <div className="price-page-container">
            <h1 className="price-page-title">     
                Price Page
            </h1>
            <h2 className="price-page-subtitle">
                Fill belov from, and calculate an estimative price:
            </h2>
            <div className="form-component">

                <div className="form-row">

                    <p className="form-service">Websites:</p>
                    <label className="form-label">
                        Number of pages:
                        <input type="number" name="name" />
                    </label>
                    <label className="form-label">
                        Number of 3D Models:
                        <input type="number" name="name" />
                    </label>
                    <label className="form-label">
                        Logo Design:
                        <input type="checkbox" name="name" />
                    </label>

                </div>
                <div className="form-row">

                    <p className="form-service">Mobile App:</p>
                    <label className="form-label">
                        Number of pages:
                        <input type="number" name="name" />
                    </label>
                    <label className="form-label">
                        Number of 3D Models:
                        <input type="number" name="name" />
                    </label>
                    <label className="form-label">
                        Android:
                        <input type="checkbox" name="name" />
                    </label>
                    <label className="form-label">
                        iOS
                        <input type="checkbox" name="name" />
                    </label>
                    <label className="form-label">
                        Publish:
                        <input type="checkbox" name="name" />
                    </label>

                </div>
                <div className="form-row">

                    <p className="form-service">3d Models:</p>
                    <label className="form-label">
                        Basic:
                        <input type="number" name="name" />
                    </label>
                    <label className="form-label">
                        Higher Complexity:
                        <input type="number" name="name" />
                    </label>


                </div>
                <div className="form-row">

                    <p className="form-service">Others:</p>
                    <label className="form-label">
                        Web Scraper:
                        <input type="checkbox" name="name" />
                    </label>
                    <label className="form-label">
                        Excel Automations:
                        <input type="checkbox" name="name" />
                    </label>
                    <label className="form-label">
                        Backend + MySQL Database:
                        <input type="checkbox" name="name" />
                    </label>

                </div>

            </div>
        </div>
    )
}

export default PricePage