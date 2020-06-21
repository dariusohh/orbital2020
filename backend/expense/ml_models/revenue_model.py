import pandas as pd
import numpy as np
from datetime import timedelta
from fbprophet import Prophet

def revenue_predictor(sample_data):
    for objects in sample_data:
        del objects["id"]
        del objects["username"]
        del objects["name"]
        objects["amount"] = float(objects["amount"])
    data = pd.DataFrame(sample_data)
    data["created_at"] = pd.to_datetime(data["created_at"]) + timedelta(hours=8)
    data["created_at"] = data["created_at"].dt.tz_localize(None)
    data = data.rename(columns={"created_at":"ds","amount":"y"})
    prophet = Prophet(weekly_seasonality=False, daily_seasonality=False,yearly_seasonality=False)
    prophet.fit(data)
    future = prophet.make_future_dataframe(periods=6,freq="M")
    forecast =  prophet.predict(future)
    arr = []
    for index, row in forecast.iterrows():
        arr.append({"date":row["ds"],"value":row["yhat"]})
    return arr


