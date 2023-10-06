import React, { useEffect, useState } from "react";

import { useReducer } from "react";

import './Prices.styles.scss'
import { prices } from "../../config/constants";

const PricePage = () => {

    const [price, setPrice] = useState(0)

    const priceCalculator = (state, prices) => {
        let calculatedPrice = 0
        
        if (state.backend_mysql) calculatedPrice += prices.backend_mysql
        if (state.excel_automation) calculatedPrice += prices.excel_automations
        if (state.web_scraper) calculatedPrice += prices.web_scrapers
        if (state.mobile_app_android_ios) calculatedPrice += prices.mobile_app_android_ios
        if (state.mobile_app_publish) calculatedPrice += prices.mobile_app_publish
        if (state.model_basic) calculatedPrice += prices.models_basic
        if (state.model_high_complexity) calculatedPrice += prices.models_high_complexity
        if (state.website_logo_design) calculatedPrice += prices.website_logo_design
        
        calculatedPrice += parseInt(state.mobile_app_3d_models) * prices.mobile_app_3d_model + parseInt(state.website_3d_models) * prices.website_3d_model

        if (state.mobile_app_pages === '1') calculatedPrice += prices.mobile_app
        else if (state.mobile_app_pages >= 1) calculatedPrice += (parseInt(state.mobile_app_pages - 1)) * prices.mobile_app_page + prices.mobile_app

        if (state.website_pages === '1') calculatedPrice += prices.website
        else if (state.website_pages >= 1) calculatedPrice += (parseInt(state.website_pages - 1)) * prices.website_page + prices.website
        return calculatedPrice
    }

    
    const ACTION_TYPES = {
        change_website_pages: 'change_websites_pages_number',
        change_website_3d_model: 'change_website_3d_model',
        change_website_logo_desing: 'change_website_logo_desing',
        change_mobile_app_pages:'change_mobile_app_pages',
        change_mobile_app_3d_models:'change_mobile_app_3d_models',
        change_mobile_app_android_ios: 'change_mobile_app_android_ios',
        change_mobile_app_publish:'change_mobile_app_publish',
        change_model_basic:'change_model_basic',
        change_model_high_complexity:'change_model_high_complexity',
        change_web_scraper:'change_web_scraper',
        change_excel_automation:'change_excel_automation',
        change_backend_mysql:'change_backend_mysql',
    }
    
    
    const INITIAL_VALUES = {
        website_pages: 0,
        website_3d_models: 0,
        website_logo_design: false,
        mobile_app_pages: 0,
        mobile_app_3d_models: 0,
        mobile_app_android_ios: false,
        mobile_app_publish: false,
        model_basic: false,
        model_high_complexity: false,
        web_scraper: false,
        excel_automation: false,
        backend_mysql: false
    }
    
    const reducer = (state, action) => {
        if (action.type === ACTION_TYPES.change_website_pages){

            if(action.value > 0 && action.value <= 25)
            return {
                ...state,
                website_pages : action.value
                }
                else if(action.value >= 25){
                    return {
                        ...state,
                        website_pages : 25
                    }   
                }
                else{
                    return {
                        ...state,
                        website_pages : 0,
                        website_3d_models: 0,
                        website_logo_design: false,
                    }   
        }}
        if (action.type === ACTION_TYPES.change_website_3d_model){
            if (action.value >= 1 && state.website_pages === 0) {
                return {
                    ...state,
                    website_pages: 1,
                    website_3d_models : action.value
                }
            }
            if(action.value >= 0 && action.value <= 8)
                return {
                    ...state,
                    website_3d_models : action.value
                    }
            else if(action.value >= 8){
                return {
                    ...state,
                    website_3d_models : 8
                }   
            }
            else{
                return {
                    ...state,
                    website_3d_models : 0
                }   
        }}
        if (action.type === ACTION_TYPES.change_website_logo_desing){
            if (state.website_pages === 0){
                return {
                    ...state,
                    website_pages: 1,
                    website_logo_design : action.value
                }}

            else {
                return {
                    ...state,
                    website_logo_design : action.value
                }
        }}
        if (action.type === ACTION_TYPES.change_mobile_app_pages){
            if(action.value > 0 && action.value <= 12)
                return {
                    ...state,
                    mobile_app_pages : action.value
                }
            else if(action.value >= 12){
                return {
                    ...state,
                    mobile_app_pages : 12
                }   
            }
            else{
                return {
                    ...state,
                    mobile_app_pages : 0,
                    mobile_app_android_ios: false,
                    mobile_app_publish: false,
                }   
        }}
        if (action.type === ACTION_TYPES.change_mobile_app_3d_models){
            if (action.value >= 1 && state.mobile_app_pages === 0) {
                return {
                    ...state,
                    mobile_app_pages: 1,
                    mobile_app_3d_models : action.value
                }
            }
            if(action.value >= 0 && action.value <= 8)
                return {
                    ...state,
                    mobile_app_3d_models : action.value
                }
            else if(action.value >= 8){
                return {
                    ...state,
                    mobile_app_3d_models : 8
                }   
            }
            else{
                return {
                    ...state,
                    mobile_app_3d_models : 0
                }   
        }}
        if (action.type === ACTION_TYPES.change_mobile_app_android_ios){
            if(state.mobile_app_pages === 0){
                return {
                    ...state,
                    mobile_app_pages: 1,
                    mobile_app_android_ios : action.value
                }}
                else{
                    return{
                        ...state,
                        mobile_app_android_ios : action.value
                }
        }}
        if (action.type === ACTION_TYPES.change_mobile_app_publish){
            if(state.mobile_app_pages === 0){
                return {
                    ...state,
                    mobile_app_pages: 1,
                    mobile_app_publish : action.value
                }}
                else{
                return{
                    ...state,
                    mobile_app_publish : action.value
                }
        }}
        if (action.type === ACTION_TYPES.change_model_basic){
            return {
                ...state,
                model_basic : action.value
        }}
        if (action.type === ACTION_TYPES.change_model_high_complexity){
            return {
                ...state,
                model_high_complexity : action.value
        }}
        if (action.type === ACTION_TYPES.change_web_scraper){
            return {
                ...state,
                web_scraper : action.value
        }}
        if (action.type === ACTION_TYPES.change_excel_automation){
            return {
                ...state,
                excel_automation : action.value
        }}
        if (action.type === ACTION_TYPES.change_backend_mysql){
            return {
                ...state,
                backend_mysql : action.value
        }}
    }
    
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUES)
    
    useEffect (()=> {
        setPrice(priceCalculator(state,prices))
    },[state, price])

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
                        Number of pages
                        <input className="number-input" type="number" name="name" value={state.website_pages} onChange={(e) => {dispatch({type:ACTION_TYPES.change_website_pages, value:e.target.value})}}/>
                    </label>
                    <label className="form-label">
                        Number of 3D Models
                        <input className="number-input" type="number" name="name" value={state.website_3d_models} onChange={(e) => {dispatch({type:ACTION_TYPES.change_website_3d_model, value:e.target.value})}}/>
                    </label>
                    <label className="form-label">
                        Logo Design
                        <span>
                            <input className="checkbox-input" type="checkbox" name="name" checked={state.website_logo_design} onChange={(e) => {dispatch({type:ACTION_TYPES.change_website_logo_desing, value:e.target.checked})}}/>
                        </span>
                    </label>

                </div>
                <div className="form-row">

                    <p className="form-service">Mobile App:</p>
                    <label className="form-label">
                        Number of pages
                        <input className="number-input" type="number" name="name" value={state.mobile_app_pages} onChange={(e) => {dispatch({type:ACTION_TYPES.change_mobile_app_pages, value:e.target.value})}}/>
                    </label>
                    <label className="form-label">
                        Number of 3D Models
                        <input className="number-input" type="number" name="name" value={state.mobile_app_3d_models} onChange={(e) => {dispatch({type:ACTION_TYPES.change_mobile_app_3d_models, value:e.target.value})}}/>
                    </label>
                    <label className="form-label">
                        Android+iOS
                        <span>
                            <input className="checkbox-input" type="checkbox" name="name" checked={state.mobile_app_android_ios} onChange={(e) => {dispatch({type:ACTION_TYPES.change_mobile_app_android_ios, value:e.target.checked})}}/>
                        </span>
                    </label>
                    <label className="form-label">
                        Publish
                        <span>
                            <input className="checkbox-input" type="checkbox" name="name" checked={state.mobile_app_publish} onChange={(e) => {dispatch({type:ACTION_TYPES.change_mobile_app_publish, value:e.target.checked})}}/>
                        </span>
                    </label>

                </div>
                <div className="form-row">

                    <p className="form-service">3d Models:</p>
                    <label className="form-label">
                        Basic
                        <span>
                            <input className="checkbox-input" type="checkbox" name="name" checked={state.model_basic} onChange={(e) => {dispatch({type:ACTION_TYPES.change_model_basic, value:e.target.checked})}}/>
                        </span>
                    </label>
                    <label className="form-label">
                        Higher Complexity
                        <span>
                            <input className="checkbox-input" type="checkbox" name="name" checked={state.model_high_complexity} onChange={(e) => {dispatch({type:ACTION_TYPES.change_model_high_complexity, value:e.target.checked})}}/>
                        </span>
                    </label>


                </div>
                <div className="form-row">

                    <p className="form-service">Others:</p>
                    <label className="form-label">
                        Web Scraper
                        <span>
                            <input className="checkbox-input" type="checkbox" name="name" checked={state.web_scraper} onChange={(e) => {dispatch({type:ACTION_TYPES.change_web_scraper, value:e.target.checked})}}/>
                        </span>
                    </label>
                    <label className="form-label">
                        Excel Automation
                        <span>
                            <input className="checkbox-input" type="checkbox" name="name" checked={state.excel_automation} onChange={(e) => {dispatch({type:ACTION_TYPES.change_excel_automation, value:e.target.checked})}}/>
                        </span>
                    </label>
                    <label className="form-label">
                        Backend + MySQL Database
                        <span>
                            <input className="checkbox-input" type="checkbox" name="name" checked={state.backend_mysql} onChange={(e) => {dispatch({type:ACTION_TYPES.change_backend_mysql, value:e.target.checked})}}/>
                        </span>
                    </label>

                </div>


                <h1 className="price-text">Price {price}$</h1>
                {state.web_scraper || state.excel_automation || state.backend_mysql ? 
                <h1 className="others-text price-text">For "Others" services, price may vary depending of your requirements.</h1>
                :null}
            </div>
            <div className="eta-container">
                    <h1 className="eta-text">For websites, the estimated building time should be around 3 days, and one day for each page/3d model.</h1>
                    <h1 className="eta-text">For mobile apps, I cannot give an estimeted time, it can vary between a week and mounths.</h1>
            </div>
        </div>
    )
}

export default PricePage