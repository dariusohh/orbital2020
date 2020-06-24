
import pandas as pd
import numpy as np
import matplotlib as plt
from datetime import timedelta
import fbprophet

def expense_predictor(sample_data):
    for objects in sample_data:
        del objects["id"]
        del objects["username"]
        del objects["name"]
        objects["amount"] = float(objects["amount"])
    data = pd.DataFrame(sample_data)
    data["created_at"] = pd.to_datetime(data["created_at"]) + timedelta(hours=8)
    data["created_at"] = data["created_at"].dt.tz_localize(None)
    data = data.rename(columns={"created_at":"ds","amount":"y"})
    gm_prophet = fbprophet.Prophet(changepoint_prior_scale=0.15)
    gm_prophet.fit(data)
    gm_forecast = gm_prophet.make_future_dataframe(periods=6, freq='M')
    gm_forecast = gm_prophet.predict(gm_forecast)
    arr_month =[]
    for index, row in gm_forecast.iterrows():
        arr_month.append({"date":row["ds"],"value":row["yhat"]})
       
 
    return arr_month