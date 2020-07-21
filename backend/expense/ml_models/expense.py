
import pandas as pd
import numpy as np
import matplotlib as plt
from datetime import timedelta
import fbprophet
from fbprophet.diagnostics import performance_metrics


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
    #dataframe of annual  Public Holidays 
    ny = pd.DataFrame({'holiday': "New Year's Day", 'ds' : pd.to_datetime(['2019-01-01', '2020-01-01'])})  
    mlk = pd.DataFrame({'holiday': 'Lunar New Year1', 'ds' : pd.to_datetime(['2019-02-05', '2020-01-25'])}) 
    mlk2 = pd.DataFrame({'holiday': 'Lunar New Year2', 'ds' : pd.to_datetime(['2019-02-06', '2020-01-26'])}) 
    wash = pd.DataFrame({'holiday': "Good Friday", 'ds' : pd.to_datetime(['2019-04-19', '2017-04-10'])})
    ind = pd.DataFrame({'holiday': 'National Day', 'ds' : pd.to_datetime(['2019-08-10', '2020-08-10'])})
    lab = pd.DataFrame({'holiday': 'Labor Day', 'ds' : pd.to_datetime(['2019-05-01', '2020-05-01'])})
    col = pd.DataFrame({'holiday': 'Vesak Day', 'ds' : pd.to_datetime(['2019-05-19', '2020-05-07'])})
    vet = pd.DataFrame({'holiday': "eid al-fitr", 'ds' : pd.to_datetime(['2019-05-05', '2020-05-23'])})
    thanks = pd.DataFrame({'holiday': 'Eid al-adha', 'ds' : pd.to_datetime(['2019-08-11', '2020-07-30'])})
    christ = pd.DataFrame({'holiday': 'Christmas', 'ds' : pd.to_datetime(['2019-12-25', '2020-12-25'])})
    inaug = pd.DataFrame({'holiday': 'Diwali', 'ds' : pd.to_datetime(['2019-10-28','2020-11-14'])})

    public_holidays = pd.concat([ny, mlk,mlk2, wash, ind, lab, col, vet, thanks, christ, inaug])
    gm_prophet = fbprophet.Prophet(changepoint_prior_scale=0.15,yearly_seasonality=True,holidays=public_holidays)
    gm_prophet.fit(data)
    gm_forecast = gm_prophet.make_future_dataframe(periods=6, freq='M')
    gm_forecast = gm_prophet.predict(gm_forecast)
    arr_month =[]
    for index, row in gm_forecast.iterrows():
        arr_month.append({"date":row["ds"],"value":row["yhat"]})
       
    return arr_month
